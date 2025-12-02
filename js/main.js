// Import Components
import { loadNavbar } from './navbar.js';
import { loadFooter } from './footer.js';

// Load Components
loadNavbar();
loadFooter();

// ==============================
// VIDEO CONTROL
// ==============================
const video = document.getElementById('heroVideo');
const muteIcon = document.getElementById('muteIcon');

if (video && muteIcon) {
  const toggleMute = (e) => {
    e.stopPropagation();
    video.muted = !video.muted;
    muteIcon.textContent = video.muted ? '🔇' : '🔊';
    muteIcon.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
    
    if (!video.muted) {
      video.play().catch(err => console.log("Autoplay restriction:", err));
    }
  };

  muteIcon.addEventListener('click', toggleMute);
  muteIcon.addEventListener('touchend', toggleMute);

  video.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
      toggleMute(e);
    }
  });
}

// ==============================
// BACK TO TOP BUTTON
// ==============================
(function() {
  'use strict';

  function createBackToTopButton() {
    let btn = document.getElementById('backToTop');
    
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'backToTop';
      btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
      btn.setAttribute('aria-label', 'Back to top');
      btn.setAttribute('type', 'button');
      document.body.appendChild(btn);
    }
    
    return btn;
  }

  function toggleButtonVisibility(btn) {
    const scrollThreshold = 300;
    
    if (window.scrollY > scrollThreshold) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  function scrollToTop(e) {
    e.preventDefault();
    e.stopPropagation();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function init() {
    const btn = createBackToTopButton();
    
    let isScrolling = false;
    window.addEventListener('scroll', function() {
      if (!isScrolling) {
        window.requestAnimationFrame(function() {
          toggleButtonVisibility(btn);
          isScrolling = false;
        });
        isScrolling = true;
      }
    }, { passive: true });

    btn.addEventListener('click', scrollToTop);
    btn.addEventListener('touchend', function(e) {
      e.preventDefault();
      scrollToTop(e);
    }, { passive: false });

    toggleButtonVisibility(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ==============================
// WHATSAPP BUTTON
// ==============================
(function() {
  'use strict';

  function createWhatsAppButton() {
    let btn = document.getElementById('whatsappBtn');
    
    if (!btn) {
      btn = document.createElement('a');
      btn.id = 'whatsappBtn';
      btn.href = 'https://wa.me/+20 109 832 4080';
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.setAttribute('aria-label', 'Contact us on WhatsApp');
      btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
      document.body.appendChild(btn);
    }
    
    btn.style.display = 'flex';
    
    btn.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    }, { passive: true });
    
    return btn;
  }

  function init() {
    createWhatsAppButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ==============================
// SERVICE CARDS ANIMATION ON SCROLL
// ==============================
const cardsObserverOptions = {
    threshold: 0.1,
    rootMargin: '-100px 0px -100px 0px'
};

const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            cardsObserver.unobserve(entry.target);
        }
    });
}, cardsObserverOptions);

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card-link');
    serviceCards.forEach(card => {
        cardsObserver.observe(card);
    });
});