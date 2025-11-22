const pageTitle = document.getElementById("page-title");


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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"  
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54640.jpg"
    },
    {
        templeName: "Nuku'alofa Tonga",
        location: "Nuku'alofa, Tonga",
        dedicated: "1983, August, 9",
        area: 21184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094.jpg"
    }
    // Add more temple objects here...
];

function renderTemples(templesArray) {
    const container = document.querySelector("#temple-container");
    container.innerHTML = ""; // clear previous cards

    templesArray.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
    `;

        container.appendChild(card);
    });
}


function filterOld() {
    const filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900
    });
    renderTemples(filtered);
    pageTitle.textContent = "Old Temples";
}

function filterNew() {
    const filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year >= 2000
    });
    renderTemples(filtered);
    pageTitle.textContent = "New Temples";
}

function filterLarge() {
    const filtered = temples.filter(t => t.area > 90000);
    renderTemples(filtered);
    pageTitle.textContent = "Large Temples";
}

function filterSmall() {
    const filtered = temples.filter(t => t.area < 10000);
    renderTemples(filtered);
    pageTitle.textContent = "Small Temples";
}

function showAll() {
    renderTemples(temples);
    pageTitle.textContent = "Home";
}

document.getElementById("home").addEventListener("click", showAll);
document.getElementById("old").addEventListener("click", filterOld);
document.getElementById("new").addEventListener("click", filterNew);
document.getElementById("large").addEventListener("click", filterLarge);
document.getElementById("small").addEventListener("click", filterSmall);

renderTemples(temples);


