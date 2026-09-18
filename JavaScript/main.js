document.querySelectorAll('.gallery-images img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.4)';
        img.style.zIndex = '10';
        img.style.position ='relative';
        img.style.transition = 'transform 0.3s, z-index 0s';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.zIndex = 'auto';
    });
    
}); 

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.position ='relative';
        img.style.transition = 'transform 0.3s, z-index 0s';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.zIndex = '';
    });
    
});

  const btn = document.getElementById('btn');
  const menu = document.querySelector('.menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

