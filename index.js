// do not show API KEY on your js file 
const API_KEY = `d976e6af25bfaca591870f61868c0819`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        desplayTemperature(data);
    });
};

const desplayTemperature = deggre =>{
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = deggre.main.temp;
    setInnerText('temperature', deggre.main.temp);
    setInnerText('condition', deggre.weather[0].main);
    console.log(deggre.weather[0].main);
};

const setInnerText = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);

    document.getElementById('city').innerText = city;

});
