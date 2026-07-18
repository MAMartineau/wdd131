const roadTrips = [
  {
    id: "moab",
    routeName: "Provo to Moab",
    distance: "About 190 miles",
    driveTime: "About 3 hours without stops",
    bestSeason: "Spring or fall",
    weather: "Mild days are common in spring and fall. Summer afternoons can be extremely hot.",
    routeImage: "images/provo-moab-route.webp",
    routeImageAlt: "Illustrated route map from Provo through Helper and Green River to Moab",
    description: "Travel from Utah Valley through mountain and desert scenery before reaching the red-rock landscape surrounding Moab.",
    seasonalTip: "For a more comfortable visit, travel during spring or fall and carry extra water throughout the year.",
    stops: [
      {
        name: "Helper",
        image: "images/helper.webp",
        imageAlt: "Picture of historic buildings and mountains in Helper, Utah",
        description: "Take a short break on historic Main Street and learn about the area's mining and railroad history.",
        visitTime: "Suggested stop: 30-60 minutes"
      },
      {
        name: "Green River",
        image: "images/green-river.webp",
        imageAlt: "Picture of Green River, Utah",
        description: "Green River is the perfect place to refuel, eat, and enjoy a riverside break before continuing to Moab.",
        visitTime: "Suggested stop: 30-45 minutes"
      },
      {
        name: "Arches National Park",
        image: "images/arches.webp",
        imageAlt: "Illustration of a sandstone arch near Moab, Utah",
        description: "See famous sandstone formations, scenic overlooks, and short family-friendly trails near Moab.",
        visitTime: "Suggested visit: 2 or more hours"
      }
    ]
  },
  {
    id: "ogden",
    routeName: "Provo to Ogden",
    distance: "About 80 miles",
    driveTime: "About 1 hour 20 minutes without stops",
    bestSeason: "Year-round",
    weather: "Summers are warm. Winter travel may include snow, cold temperatures, or icy roads.",
    routeImage: "images/provo-ogden-route.webp",
    routeImageAlt: "Illustrated route map from Provo through Salt Lake City to Ogden",
    description: "Follow the Wasatch Front north from Provo, with several family attractions and historic places available along the route.",
    seasonalTip: "The route works throughout the year, but winter travelers should check road and weather conditions before leaving.",
    stops: [
      {
        name: "Temple Square",
        image: "images/temple-square.webp",
        imageAlt: "Illustration of Temple Square and downtown Salt Lake City",
        description: "Explore historic buildings, visitor areas, and landscaped grounds in downtown Salt Lake City.",
        visitTime: "Suggested visit: 1-2 hours"
      },
      {
        name: "Utah's Hogle Zoo",
        image: "images/hogle-zoo.webp",
        imageAlt: "Illustration of animals at Utah's Hogle Zoo",
        description: "Visit animal exhibits near the mouth of Emigration Canyon. This stop can become the main activity for the day.",
        visitTime: "Suggested visit: 2-4 hours"
      },
      {
        name: "Historic 25th Street",
        image: "images/ogden.webp",
        imageAlt: "Illustration of historic buildings on 25th Street in Ogden",
        description: "Walk through downtown Ogden for restaurants, local shops, and railroad history.",
        visitTime: "Suggested visit: 1-2 hours"
      }
    ]
  },
  {
    id: "salt-lake",
    routeName: "Provo to Salt Lake City",
    distance: "About 45 miles",
    driveTime: "About 45 minutes without stops",
    bestSeason: "Year-round",
    weather: "Summers are hot and dry. Winters are cold, with possible snow and poor air quality during inversions.",
    routeImage: "images/provo-slc-route.webp",
    routeImageAlt: "Illustrated route map from Provo through Lehi to Salt Lake City",
    description: "This shorter trip offers several easy choices for families who want a day outing without spending several hours in the car.",
    seasonalTip: "This is the most flexible route, but traffic can add significant time during weekday commuting hours.",
    stops: [
      {
        name: "Thanksgiving Point",
        image: "images/thanksgiving-point.webp",
        imageAlt: "Illustration of gardens and a museum at Thanksgiving Point in Lehi",
        description: "Choose from museums, gardens, and family activities in Lehi before continuing north.",
        visitTime: "Suggested visit: 2-4 hours"
      },
      {
        name: "The Loveland Living Planet Aquarium",
        image: "images/aquarium.webp",
        imageAlt: "Illustration of sea animals at an aquarium",
        description: "Explore indoor marine and wildlife exhibits in Draper, making this a useful stop during poor weather.",
        visitTime: "Suggested visit: 2-3 hours"
      },
      {
        name: "Temple Square",
        image: "images/temple-square.webp",
        imageAlt: "Illustration of Temple Square and downtown Salt Lake City",
        description: "Finish the trip in downtown Salt Lake City with historic sites, visitor areas, and nearby dining.",
        visitTime: "Suggested visit: 1-2 hours"
      }
    ]
  }
];

