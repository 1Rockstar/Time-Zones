const container = document.getElementById("clockContainer");

// Default cities
const cities = [
  { name: "New York", zone: "America/New_York" },
  { name: "London", zone: "Europe/London" },
  { name: "Tokyo", zone: "Asia/Tokyo" },
  { name: "India", zone: "Asia/Kolkata" }
];

function updateClocks() {
  container.innerHTML = "";

  cities.forEach(city => {
    const now = new Date().toLocaleString("en-US", {
      timeZone: city.zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    const div = document.createElement("div");
    div.className = "clock";
    div.innerHTML = `
      <h3>${city.name}</h3>
      <p>${now}</p>
    `;
    container.appendChild(div);
  });
}

// Update every second
setInterval(updateClocks, 1000);

// Add city dynamically
function addCity() {
  const input = document.getElementById("cityInput").value;

  if (!input) return;

  // Basic mapping (you can expand this)
  const cityMap = {
  "new york": "America/New_York",
  "los angeles": "America/Los_Angeles",
  "chicago": "America/Chicago",
  "toronto": "America/Toronto",
  "vancouver": "America/Vancouver",

  "london": "Europe/London",
  "paris": "Europe/Paris",
  "berlin": "Europe/Berlin",
  "madrid": "Europe/Madrid",
  "rome": "Europe/Rome",
  "amsterdam": "Europe/Amsterdam",
  "vienna": "Europe/Vienna",
  "zurich": "Europe/Zurich",
  "brussels": "Europe/Brussels",
  "copenhagen": "Europe/Copenhagen",
  "stockholm": "Europe/Stockholm",
  "oslo": "Europe/Oslo",
  "helsinki": "Europe/Helsinki",
  "dublin": "Europe/Dublin",
  "lisbon": "Europe/Lisbon",
  "athens": "Europe/Athens",
  "warsaw": "Europe/Warsaw",
  "budapest": "Europe/Budapest",
  "prague": "Europe/Prague",

  "moscow": "Europe/Moscow",
  "istanbul": "Europe/Istanbul",

  "dubai": "Asia/Dubai",
  "riyadh": "Asia/Riyadh",
  "doha": "Asia/Qatar",
  "kuwait": "Asia/Kuwait",
  "tehran": "Asia/Tehran",
  "jerusalem": "Asia/Jerusalem",

  "delhi": "Asia/Kolkata",
  "mumbai": "Asia/Kolkata",
  "bangalore": "Asia/Kolkata",
  "chennai": "Asia/Kolkata",
  "kolkata": "Asia/Kolkata",
  "hyderabad": "Asia/Kolkata",

  "karachi": "Asia/Karachi",
  "lahore": "Asia/Karachi",
  "dhaka": "Asia/Dhaka",
  "colombo": "Asia/Colombo",
  "kathmandu": "Asia/Kathmandu",

  "bangkok": "Asia/Bangkok",
  "jakarta": "Asia/Jakarta",
  "kuala lumpur": "Asia/Kuala_Lumpur",
  "singapore": "Asia/Singapore",
  "manila": "Asia/Manila",
  "ho chi minh city": "Asia/Ho_Chi_Minh",

  "beijing": "Asia/Shanghai",
  "shanghai": "Asia/Shanghai",
  "hong kong": "Asia/Hong_Kong",
  "taipei": "Asia/Taipei",
  "seoul": "Asia/Seoul",
  "tokyo": "Asia/Tokyo",

  "perth": "Australia/Perth",
  "adelaide": "Australia/Adelaide",
  "melbourne": "Australia/Melbourne",
  "sydney": "Australia/Sydney",
  "brisbane": "Australia/Brisbane",
  "auckland": "Pacific/Auckland",

  "cape town": "Africa/Johannesburg",
  "johannesburg": "Africa/Johannesburg",
  "nairobi": "Africa/Nairobi",
  "lagos": "Africa/Lagos",
  "cairo": "Africa/Cairo",
  "casablanca": "Africa/Casablanca",

  "mexico city": "America/Mexico_City",
  "buenos aires": "America/Argentina/Buenos_Aires",
  "sao paulo": "America/Sao_Paulo",
  "rio de janeiro": "America/Sao_Paulo",
  "lima": "America/Lima",
  "bogota": "America/Bogota",
  "santiago": "America/Santiago",
  "caracas": "America/Caracas",

  "honolulu": "Pacific/Honolulu",
  "anchorage": "America/Anchorage",

  "reykjavik": "Atlantic/Reykjavik",
  "malta": "Europe/Malta",
  "luxembourg": "Europe/Luxembourg",
  "monaco": "Europe/Monaco",
  "andorra": "Europe/Andorra",

  "tashkent": "Asia/Tashkent",
  "almaty": "Asia/Almaty",
  "bishkek": "Asia/Bishkek",

  "phnom penh": "Asia/Phnom_Penh",
  "yangon": "Asia/Yangon",

  "fiji": "Pacific/Fiji",
  "port moresby": "Pacific/Port_Moresby",

  "havana": "America/Havana",
  "kingston": "America/Jamaica",

  "dover": "Europe/London",
  "glasgow": "Europe/London"
};

  const zone = cityMap[input.toLowerCase()];

  if (zone) {
    cities.push({ name: input, zone: zone });
  } else {
    alert("City not supported yet!");
  }

  document.getElementById("cityInput").value = "";
}

updateClocks();