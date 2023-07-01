 var body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = '#96D4F0';

  
  window.onscroll = function (event) {
      var scroll = window.scrollY;
      if (scroll < 300) {
          // Seccion 1
          body.style.backgroundColor = '#35A6DE';
      } else if (scroll >= 500 && scroll < 800) {
          // Seccion 2
          body.style.backgroundColor = '#2787BE';
      } else if (scroll >= 800 && scroll < 1400) {
          // Seccion 3
          body.style.backgroundColor = '#0C5B95';
      } else if (scroll >= 1400 && scroll < 2000) {
          // Seccion 4
          body.style.backgroundColor = '#1E396E';
      }  else if (scroll >= 2000 && scroll < 3200) {
          // Seccion 5
          body.style.backgroundColor = '#1B2746';
      } else if (scroll >= 3200 && scroll < 3800) {
          // Seccion 6
          body.style.backgroundColor = '#080F28';
      } 

      console.log(window.scrollY)
  }
  
/* 
  window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                console.log(position);

                const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=47.37&lon=8.55&timezone=auto&language=en&units=auto';
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '568ac6c25amshc7df6ee540807f4p1e732ajsnda656b271bea',
                        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
                    }
                };


                fetch(url, options)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const { temperature, summary, icon } = data.current;

                        // Set DOM Elements from the API

                        temperatureDegree.textContent = temperature;
                        temperatureDescription.textContent = summary;
                        locationTimezone.textContent = data.timezone;
                        //FORMULA FOR FAHRENHEIT
                        let fahrenheit = (temperature * 9 / 5) + 32;
                         // Set Icon
                        //  setIcons(icon, document.querySelector(".icon")); 
                        // Change temperature to Celsius/Farenheit
                        temperatureSection.addEventListener('click', () => {
                            if (temperatureSpan.textContent === "C°") {
                                temperatureSpan.textContent = "F";
                                temperatureDegree.textContent = Math.floor(fahrenheit);
                            } else {
                                temperatureSpan.textContent = "C°";
                                temperatureDegree.textContent = temperature;
                            }

                        })

                    });
            });
    }
}); */