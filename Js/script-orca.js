
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);


// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            new TypeWriter(txtElement, words, wait).type();
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(txtElement);
}



const TypeWriter = function (txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 50);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function () {
    //Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    console.log(fullTxt);


        this.txt = fullTxt.substring(0, this.txt.length + 1);


    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; 

    let typeSpeed = 200;

    setTimeout(() => this.type(), typeSpeed);
}


const displacerlinks = document.querySelectorAll('img.displacerlinks');
const displacerrechts = document.querySelectorAll('img.displacerrechts');

window.onscroll = () => {
    let pos = window.scrollY - 200;
    console.log(pos);

    if (pos < 150) {
        displacerlinks[0].style.left = `${pos/6}px`;
        displacerlinks[1].style.left = `${-pos*0.5}px`;

    }

    if (pos < 150) {
        displacerrechts[0].style.right = `${pos/6}px`;
        displacerrechts[1].style.right = `${-pos}px`;

    }

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