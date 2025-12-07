document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#menu");

// Listen for clicks
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // show/hide nav
    // Toggle between ☰ and X icons
    hamButton.textContent = hamButton.textContent === "☰" ? "❌" : "☰";
});

const services = ["Proofreading", "Copy Editing", "Formatting", "Editing", "Ghost Writing"]

function renderService(servicesArray) {
    const container = document.querySelector("#service-container");
    container.innerHTML = ""; // clear previous cards

    servicesArray.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("service-card");

        card.innerHTML = `
      <p>${service}</p>
    `;

        container.appendChild(card);
    });
}

const testimonials = [
    {
        text: "She polished my thesis chapter perfectly.",
        name: "Grace E.",
        role: "Postgraduate Student",
        stars: 5
    },
    {
        text: "Very fast and reliable proofreading service!",
        name: "Victor O.",
        role: "Business Owner",
        stars: 5
    },
    {
        text: "My CV was edited and I got the interview.",
        name: "Timothy J.",
        role: "Junior Data Analyst",
        stars: 5
    }
];

function renderTestimonial(testimonialsArray) {
    const container = document.querySelector("#testimonial-container");
    container.innerHTML = ""; // clear previous cards

    testimonialsArray.forEach(testimonial => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        const stars = "⭐".repeat(testimonial.stars);

        card.innerHTML = `
      <p class="stars">${stars}</p>
      <p class="text">${testimonial.text}</p>
      <p class="name">— ${testimonial.name}</p>
      <p class="role">${testimonial.role}</p>
    `;

        container.appendChild(card);
    });
}


renderService(services)
renderTestimonial(testimonials)