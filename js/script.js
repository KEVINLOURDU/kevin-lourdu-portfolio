/* ==========================================================================
   KEVIN LOURDU - INTERACTION & MOTION CONTROLLER
   Clean-Room Architecture with 3D Spatial Perspective & Audio Feedback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAudioFeedback();
  init3DSpatialPerspective();
  initNavigation();
  initContactForm();
  initFilters();
  initBackToTop();
  handleUrlHashRouting();
});

/* ==========================================================================
   1. WEB AUDIO API SYNTHESIS (Emil Kowalski feedback standard)
   ========================================================================== */
let audioCtx = null;

function initAudioFeedback() {
  const interactiveElements = document.querySelectorAll(
    'button, .nav-item, .action-pill, .social-link-btn, .primary-cta-btn, .subject-btn, .filter-pill, .submit-btn, .accent-card, .project-card, .skill-card, .connect-box'
  );

  const playClickSound = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.012);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.012);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.014);
    } catch (e) {
      // Audio context may be restricted before user gesture
    }
  };

  interactiveElements.forEach(el => {
    el.addEventListener('mousedown', playClickSound);
  });
}

/* ==========================================================================
   2. 3D SPATIAL PERSPECTIVE TILT (Zero glow / Pure Mechanical)
   ========================================================================== */
function init3DSpatialPerspective() {
  const tiltCards = document.querySelectorAll('.tilt-card, .accent-card, .project-card, .skill-card, .stat-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 3D Rotation angles: max 6 degrees
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   3. NAVIGATION & SPA VIEW ROUTING
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const viewPanels = document.querySelectorAll('.view-panel');

  window.switchView = function(viewName) {
    if (!viewPanels.length) return;

    // Update active state in nav
    navItems.forEach(item => {
      if (item.dataset.view === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update active view panel
    viewPanels.forEach(panel => {
      if (panel.id === `view-${viewName}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update window hash
    if (window.location.hash !== `#${viewName}`) {
      window.history.pushState(null, null, `#${viewName}`);
    }

    // Scroll to top of content smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const view = item.dataset.view;
      if (view && document.getElementById(`view-${view}`)) {
        e.preventDefault();
        window.switchView(view);
      }
    });
  });

  window.addEventListener('popstate', handleUrlHashRouting);
}

function handleUrlHashRouting() {
  const hash = window.location.hash.replace('#', '');
  const validViews = ['home', 'projects', 'skills', 'education', 'about', 'contact'];
  if (hash && validViews.includes(hash)) {
    if (window.switchView) {
      window.switchView(hash);
    }
  } else if (window.switchView && document.getElementById('view-home')) {
    window.switchView('home');
  }
}

/* ==========================================================================
   4. CONTACT FORM & SUBJECT SELECTOR
   ========================================================================== */
function initContactForm() {
  const subjectBtns = document.querySelectorAll('.subject-btn');
  const selectedSubjectInput = document.getElementById('selected-subject');
  const form = document.getElementById('kevin-contact-form');
  const toast = document.getElementById('form-success-toast');

  subjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subjectBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (selectedSubjectInput) {
        selectedSubjectInput.value = btn.dataset.value;
      }
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
        subjectBtns.forEach(b => b.classList.remove('selected'));
        if (subjectBtns[0]) subjectBtns[0].classList.add('selected');

        if (toast) {
          toast.classList.add('active');
          setTimeout(() => {
            toast.classList.remove('active');
          }, 5000);
        }
      }, 700);
    });
  }
}

/* ==========================================================================
   5. PROJECT FILTER PILLS
   ========================================================================== */
function initFilters() {
  const projectFilters = document.querySelectorAll('.project-filter-pill');
  const projectCards = document.querySelectorAll('.filterable-project-card');

  if (projectFilters.length && projectCards.length) {
    projectFilters.forEach(pill => {
      pill.addEventListener('click', () => {
        projectFilters.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.filter;

        projectCards.forEach(card => {
          const categories = card.dataset.category || '';
          if (filter === 'all' || categories.toLowerCase().includes(filter.toLowerCase())) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

/* ==========================================================================
   6. BACK TO TOP HANDLER
   ========================================================================== */
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
