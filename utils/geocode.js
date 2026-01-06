const axios = require("axios");
const apiKey = process.env.API_KEY;

async function geocodeLocation(query) {
  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=${apiKey}&limit=1`;

  const response = await axios.get(url);
  return response.data;
}

module.exports = { geocodeLocation };
