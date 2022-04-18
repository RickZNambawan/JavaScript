let covidData = {
    fetchData: async function(country) {
        try {
            const response = await fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`);
            const result = await response.json();
            return result;
        } catch(error) {
            console.log('no result');
            throw new Error('No result');
        }
    },
    
    displayData: async function(searchInput) {
        const result = await this.fetchData(searchInput).then(data => data = data.pop());
        console.log(result);
        const { Country: country, CountryCode: countryCode, Confirmed: confirmed, 
            Deaths: deaths, Recovered: recovered, Active: active, Date: date } = result;

        document.querySelector('#country').innerText = "Country: " + country + ", " + countryCode;
        document.querySelector('#new-confirmed').innerText = "New Confirmed: " + confirmed;
        document.querySelector('#new-deaths').innerText = "New Deaths:" + deaths;
        document.querySelector('#new-recovered').innerText = "New Recovered: " + recovered;
        document.querySelector('#new-active').innerText = "New Active: " + active;
        document.querySelector('#date').innerText = "Last Update Date: " + date;
    }
}

const showDataBtn = document.querySelector('#show-data');
const covidUpdate = document.querySelector('.covid-update > div');

showDataBtn.addEventListener('click', () => {
    if(covidUpdate.classList.contains('toggle-off')) {
        covidUpdate.setAttribute('class', 'toggle-on')
        covidUpdate.style.display = 'block';
        showDataBtn.innerText = "Hide Covid Data";
        covidData.displayData();
    } else if(covidUpdate.classList.contains('toggle-on')){
        covidUpdate.setAttribute('class', 'toggle-off');
        covidUpdate.style.display = 'none';
        showDataBtn.innerText = "Show Covid Data";
    }
})

const searchButton = document.querySelector('#search-btn');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input').value;
    covidData.displayData(searchInput);
})