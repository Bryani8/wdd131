const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 45000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, November, 20",
    area: 17250,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  }
];

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const container = document.querySelector('#temple-container');
const albumTitle = document.querySelector('#album-title');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navigation.classList.toggle('open');
});

function displayTemples(filteredList) {
    container.innerHTML = "";
    
    filteredList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        `;
        container.appendChild(card);
    });
}

function getYear(dateString) {
    return parseInt(dateString.split(",")[0].trim());
}

document.querySelector("#home-btn").addEventListener("click", () => {
    albumTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old-btn").addEventListener("click", () => {
    albumTitle.textContent = "Old Temples";
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    displayTemples(oldTemples);
});

document.querySelector("#new-btn").addEventListener("click", () => {
    albumTitle.textContent = "New Temples";
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    displayTemples(newTemples);
});

document.querySelector("#large-btn").addEventListener("click", () => {
    albumTitle.textContent = "Large Temples";
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector("#small-btn").addEventListener("click", () => {
    albumTitle.textContent = "Small Temples";
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

displayTemples(temples);

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;