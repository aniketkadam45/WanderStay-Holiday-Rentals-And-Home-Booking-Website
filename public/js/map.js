
mapboxgl.accessToken = apiKey;

	const map = new mapboxgl.Map({
        container: "map",
        // Replace the Mapbox style with a MapTiler style URL and your API key
        style: `https://api.maptiler.com/maps/bright-v2/style.json?key=${apiKey}`, 
        // projection: 'globe', // Display the map as a globe
        zoom: 10, // Initial zoom level
        center: listing.geometry.coordinates, // Center the map on this longitude and latitude
    });


    map.on("load", () => {
    const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`);

    new mapboxgl.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(popup)  // attach popup to marker
        .addTo(map);
});

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });
