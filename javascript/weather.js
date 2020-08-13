class Weather{
    constructor(city){
        this.city = city;
        this.appid = '892b489a94f33d04cd4b8ca7461f1fcf'
    };
    async getWeather(){
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`);
        const resultData =await resp.json();
        return resultData;
        
    };
};