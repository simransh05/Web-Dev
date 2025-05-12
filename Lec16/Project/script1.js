let key ='9d891ee6ab3dc75094c472acb9d9503d'
let weatherAPI = (lat,lon,key)=>`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

let geoCodingAPI = (key,city_name)=>`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${key}`

function getWeatherData(data,key){
    return new Promise((resolve,reject)=>{
        fetch(weatherAPI(data.lat,data.lon,key))
        .then(data=>data.json())
        .then(data=>{
            resolve(data)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

function getCoordinates(city_name,key){
    return new Promise((resolve,reject)=>{
        fetch(geoCodingAPI(key,city_name))
        .then(data=>data.json())
        .then(data=>{
            let lat=data[0].lat
            let lon = data[0].lon
            resolve({
                lat,
                lon
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

getCoordinates('delhi',key)
.then(getWeatherData)
.then(data)
.catch(data=>{
    console.log(data)
})