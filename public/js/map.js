var map = L.map('map').setView([41.39266792,2.14018909], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([41.39266792,2.14018909]).addTo(map);
var marker = L.marker([41.39,2.15018909]).addTo(map);
var marker = L.marker([41.395,2.14918909]).addTo(map);
