// Get the current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase by one each time review.html loads
reviewCount++;

// Save it back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display it on the page (optional)
document.querySelector("#reviewCounter").textContent = reviewCount;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;