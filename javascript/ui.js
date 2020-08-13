class UI {
    constructor(){
        this.location =document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity= document.getElementById('w-humidity')
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
    }
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = Math.floor(weather.main.temp - 273.15) + ' °C';
        this.icon.src =`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.humidity.textContent ="Humidity: "+weather.main.humidity + "%";
        this.wind.textContent ="Wind Speed: "+weather.wind.speed + " km/h";
        this.pressure.textContent = "Air Pressure: " +weather.main.pressure + "";
        
    }
    notFound(){
        this.location.textContent = 'NOT FOUND';
        this.desc.textContent = "";
        this.string.textContent= "";
        this.icon.src= ``;
        this.humidity.textContent= "";
        this.wind.textContent= "";
        this.pressure.textContent= "";
    }
};
