'use strict'
import API_KEY from './config.js'

const ipAddressField = document.querySelector('.ipAddressField')
const timezoneInput = document.querySelector('.timezoneInput')
const countryLocationInput = document.querySelector('.locationInput')
const ispInput = document.querySelector('.ispInput')
const submitBtn = document.querySelector('.submit-btn')
const inputField = document.querySelector('.input-field')

//Map

let map = L.map('map').setView([51.505, -0.09], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

//API
let ipAddress
let randomIP = ''
let timeZone
let countryLocation
let cityLocation
let postalCode
let isp
let lat
let lng

let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}=`
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    ipAddress = response.ip
    timeZone = response.time_zone.offset
    countryLocation = response.country_name
    cityLocation = response.city
    postalCode = response.zipcode
    isp = response.isp
    lat = response.latitude
    lng = response.longitude

    ipAddressField.innerHTML = ipAddress
    timezoneInput.innerHTML = ` UTC ${timeZone}`
    countryLocationInput.innerHTML = `${countryLocation}, ${cityLocation} ${postalCode}`
    ispInput.innerHTML = isp
    mapLocation(lat, lng)
  })

const mapLocation = (lat, lng) => {
  var markerIcon = L.icon({
    iconUrl: 'images/icon-location.svg',

    iconSize: [46, 56], // size of the icon
    iconAnchor: [23, 55], // point of the icon which will correspond to marker's location
  })
  map.setView([lat, lng], 17)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: false,
  }).addTo(map)

  L.marker([lat, lng], { icon: markerIcon }).addTo(map)
}

//Search by IP + validation
submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  if (
    inputField.value.match(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    )
  ) {
    randomIP = inputField.value
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}=` + randomIP
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        ipAddress = response.ip
        timeZone = response.time_zone.offset
        countryLocation = response.country_name
        cityLocation = response.city
        postalCode = response.zipcode
        isp = response.isp
        lat = response.latitude
        lng = response.longitude

        ipAddressField.innerHTML = ipAddress
        timezoneInput.innerHTML = ` UTC ${timeZone}`
        countryLocationInput.innerHTML = `${countryLocation}, ${cityLocation} ${postalCode}`
        ispInput.innerHTML = isp
        mapLocation(lat, lng)
      })
  } else {
    alert('You have entered an invalid IP address!')
    return false
  }
})



// // const myForm = document.querySelector('.submit-btn')
// const submitBtn= document.querySelector('submit-btn')
// const ipAddressField = document.querySelector('.ipAddressField')
// const countryLocationInput = document.querySelector('.locationInput')
// const timeZoneInput = document.querySelector('.timezoneInput')
// const ispInput = document.querySelector('.ispInput')

// // Map creation
// const map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// }).addTo(map);

// const myIcon = L.icon({
//   iconUrl: './images/icon-location.svg',
//   iconSize: [40, 50],
//   iconAnchor: [20, 50]
// });

// let myMarker

// const mapDisplay = (lat, lng) => {
//   myMap.setView([lat, lng], 16)

//   if (myMarker != null) myMarker.remove()

//   myMarker = L.marker([lat, lng], { icon: myIcon }).addTo(map)

//   myMarker.addTo(map)
// }

// // Get the info the page needs
// const getData = (inputValue = '', searchType = 'ip') => {
//   const apiKey = 'at_E6BD5wm4eWkq0e3q9TyyAmGNH165p';
//   // const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
//   const url =
//     searchType === 'ip'
//       ? `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${inputValue}`
//       : `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${inputValue}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       ipAddressField.innerHTML = data.ip;
//       countryLocationInput.innerHTML = `${data.location.region}, ${data.location.city}`;
//       timeZoneInput.innerHTML = `UTC ${data.location.timezone}`;
//       ispInput.innerHTML = data.isp;
//       mapDisplay(data.location.lat, data.location.lng);
//     })
//     .catch((error) => {
//       ipAddressField .innerHTML = '__';
//       countryLocationInput.innerHTML = '__';
//       timeZoneInput.innerHTML = '__';
//       ispInput.innerHTML = '__';

//       const myInput =  submitBtn.searchInput;
//       myInput.classList.add('error');

//       setTimeout(() => myInput.classList.remove('error'), 3000);
//       console.error(error);
//     });
// };

// // Search for any IP addresses or domains and see the key information and location
// const regexIp = /^\b([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b(\.\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b){3}$/;
// const regexDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

// submitBtn.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const myInput =  submitBtn.searchInput;

//   if (myInput.value.match(regexIp)) {
//     getData(myInput.value)
//   }

//   if (myInput.value.match(regexDomain)) {
//     getData(myInput.value, (searchType = 'DOMAIN'))
//   }

//   if (!myInput.value.match(regexDomain) && !myInput.value.match(regexIp)) {
//     myInput.classList.add('error')

//     setTimeout(() => myInput.classList.remove('error'), 3000)
//   }
// });

// // Load IP Address on the map on the initial page load
// getData();


