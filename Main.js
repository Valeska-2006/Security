document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const viewId = btn.dataset.view;
      
      navButtons.forEach(b => b.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(viewId).classList.add('active');
    });
  });

  // Simulate alerts
  setInterval(() => {
    const alertsList = document.querySelector('.alerts-list');
    const time = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    
    if (Math.random() > 0.7) {
      const alertHTML = `
        <div class="alert-item high" style="opacity: 0">
          <span class="alert-time">${time}</span>
          <p>Nueva actividad detectada - Cámara ${Math.floor(Math.random() * 3) + 1}</p>
          <button class="btn-action">Ver detalles</button>
        </div>
      `;
      
      alertsList.insertAdjacentHTML('afterbegin', alertHTML);
      const newAlert = alertsList.firstElementChild;
      
      requestAnimationFrame(() => {
        newAlert.style.opacity = '1';
        newAlert.style.transition = 'opacity 0.3s ease';
      });

      if (alertsList.children.length > 5) {
        alertsList.lastElementChild.remove();
      }
    }
  }, 5000);
});
