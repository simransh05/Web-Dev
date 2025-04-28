function getWeatherData(cb) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                city: city,
                temperature: 25,
                condition: "Sunny",
                forecast: [23, 24, 26, 25, 24],
                aqi: 50
            };
            resolve(data);
        }, 2000);
    })
}

function storeInDB(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            resolve();
        }, 2000)
    })
}

function generateReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const report = `Weather Report for ${data.city}:
            Temperature: ${data.temperature}°C
            Condition: ${data.condition}
            5-Day Forecast: ${data.forecast.join(', ')}°C
            Air Quality Index: ${data.aqi}`;
            resolve(report)
        },2000)
    })
}

