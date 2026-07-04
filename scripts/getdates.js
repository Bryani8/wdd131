const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
} 

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}