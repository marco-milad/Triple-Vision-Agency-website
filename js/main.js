// Import الـ Components
import { loadNavbar } from './navbar.js';
import { loadFooter } from './footer.js';

loadNavbar();
loadFooter();

const video = document.getElementById('heroVideo');
  const muteIcon = document.getElementById('muteIcon');

  if (video && muteIcon) {
    video.addEventListener('click', () => {
      video.muted = !video.muted;
      muteIcon.textContent = video.muted ? '🔇' : '🔊';
      
      if (!video.muted) {
        video.play().catch(err => console.log("Autoplay restriction:", err));
      }
    });
  }