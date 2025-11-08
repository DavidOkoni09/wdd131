const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

// Get references
const hamButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

// Listen for clicks
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // show/hide nav
    // Toggle between ☰ and X icons
    hamButton.textContent = hamButton.textContent === "☰" ? "❌" : "☰";
});
