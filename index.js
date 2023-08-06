// JavaScript to toggle the active class on the hamburger menu and sidebar
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelectorAll('nav a');
const sidebar = document.querySelector('.sidebar');

function toggleMenuAndSidebar() {
  hamburger.classList.toggle('active');
  navLinks.forEach(link => link.classList.toggle('active'));
  sidebar.classList.toggle('translate-x-full');
}

hamburger.addEventListener('click', toggleMenuAndSidebar);

// Function to handle smooth scrolling to the target section
function scrollToSection(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Get the target section's ID from the href attribute
  const targetId = event.target.getAttribute('href');

  // Get the target section element
  const targetSection = document.querySelector(targetId);

  // Check if the target section exists
  if (targetSection) {
    // Calculate the distance from the top of the page to the target section
    const offsetTop = targetSection.getBoundingClientRect().top;

    // Scroll to the target section with a smooth behavior
    window.scrollTo({
      top: offsetTop + window.pageYOffset,
      behavior: 'smooth',
    });
  }
}

// Add click event listeners to all the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Get the modal element
const modal = document.getElementById('quoteModal');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener for "Get Quote" button
const getQuoteBtn = document.querySelector('.get-quote-btn');
getQuoteBtn.addEventListener('click', openModal);

// Event listener to close the modal when the user clicks on the "x" button
closeBtn.addEventListener('click', closeModal);

// Event listener to close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
