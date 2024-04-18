window.addEventListener('scroll', function() {
    var navContainer = document.getElementById('navContainer');
    if (window.scrollY > 50) { // Adjust the value (50) to change when to change the color
      navContainer.classList.add('scrolled');
    } else {
      navContainer.classList.remove('scrolled');
    }
  });
  