const planets = ['mercury', 'Venus' , 'Earth' , 'Mars' , 'Jupiter' , 'saturn' , 'Uranus'];
for (let i = 0 ; i < planets.length ; i++) {
const  planet = planets[i];
fetch(`https://api.api-ninjas.com/v1/planets?name=${planet}`, {
  method: 'GET',
  headers: {
    'X-Api-Key': 'ClVs16OFXGwaQtQIXuzCPQ==92BWa3DPZqAtcJrr'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

}
