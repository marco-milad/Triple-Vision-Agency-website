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
  // Toggle Mute Function
  const toggleMute = (e) => {
    e.stopPropagation(); // منع تشغيل الفيديو لما تضغط الزرار
    video.muted = !video.muted;
    muteIcon.textContent = video.muted ? '🔇' : '🔊';
    muteIcon.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
    
    if (!video.muted) {
      video.play().catch(err => console.log("Autoplay restriction:", err));
    }
  };

  // Event Listeners for Button
  muteIcon.addEventListener('click', toggleMute);
  muteIcon.addEventListener('touchend', toggleMute);

  // Toggle Mute on Video Click (Desktop only)
  video.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
      toggleMute(e);
    }
  });
}

// ==============================
// BACK TO TOP BUTTON - COMPLETE FIX
// ==============================
(function() {
  'use strict';

  // إنشاء الزرار
  function createBackToTopButton() {
    let btn = document.getElementById('backToTop');
    
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'backToTop';
      btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
      btn.setAttribute('aria-label', 'Back to top');
      btn.setAttribute('type', 'button');
      document.body.appendChild(btn);
      
      console.log('✅ Back to Top button created');
    }
    
    return btn;
  }

  // Show/Hide على حسب الـ Scroll
  function toggleButtonVisibility(btn) {
    const scrollThreshold = 300;
    
    if (window.scrollY > scrollThreshold) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  // Scroll to Top Function
  function scrollToTop(e) {
    e.preventDefault();
    e.stopPropagation();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    console.log('🚀 Scrolling to top');
  }

  // Initialize
  function init() {
    const btn = createBackToTopButton();
    
    // Scroll Event (Optimized)
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

    // Click Events
    btn.addEventListener('click', scrollToTop);
    
    // Touch Event for Mobile
    btn.addEventListener('touchend', function(e) {
      e.preventDefault();
      scrollToTop(e);
    }, { passive: false });

    // Initial check
    toggleButtonVisibility(btn);
    
    console.log('✅ Back to Top initialized');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ==============================
// WHATSAPP BUTTON - COMPLETE FIX
// ==============================
(function() {
  'use strict';

  function createWhatsAppButton() {
    let btn = document.getElementById('whatsappBtn');
    
    if (!btn) {
      btn = document.createElement('a');
      btn.id = 'whatsappBtn';
      btn.href = 'https://wa.me/+966536422477';
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.setAttribute('aria-label', 'Contact us on WhatsApp');
      btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
      document.body.appendChild(btn);
      
      console.log('✅ WhatsApp button created');
    }
    
    // Force Display
    btn.style.display = 'flex';
    
    // Touch Event for Mobile
    btn.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    }, { passive: true });
    
    return btn;
  }

  // Initialize
  function init() {
    createWhatsAppButton();
    console.log('✅ WhatsApp button initialized');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
// Animate cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));
});