const tripButtons = document.querySelector("#trip-buttons");
const tripSummary = document.querySelector("#trip-summary");
const stopCards = document.querySelector("#stop-cards");
const stopsIntro = document.querySelector("#stops-intro");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll("#primary-navigation a");

function createTripButtons() {
  roadTrips.forEach(function (trip) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "trip-button";
    button.setAttribute("data-trip-id", trip.id);
    button.textContent = trip.routeName;

    button.addEventListener("click", function () {
      selectTrip(trip.id);
    });

    tripButtons.appendChild(button);
  });
}

function selectTrip(tripId) {
  const selectedTrip = roadTrips.find(function (trip) {
    return trip.id === tripId;
  });

  if (selectedTrip) {
    displayTrip(selectedTrip);
    displayStops(selectedTrip.stops);
    updateSelectedButton(tripId);
    stopsIntro.textContent = "These stops can be included on the " + selectedTrip.routeName + " trip.";
  }
}

function displayTrip(trip) {
  tripSummary.innerHTML = `
    <article class="trip-card">
      <img class="trip-map" src="${trip.routeImage}" alt="${trip.routeImageAlt}" width="700" height="520">
      <div class="trip-card-content">
        <p class="eyebrow">Selected route</p>
        <h2>${trip.routeName}</h2>
        <p class="trip-description">${trip.description}</p>
        <dl class="trip-facts">
          <div class="trip-fact">
            <dt>Distance</dt>
            <dd>${trip.distance}</dd>
          </div>
          <div class="trip-fact">
            <dt>Drive Time</dt>
            <dd>${trip.driveTime}</dd>
          </div>
          <div class="trip-fact">
            <dt>Best Time of Year</dt>
            <dd>${trip.bestSeason}</dd>
          </div>
          <div class="trip-fact">
            <dt>General Weather</dt>
            <dd>${trip.weather}</dd>
          </div>
        </dl>
        <p class="season-note"><strong>Planning note:</strong> ${trip.seasonalTip}</p>
      </div>
    </article>`;
}

function displayStops(stops) {
  let stopHtml = "";

  stops.forEach(function (stop) {
    stopHtml += `
      <article class="stop-card">
        <img
          src="${stop.image}"
          alt="${stop.imageAlt}"
          width="500"
          height="310"
          loading="lazy"
        >
        <div class="stop-card-content">
          <h3>${stop.name}</h3>
          <p>${stop.description}</p>
          <p class="visit-time">${stop.visitTime}</p>
        </div>
      </article>`;
  });

  stopCards.innerHTML = stopHtml;
}

function updateSelectedButton(tripId) {
  const buttons = document.querySelectorAll(".trip-button");

  buttons.forEach(function (button) {
    const buttonTripId = button.getAttribute("data-trip-id");

    if (buttonTripId === tripId) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

function toggleMenu() {
  const menuExpanded = menuButton.getAttribute("aria-expanded");

  if (menuExpanded === "false") {
    navigation.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
    menuButton.textContent = "X";
  } else {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.textContent = "☰";
  }
}

menuButton.addEventListener("click", toggleMenu);

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.textContent = "☰";
  });
});

createTripButtons();
selectTrip(roadTrips[0].id);