const requestPath = './data/temples.json'

// Fetch the JSON file
fetch(requestPath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    temples = jsonObject['temples'];
    temples.forEach(displayTemple);
  });

function displayTemple(temple) {
    // Get the variables
    let name = temple.name;
    let address = temple.address;
    let phone = temple.phone;
    let services = temple.services;
    let closeSchedule = temple.closeSchedule;
    let dedicated = temple.dedicated;
    let url = temple.url;
    
    // Create elements
    let container = document.createElement('div');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let addressEl = document.createElement('p');
    let phoneEl = document.createElement('p');
    let servicesEl = document.createElement('ul');
    let closeScheduleEl = document.createElement('ul');
    let dedicatedEl = document.createElement('p');

    // Populate elements
    h2.textContent = name;

    img.setAttribute('src', `./images/${temple.image}`)
    img.setAttribute('alt', `${name}'s image`)
    img.setAttribute('loading', 'lazy')

    addressEl.textContent = `Address: ${address}`;

    phoneEl.textContent = `Phone: ${phone}`;

    let p = document.createElement('p');
    p.textContent = 'Services';
    services.forEach((element) => {
        let liEl = document.createElement('li');
        liEl.textContent = element;
        servicesEl.appendChild(liEl);
    });

    closeSchedule.forEach((element) => {
        let liEl = document.createElement('li');
        liEl.textContent = element;
        closeScheduleEl.appendChild(liEl);
    });
    let p1 = document.createElement('p');
    p1.textContent = 'Temple Closures';
    servicesEl.appendChild(p1);

    dedicatedEl.textContent = `Dedicated: ${dedicated}`;

    container.appendChild(h2);
    container.appendChild(img);
    container.appendChild(addressEl);
    container.appendChild(phoneEl);
    container.appendChild(p)
    container.appendChild(servicesEl);
    container.appendChild(p1)
    container.appendChild(closeScheduleEl);
    container.appendChild(dedicatedEl);

    document.getElementById('temples-grid').appendChild(container);
}