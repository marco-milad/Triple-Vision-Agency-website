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
  // button start
 // 🔝 زر الرجوع للأعلى (يُضاف في كل الصفحات)
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('backToTop')) {
    const btn = document.createElement('button');
    btn.id = 'backToTop';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 100 ? 'flex' : 'none';
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 💬 زر الواتساب الثابت (لكل الصفحات)
  if (!document.getElementById('whatsappBtn')) {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.id = 'whatsappBtn';
    whatsappBtn.href = 'https://wa.me/+966536422477';
    whatsappBtn.target = '_blank';
    whatsappBtn.setAttribute('aria-label', 'تواصل عبر واتساب');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
  }
});