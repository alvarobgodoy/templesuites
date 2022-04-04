// Footer
let lastModified = document.lastModified;
    
document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
let currentYear = document.querySelector('#currentYear');

year = new Date().getFullYear();

currentYear.textContent = year;