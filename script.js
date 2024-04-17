//entradas do input
const search = document.querySelector('#search')
const btnSearch = document.querySelector('#btnSearch')

//entradas da previsão do tempo
const city = document.querySelector('#city')
const tempMax = document.querySelector('#tempMax')
const tempMin = document.querySelector('#tempMin')
const forecast = document.querySelector('#forecast')
const rain = document.querySelector('#rain')
const humidity = document.querySelector('#humidity')

//resultado da previsão
function resultForecast(dados) {
    if(!dados.name) {
        alert('Essa cidade não existe')
        location.reload()
    }
    city.innerText = dados.name 
    tempMax.innerText = Number(dados.main.temp_max).toFixed(0) + '°C'
    tempMin.innerText = Number(dados.main.temp_min).toFixed(0) + '°C'
    forecast.innerText = dados.weather[0].description
    rain.innerText = dados.clouds.all + '%'
    humidity.innerText = dados.main.humidity + '%'
}

//evento e API
btnSearch.addEventListener('click', () => {
    weatherForecast(search.value)
    search.value = ''
})

async function weatherForecast(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ba438284fa602652dd54444ff2b38918'}&lang=pt_br&units=metric`).then(result => result.json())

    resultForecast(dados)
}







//tratar as horas e a data

const timeApplication = document.querySelector('.time')
const dateApplication = document.querySelector('.date')

function time() {
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()

    if(hour == 0) {
       return `${hour}0 : ${minutes}`
    } else {
        return `${hour} : ${minutes}` 
    }
}

function date() {
    const day = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    return `${day} / ${month} / ${year}`
}

timeApplication.innerText = time()
dateApplication.innerText = date()