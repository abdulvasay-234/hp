var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var navContainer = document.getElementById('navContainer');
  if (prevScrollpos > currentScrollPos) {
    navContainer.classList.remove('hidden'); // Show the navigation bar when scrolling up
  } else {
    navContainer.classList.add('hidden'); // Hide the navigation bar when scrolling down
  }
  prevScrollpos = currentScrollPos;
});


document.addEventListener("DOMContentLoaded", function() {
  // Get all dropdown buttons
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  // Add click event listener to each dropdown button
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Toggle rotate class on the dropdown button
      this.classList.toggle('rotate');

      // Get the parent element (faq-item)
      const faqItem = this.closest('.faq-item');

      // Get the answer element within the faq-item
      const answer = faqItem.querySelector('.faq-answer');

      // Toggle the display of the answer
      if (answer.style.display === 'block' || answer.style.display === '') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const highlightedEmails = document.querySelectorAll('.highlighted-email');

  highlightedEmails.forEach(function(email) {
    email.addEventListener('click', function() {
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

function downloadPDF() {
  var pdfUrl = "pdfs/HackPrix_Sponsor_Deck.pdf";

  var anchor = document.createElement('a');

  anchor.setAttribute('href', pdfUrl);

  anchor.setAttribute('download', '');

  anchor.click();
}
