const API_KEY = `2fa971f6e036e68fd4a1d22f52a1e824
`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

};

const displayTemperature = temperature => {
    console.log(temperature)
} 
