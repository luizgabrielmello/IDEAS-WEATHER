const forecastImg = document.querySelector('#imgForecast') 

const search = document.querySelector('#search')
const btnSearch = document.querySelector('#btnSearch')

const city = document.querySelector('#city')
const forecast = document.querySelector('#forecast')
const tempMax = document.querySelector('#tempMax')
const tempMin = document.querySelector('#tempMin')
const thermal = document.querySelector('#thermal')
const rain = document.querySelector('#rain')
const humidity = document.querySelector('#humidity')
const pressure = document.querySelector('#pressure')
const visibility = document.querySelector('#visibility')
const wind = document.querySelector('#wind')
const direcWind = document.querySelector('#direcWind')
const latitude = document.querySelector('#latitude')
const longitude = document.querySelector('#longitude')

function imageForecast(icon) {
    return `img/iconPrevisaoTempo/campoPrevisao/${icon}.png`
}


async function weatherForecast(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ba438284fa602652dd54444ff2b38918'}&lang=pt_br&units=metric`).then(result => result.json())
    
    resultForecast(dados)
}

function resultForecast(dados) {
    if(!dados.name) {
        alert('Essa cidade não existe')
        location.reload()
    }
    city.innerText = dados.name
    forecastImg.src = imageForecast(dados.weather[0].icon) 
    tempMax.innerText = Number(dados.main.temp_max).toFixed(0) + '°C'
    tempMin.innerText = Number(dados.main.temp_min).toFixed(0) + '°C'
    thermal.innerText = Number(dados.main.feels_like).toFixed(0) + '°C'
    rain.innerText = dados.clouds.all + '%'
    humidity.innerText = dados.main.humidity + '%'
    pressure.innerText = dados.main.pressure + 'hPa'
    visibility.innerText = Number(dados.visibility / 1000).toFixed(0) + 'km'
    forecast.innerText = dados.weather[0].description
    wind.innerText = dados.wind.speed + 'm/s'
    direcWind.innerText = dados.wind.deg + '°'
    latitude.innerText = Number(dados.coord.lat).toFixed(2) + '°'
    longitude.innerText = Number(dados.coord.lon).toFixed(2) + '°' 
}

btnSearch.addEventListener('click', () => {
    weatherForecast(search.value)
    search.value = ''
    search.focus()
})

document.addEventListener('keypress', (event) => {
    if(event.key === 'Enter' && search.value != 0) {
        btnSearch.click()
    }
})

/*-----Estados------*/
let estados = document.querySelectorAll('.estado')

estados.forEach(ev => {
    ev.addEventListener('click', () => {
        search.value = ev.dataset.value
        btnSearch.click()
    })
})


//footer
const timeApplication = document.querySelector('.time')
const dateApplication = document.querySelector('.date')

function time() {
    return new Date().toLocaleTimeString().slice(0, 5)
}

function date() {
    return new Date().toLocaleDateString()
}

timeApplication.innerText = time()
dateApplication.innerText = date()