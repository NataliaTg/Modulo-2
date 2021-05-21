// Objetivo 1 [Datos del hotel]
var hotel = {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
};

document.getElementById('name-hotel').innerHTML = "Hotel " + hotel.name;
document.getElementById('location-hotel').innerHTML = "Ubicado en " + hotel.location;
document.getElementById('img-hotel').src = hotel.img;

// Objetivo 2 [Puntuación del hotel]
var rating = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = rating + " estrellas";

var anonymous = confirm('¿Quieres publicar tu reseña de forma de anónima?');

document.getElementById('anonymous').checked = anonymous;


// var hoteles = {
//     Mencey: {
//       name: "Mencey",
//       location: "Tenerife",
//       img:
//         "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
//     },
//     Lani: {
//       name: "Lani's Suites Deluxe",
//       location: "Lanzarote",
//       img:
//         "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
//     },
// };

// var selectedHotel = prompt(
//     "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
// );