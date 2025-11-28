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
// FLOATING BUTTONS
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  
  // Back to Top Button
  if (!document.getElementById('backToTop')) {
    const backBtn = document.createElement('button');
    backBtn.id = 'backToTop';
    backBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backBtn.setAttribute('aria-label', 'Back to top');
    backBtn.style.display = 'none';
    document.body.appendChild(backBtn);

    // Optimized Scroll Handler (Throttle)
    let isScrolling = false;
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          backBtn.style.display = window.scrollY > 100 ? 'flex' : 'none';
          isScrolling = false;
        });
        isScrolling = true;
      }
    });

    // Smooth Scroll to Top
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // WhatsApp Button
  if (!document.getElementById('whatsappBtn')) {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.id = 'whatsappBtn';
    whatsappBtn.href = 'https://wa.me/+966536422477';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Contact us on WhatsApp');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
  }
});