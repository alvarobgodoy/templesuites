// Capitalize function
function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

// Weather API
let requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=1384e4ca3e82ee8fd20b1bc49b14a713';
let data;

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // Define the information    
    let currentTemp = jsObject.current.temp
    let currentCond = jsObject.current.weather[0].description
    let currentHum = jsObject.current.humidity

    // Paste it into the weather card
    document.getElementById('currentTempEl').textContent = `${currentTemp}°F`;
    document.getElementById('currentCondEl').textContent = capitalizeFirstLetter(currentCond);
    document.getElementById('currentHumEl').textContent = `${currentHum}%`;

    // Forecast
    let day1 = jsObject.daily[0];
    let day2 = jsObject.daily[1];
    let day3 = jsObject.daily[2];

    forecastCard(day1, 'Day 1');
    forecastCard(day2, 'Day 2');
    forecastCard(day3, 'Day 3');

    function forecastCard(day, num) {
        // Create the elements
        let card = document.createElement('div')
        let name = document.createElement('h3')
        let temp = document.createElement('p');
        let icon = document.createElement('img');

        // Populate them with information
        name.textContent = num;
        temp.textContent = `${day.temp.min}° ${day.temp.max}°`

        icon.setAttribute('src', `https://openweathermap.org/img/w/${day.weather[0].icon}.png`)
        icon.setAttribute('alt', 'Weather icon')
        icon.setAttribute('loading', 'lazy');

        // Append them to the document
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(temp);

        // Add the card to the document
        document.getElementById('forecast').appendChild(card);
    }
  })