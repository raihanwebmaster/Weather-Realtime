//init UI
const ui = new UI;
// fetch city ip
 async function getCity(){
    const city = await fetch("https://ipapi.co/json");
    const data = await city.json();
    return data;
}

getCity().then(data => {
   const weather = new Weather (data.city);
   console.log(data.city);
   weather.getWeather().then(data =>{
        console.log(data)
        ui.paint(data);
   });

});
document.getElementById('w-change-btn').addEventListener('click', ()=> {
    const city = document.getElementById('city').value;
    const weather = new Weather (city);
    weather.getWeather().then(data =>{
            console.log(data)
            ui.paint(data);
    });
});