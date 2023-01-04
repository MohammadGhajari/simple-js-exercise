let urls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
document.body.style.backgroundImage = "url('" +urls[Math.floor(Math.random() * 6)] + "')";
let searchBTN = document.getElementById("searchBTN");
let mainDiv = document.querySelector(".all");
let searchTXF = document.getElementById("searchTXF");
let searchBar = document.querySelector(".searchBar");
let theme = document.querySelector(".toggle-switch")
let svg = document.querySelector(".bi-search")
let time = document.querySelector(".time")

let citiesInfo = [
    {id: "tehran", name: "Tehran", status: "Rainy", teperature: 20, humidity: 10, windSpeed: 15},
    {id: "kerman", name: "Kerman", status: "Sunny", teperature: 41, humidity: 26, windSpeed: 20},
    {id: "mashhad", name: "Mashhad", status: "Cloudy", teperature: 35, humidity: 32, windSpeed: 25},
    {id: "rasht", name: "Rasht", status: "Storm", teperature: 21, humidity: 19, windSpeed: 23}
]
function searchHandler() {

    let hasExist;
    let mainCity;
    citiesInfo.forEach(function (city) {
        if(city.id === searchTXF.value) {
            hasExist = true;
            mainCity = city;
        }
    })
    if(hasExist) {
        mainDiv.innerHTML = null;
        mainDiv.append(searchBar)
        searchBar.append(searchTXF, searchBTN)
        mainDiv.classList.add("afterSearchClick");

        let p1 = document.createElement("p");
        p1.style.fontSize = "1.7rem";

        let statusDiv = document.createElement("div");
        statusDiv.style.display = "flex";
        statusDiv.style.alignItems = "center";
        statusDiv.style.width = "100%";
        statusDiv.style.height = "10%";
        statusDiv.style.marginLeft = "1.5rem";

        let statusImage = document.createElement("img");
        let src = mainCity.status + ".png";
        statusImage.setAttribute("src", src)
        statusImage.style.width = "24px"
        statusImage.style.height = "24px"
        statusImage.style.marginTop = "1rem"
        let p2 = document.createElement("p");
        p2.style.fontSize = "2rem"
        p2.style.marginTop = "0"
        p2.style.marginBottom = "0"

        let p3 = document.createElement("p");
        p3.style.margin = "0"
        p3.style.marginTop = "1rem";
        statusDiv.append(statusImage, p3);

        let p4 = document.createElement("p");
        let p5 = document.createElement("p");

        p1.innerHTML = "Weather in " + mainCity.name;
        p2.innerHTML = mainCity.teperature + "°C"
        p3.innerHTML = mainCity.status;
        p4.innerHTML = "Humidity: " + mainCity.humidity + "%";
        p4.style.marginTop = "1rem"
        p4.style.marginBottom = "0"
        p5.innerHTML = "Wind Speed: " + mainCity.windSpeed + "km/h"
        p5.style.marginTop = "1rem"
        p5.style.marginBottom = "0"

        mainDiv.append(p1, p2, statusDiv, p4, p5)
    }else {
        mainDiv.innerHTML = null;
        mainDiv.append(searchBar)
        searchBar.append(searchTXF, searchBTN)
        mainDiv.classList.remove("afterSearchClick")
        mainDiv.classList.add("all");
        let statusP = document.createElement("p");
        statusP.innerHTML = "Not Found"
        statusP.style.marginLeft = "2rem"
        statusP.style.marginTop = "1rem"
        mainDiv.append(statusP)
    }
}
searchBTN.addEventListener("click", searchHandler)
searchTXF.addEventListener("keydown", function (ev) {
    console.log(ev.key)
    if(ev.key === "Enter")
        searchHandler()
})

let darkMod = true;

searchTXF.classList.add("test")

theme.addEventListener("click", function () {
    if(darkMod) {
        document.body.style.backdropFilter = "brightness(100%)"
        mainDiv.classList.add("lightModAll")
        svg.style.fill = "black"
        time.classList.add("timeLight")
        searchTXF.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        searchTXF.style.color = "black"
        searchBTN.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        darkMod = false
    }else {
        document.body.style.backdropFilter = "brightness(50%)"
        mainDiv.classList.remove("lightModAll")
        svg.style.fill = "white"
        time.classList.remove("timeLight")
        searchTXF.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        searchTXF.style.color = "white"
        searchBTN.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        darkMod = true
    }

})


setInterval(function () {

    let d = new Date();
    console.log(d)
    let hour = d.getHours() + "", minute = d.getMinutes() + "", second = d.getSeconds() + "";
    if(d.getHours() < 10)
        hour = "0" + d.getHours()
    if(d.getMinutes() < 10)
        minute = "0" + d.getMinutes()
    if(d.getSeconds() < 10)
        second = "0" + d.getSeconds()
    time.innerHTML = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDay() + "       " + hour + ":" + minute + ":" + second;
    time.addEventListener("change", function () {
        time.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    })
}, 1000)
