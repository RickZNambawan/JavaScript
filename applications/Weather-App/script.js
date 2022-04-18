let weather = {
    apiKey: "b861b9913e067b280cc0c01020c1101c",
    fetchWeather: function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then(res => {
            if(!res.ok) throw new Error('Data Not Found!');

            return res.json();
        })
        .then(data => this.displayWeather(data))
        .catch(err => console.log(err));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.weather').classList.remove('loading');
        document.querySelector('.city').innerText = `Weather in ${name}, ${country}`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = `${parseInt(temp)}°C`;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
        document.querySelector('.wind').innerText = `Wind Speed: ${speed} km/h`;
        const weatherIcon = document.querySelector('.icon');
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector('body').style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`
    }
}

const searchBtn = document.querySelector("button");
searchBtn.addEventListener('click', () => {
    const searchBar = document.querySelector('.search-bar').value;
    weather.fetchWeather(searchBar);
    searchBar = "";

});

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        weather.fetchWeather(searchBar.value);
        searchBar.value = "";
    }
})

weather.fetchWeather('manila');

