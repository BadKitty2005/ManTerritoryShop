// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Бургер-меню
  const burger = document.getElementById("burger-menu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("close-menu");
  const overlayLinks = overlay.querySelectorAll("a");

  burger.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
  });

  closeMenu.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  overlayLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlay.style.display = "none";
    });
    
  });

  // Тогглы для размеров и роста
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  const imageStack = document.querySelector('.image-stack');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Добавляем классы для запуска анимаций
        const photos = entry.target.querySelectorAll('[class^="photo"], [class^="top-photo"]');
        photos.forEach(photo => {
          photo.style.animationPlayState = 'running';
        });
      }
    });
  }, { threshold: 0.5 });

  if (imageStack) {
    observer.observe(imageStack);
    
    // Изначально ставим анимации на паузу
    const photos = imageStack.querySelectorAll('[class^="photo"], [class^="top-photo"]');
    photos.forEach(photo => {
      photo.style.animationPlayState = 'paused';
    });
  }
});


  // Промо окно
  const promoBox = document.getElementById("promo-box");
  const closePromo = document.getElementById("close-promo");

  closePromo.addEventListener("click", () => {
    promoBox.style.display = "none";
  });

  // Анимация для фото
  const photos = document.querySelectorAll(".photo");
  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.style.opacity = 1;
      photo.style.transform = "translateY(0)";
    }, 500 + index * 500);
  });
});


