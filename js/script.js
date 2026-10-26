
const searchBar = document.getElementById('searchBar');

const day1Element = document.querySelector('#day1 .day');
const cityElement = document.querySelector('#day1 .city');
const temp1Element = document.querySelector('#day1 .temp');

const day2Element = document.querySelector('#day2 .day');
const temp2Element = document.querySelector('#day2 .temp');

const day3Element = document.querySelector('#day3 .day');
const temp3Element = document.querySelector('#day3 .temp');






async function getWeather(cityName) {
   
        const apiKey = '194ea82af70b45e9bf2221726261410'; 
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=3`);
        let data = await response.json();

    
        displayWeather(data);


}







function displayWeather(data) {
    let days = data.forecast.forecastday;
    let cartoon = "";
    
    for (let i = 0; i < days.length; i++) {
        cartoon += `
        <div class="card">
            <h3>${data.location.name}</h3>
            <h2>${days[i].day.avgtemp_c} °C</h2>
            <p>${days[i].date}</p>
        </div>
        `;
    }
    document.querySelector(".cards-container").innerHTML = cartoon;
}




getWeather()















searchBar.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
    getWeather(searchBar.value)
        }
    }
)



