let userCity = "Cape Town";
const cityToStore = userCity;

function weatherForecast() {

    function getUserCity() {
        const searchButtonEl = document.getElementById('cityButton');
        console.log(searchButtonEl);
        
        searchButtonEl.addEventListener('click', function () {
            event.preventDefault();
            userCity = document.getElementById('city').value;

            console.log('You searched for this city: ', userCity);
            storeInLocalStorage(userCity);
            searchForCityWeather(userCity);
            searchForForecast(userCity);
            searchForCityCoord(userCity);
            displayLocalStorage(userCity);
        });

    }
    getUserCity();

    function storeInLocalStorage(userCity) {
        const cityToStore = userCity;
        let strCities = window.localStorage.getItem("strCities") || "[]";
        console.log(strCities);
        const cities = JSON.parse(strCities);
        cities.push(cityToStore);
        strCities = JSON.stringify(cities);
        localStorage.setItem('user', strCities);
        console.log("Local Storage: ", strCities)
    }

    storeInLocalStorage();

    function displayLocalStorage() { 

        var history = "";
        if (localStorage.getItem("history") !== "") {
            var history = localStorage.getItem("history");
        }


        if (history !== "") {
            $("#lastResults").html(
                "<b>Last Results:</b>" +
                "<ul data-role=\"listview\" data-inset=\"true\" >" +
                "<li><a href=\"#test\"> " + document(history) + " </a></li>" +
                "</ul>"
            );
        }
    };

    // Function will be used to perform request to the weather API
    function searchForCityWeather(userCity) {

        const apiKey = "d2cc546e51587ec446ab5d3dc30e5b7a";
        const cityName = userCity;
        const units = "metric";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units + "&appid=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response.data.name)
                document.getElementById("name").innerHTML = response.data.name;
                document.getElementById("temp").innerHTML = "Temperature: " + response.data.main.temp + " °C";
                document.getElementById("humidity").innerHTML = "Humidity: " + response.data.main.humidity + "%";
                document.getElementById("wind").innerHTML = "Wind Speed: " + response.data.wind.speed + " meter/sec";

            })
    };
    function searchForCityCoord(userCity) {

        const apiKey = "d2cc546e51587ec446ab5d3dc30e5b7a";
        const cityName = userCity;
        const units = "metric";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response)

                document.getElementById("lat").innerHTML = "Latitude: " + response.data.city.coord.lat;
                document.getElementById("lon").innerHTML = "Longitude: " + response.data.city.coord.lon;

            })

    };



    function searchForForecast(userCity) {
        const apiKey = "76276e859a5fc64d330030ae4dae33a3";
        const cityName = userCity;
        const units = "metric";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response.data.list[0])
                document.getElementById("weather-icon0").innerHTML = " <img src='http://openweathermap.org/img/wn/" + response.data.list[0].weather[0].icon + ".png'>";
                document.getElementById("date0").innerHTML = "Date: " + response.data.list[0].dt_txt;
                document.getElementById("temp0-max").innerHTML = "max: " + response.data.list[0].main.temp_max + " °C";
                document.getElementById("temp0-min").innerHTML = "min: " + response.data.list[0].main.temp_min + " °C";
                document.getElementById("humidity0").innerHTML = "Humidity: " + response.data.list[0].main.humidity + "%";
                document.getElementById("description0").innerHTML = "Description: " + response.data.list[0].weather[0].description;
                document.getElementById("wind").innerHTML = "Wind Speed: " + response.data.list[0].wind.speed + " meter/sec";
            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("date1").innerHTML = "Date: " + response.data.list[6].dt_txt;
                document.getElementById("temp1").innerHTML = "Temperature: " + response.data.list[6].main.temp + " °C";
                document.getElementById("humidity1").innerHTML = "Humidity: " + response.data.list[6].main.humidity + "%";




            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("temp2").innerHTML = "Temperature: " + response.data.list[20].main.temp + " °C";
                document.getElementById("date2").innerHTML = "Date: " + response.data.list[20].dt_txt;
                document.getElementById("humidity2").innerHTML = "Humidity: " + response.data.list[20].main.humidity + "%";




            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("date3").innerHTML = "Date: " + response.data.list[24].dt_txt;
                document.getElementById("temp3").innerHTML = "Temperature: " + response.data.list[24].main.temp + " °C";
                document.getElementById("humidity3").innerHTML = "Humidity: " + response.data.list[24].main.humidity + "%";




            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("temp4").innerHTML = "Temperature: " + response.data.list[30].main.temp + " °C";
                document.getElementById("date4").innerHTML = "Date: " + response.data.list[30].dt_txt;
                document.getElementById("humidity4").innerHTML = "Humidity: " + response.data.list[30].main.humidity + "%";



            })

            axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("temp5").innerHTML = "Temperature: " + response.data.list[38].main.temp + " °C";
                document.getElementById("date5").innerHTML = "Date: " + response.data.list[38].dt_txt;
                document.getElementById("humidity5").innerHTML = "Humidity: " + response.data.list[38].main.humidity + "%";



            })


    };




};
weatherForecast()
