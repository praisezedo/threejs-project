const InputDisplay = document.querySelector('.display');

function appendtodisplay(Input) {
    InputDisplay.value += Input;
}
function cleardisplay() {
    InputDisplay.value = '';
}
function DeleteInput() {
    InputDisplay.value = InputDisplay.value.slice(0, -1);
}
function calculate() {
    try {
        InputDisplay.value = eval(InputDisplay.value);
    }
    catch(error) {
     InputDisplay.value = 'Error';
    }
}

// weather.js
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weatherResult');
            if (data.cod === 200) {
                weatherDiv.innerHTML = `
                    <strong>${data.name}, ${data.sys.country}</strong><br>
                    ${data.weather[0].main} - ${data.weather[0].description}<br>
                    Temperature: ${data.main.temp}°C<br>
                    Humidity: ${data.main.humidity}%<br>
                    Wind: ${data.wind.speed} m/s
                `;
            } else {
                weatherDiv.textContent = 'City not found!';
            }
        })
        .catch(() => {
            document.getElementById('weatherResult').textContent = 'Error fetching weather data.';
        });
});
