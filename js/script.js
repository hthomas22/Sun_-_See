// JavaScript code for the website functionality

// Function to open the review form on reviews page
function openReviewForm() {
    document.getElementById('review-form').style.display = 'block';
}

// Function to submit the review
function submitReview(event) {
    event.preventDefault();
    
    // Get input values
    const name = document.getElementById('reviewer-name').value;
    const review = document.getElementById('review-text').value;

    // Create a review element
    const reviewElement = document.createElement('div');
    reviewElement.innerHTML = `<strong>${name}:</strong> <p>${review}</p>`;
    
    // Append the review to the reviews list
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = '';  // Remove "No reviews yet" text
    reviewsList.appendChild(reviewElement);

    // Clear form inputs
    document.getElementById('reviewer-name').value = '';
    document.getElementById('review-text').value = '';

    // Hide the review form
    document.getElementById('review-form').style.display = 'none';
}
