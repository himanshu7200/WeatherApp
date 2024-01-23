let quote =document.querySelector(".display-5");
let form =document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector(".display-1");
let h2 = document.querySelector(".display-2");
let p = document.querySelector("p");
let img = document.querySelector("img");

    

// let fetchQuote = async () => {
//     let response = await fetch("http://quotable.io/random");
//     let data = await response.json();
//     quote.innerText = data.content + "-" + data.author;

// };

// setInterval(()=>{
//     fetchQuote();

// },10000);

let getWeather = async (e) => {
    e.preventDefault();

        
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes`);
        let data =await response.json();
        h1.innerText = data.current.temp_c;
        h2.innerText = data.location.name;
        p.innerText = data.current.condition.text;
        img.setAttribute("src", data.current.condition.icon);
        
    }catch{
        window.alert("invalid city name");
    }
    form.reset();
}

form.addEventListener("submit", getWeather);