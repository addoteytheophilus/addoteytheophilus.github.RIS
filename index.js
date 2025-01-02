const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
});


// Select carousel, items, and dots
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0; // Track the current slide

// Function to update the active slide and dots
function updateCarousel(index) {
    // Remove 'active' class from all items and dots
    items.forEach((item) => item.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    // Add 'active' class to the current item and dot
    items[index].classList.add('active');
    dots[index].classList.add('active');

    // Move the carousel
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Function to show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length; // Increment index
    updateCarousel(currentIndex); // Update carousel
}

// Function to handle dot clicks
function handleDotClick(event) {
    const dotIndex = Array.from(dots).indexOf(event.target); // Get the index of the clicked dot
    if (dotIndex !== -1) {
        currentIndex = dotIndex; // Update the current index
        updateCarousel(currentIndex); // Update carousel
    }
}

// Auto-slide every 5 seconds
let slideInterval = setInterval(showNextSlide, 5000);

// Add event listeners for dots
dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
        clearInterval(slideInterval); // Stop auto-slide on user interaction
        handleDotClick(event); // Navigate to the clicked dot's slide
        slideInterval = setInterval(showNextSlide, 5000); // Restart auto-slide
    });
});

// Initialize carousel
updateCarousel(currentIndex);
