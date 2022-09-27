let urls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
document.body.style.backgroundImage = "url('" +urls[Math.floor(Math.random() * 6)] + "')";
let searchBTN = document.getElementById("searchBTN");
let mainDiv = document.querySelector(".all");
let searchTXF = document.getElementById("searchTXF");
let searchBar = document.querySelector(".searchBar");

let citiesInfo = [
    {id: "tehran", name: "Tehran", status: "Rainy", teperature: 20, humidity: 10, windSpeed: 15},
    {id: "kerman", name: "Kerman", status: "Sunny", teperature: 41, humidity: 26, windSpeed: 20},
    {id: "mashhad", name: "Mashhad", status: "Cloudy", teperature: 35, humidity: 32, windSpeed: 25},
    {id: "rasht", name: "Rasht", status: "Storm", teperature: 21, humidity: 19, windSpeed: 23}
]
searchBTN.addEventListener("click", function () {

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
        statusDiv.style.height = "15%";
        statusDiv.style.marginLeft = "1rem";

        let statusImage = document.createElement("img");
        let src = mainCity.status + ".png";
        statusImage.setAttribute("src", src)
        statusImage.style.width = "24px"
        statusImage.style.height = "24px"
        let p2 = document.createElement("p");
        p2.style.fontSize = "2rem"

        let p3 = document.createElement("p");
        p3.style.marginLeft = 0
        statusDiv.append(statusImage, p3);

        let p4 = document.createElement("p");
        let p5 = document.createElement("p");

        p1.innerHTML = "Weather in " + mainCity.name;
        p2.innerHTML = mainCity.teperature + "°C"
        p3.innerHTML = mainCity.status;
        p4.innerHTML = "Humidity: " + mainCity.humidity + "%";
        p5.innerHTML = "Wind Speed: " + mainCity.windSpeed + "km/h"

        mainDiv.append(p1, p2, statusDiv, p4, p5)
    }else {
        mainDiv.innerHTML = null;
        mainDiv.append(searchBar)
        searchBar.append(searchTXF, searchBTN)
        mainDiv.classList.remove("afterSearchClick")
        mainDiv.classList.add("all");
        let statusP = document.createElement("p");
        statusP.innerHTML = "Not Found"
        statusP.style.marginLeft = "1.5rem"
        mainDiv.append(statusP)
    }
})