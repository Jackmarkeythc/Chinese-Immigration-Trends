// heatmap.js
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([30, 110], 4); // Centered near China
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);
  
    const locations = [
      [43.65107, -79.347015], // Toronto
      [37.77493, -122.41942], // San Francisco
      [-33.86882, 151.20929], // Sydney
      [3.139, 101.6869], // Kuala Lumpur
      [35.6895, 139.6917], // Tokyo
    ];
  
    locations.forEach(location => {
      L.circle(location, { radius: 50000, color: 'red' }).addTo(map);
    });
  });
  