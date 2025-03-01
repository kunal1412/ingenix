document.addEventListener('mousemove', (e) => {
  const triangles = document.querySelector('.glowing-triangles');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  triangles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

// backgroung Img
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.hero-image');
  images.forEach((img, index) => {
    img.style.animationDelay = `${index * 2}s`;
  });
});