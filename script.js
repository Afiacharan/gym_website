document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 200; // Adjust to control speed

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10); // Adjust to control speed
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const boxes = document.querySelectorAll('.counter-box');

    // Function to animate the counters
    const animateCounters = () => {
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = target / 200; // Adjust to control speed

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 10); // Adjust to control speed
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    // Function to show each box one by one on small devices
    let currentBox = 0;
    const showNextBox = () => {
        // Hide all boxes
        boxes.forEach(box => box.style.display = 'none');

        // Show the current box
        boxes[currentBox].style.display = 'block';

        // Move to the next box, loop back to the first one
        currentBox = (currentBox + 1) % boxes.length;
    };

    // Initial display
    if (window.innerWidth <= 768) {
        showNextBox();
        setInterval(showNextBox, 5000); // Change every 5 seconds
    } else {
        boxes.forEach(box => box.style.display = 'block');
    }

    animateCounters();
});
// ..........................................................................................
const reviews = document.querySelectorAll('.review-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentReview = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentReview = (currentReview > 0) ? currentReview - 1 : reviews.length - 1;
    showReview(currentReview);
});

nextBtn.addEventListener('click', () => {
    currentReview = (currentReview < reviews.length - 1) ? currentReview + 1 : 0;
    showReview(currentReview);
});

// Initialize the first review as active
showReview(currentReview);
