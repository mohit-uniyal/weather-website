const submitBtn = document.querySelector('#search-btn');
const city = document.querySelector('#input-city');
const displayCity=document.querySelector('#city-name');
const displayTemperature=document.querySelector('#city-temperature');
const presentDay=document.querySelector('#day');
const presentDate=document.querySelector('#date');

const getInfo = async (event) => {
    event.preventDefault();
    let cityName = city.value.trim();
    if (cityName == "") {
        displayCity.innerText="city name cannot be blank";
        displayTemperature.innerText="";
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=8eba4c413c9d844332abd45d0130da27`;
            let response = await fetch(url);
            let data = await response.json();
            // console.log(data);
            if(data.cod==404){
                displayCity.innerText="Please enter city name properly";
                displayTemperature.innerText="";
            }else{
                displayCity.innerText=data.name+" "+data.sys.country;
                let displayIcon;
                if(data.weather[0].main=='Clear'){
                    displayIcon=`<i class="fa-solid fa-sun" style="color: #ffec1a;"></i>`;
                }else{
                    displayIcon=`<i class="fa-solid fa-cloud" style="color: #f7f7f7;"></i>`;
                }
                let displayInfo=`${data.main.temp}<sup>o</sup>C ${displayIcon}`;
                displayTemperature.innerHTML=displayInfo;
            }
        } catch (err) {
            displayCity.innerText="Please enter city name properly";
            displayTemperature.innerText="";
        }
    }
}

submitBtn.addEventListener('click', getInfo);

function getDate(){
    return new Date().getDate();
}

function getDay(){
    let dayMap=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
    return dayMap[new Date().getDay()];
}

function getMonth(){
    let monthMap=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthMap[new Date().getMonth()];
}

let date=getDate();
let day=getDay();
let month=getMonth();

presentDay.innerText=day;
presentDate.innerText=date+" "+month;