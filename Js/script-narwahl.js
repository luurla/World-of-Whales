const titlenarw = document.querySelector('#titlenarw');
const N = document.querySelectorAll("p.narw-title");

const ice1 = document.querySelector('.ice1')
const ice2 = document.querySelector('.ice2')
const ice6 = document.querySelector('.ice6')

const ice4 = document.querySelector('.ice4')
const ice17 = document.querySelector('.ice17')
const ice7 = document.getElementById('ice7')

window.onscroll = () => {
    let pos1 = window.scrollY + 0;
    let pos3 = window.scrollY + 10;
    let pos5 = window.scrollY + 90;



    let x = 300;

    console.log(pos1);

    titlenarw.style.left = `${-pos3}px`;

    if (pos1 < x) {
        N[4].style.top = `${pos1}px`;
        N[5].style.top = `${pos1}px`;
        N[6].style.top = `${pos1}px`;
        N[2].style.top = `${pos1}px`;
    };

    if (pos3 < x) {
        N[0].style.bottom = `${pos3}px`;
        N[3].style.bottom = `${pos3}px`;
        N[7].style.bottom = `${pos3}px`;
        N[1].style.bottom = `${pos3}px`;
    };

    ice1.style.top = `${pos3}px`;
    ice2.style.bottom = `${pos1}px`;
    ice6.style.bottom = `${pos1}px`;


    ice17.style.top = `${-pos1}px`;

    if (pos5 < x) {
        ice4.style.top = `${pos5}px`;
    };

}


window.addEventListener('scroll', () => {
let pos4 = window.scrollY;

ice7.style.bottom = pos4 * 1 +'vh';

})

/* 
if (pos3 < x) {
    A.style.bottom = `${pos3}px`;
    W.style.bottom = `${pos3}px`;
    W2.style.bottom = `${pos3}px`;
    H.style.bottom = `${pos3}px`;
};
 */

const showImageButton = document.getElementById('show-image-button');
const showImageButton2 = document.getElementById('show-image-button2');
const showImageButton3 = document.getElementById('show-image-button3');
const myImage = document.getElementById('NarImg1');
const myImage2 = document.getElementById('NarImg2');
const myImage3 = document.getElementById('NarImg3');

showImageButton.addEventListener('click', () => {
    myImage.style.display = `flex`;
});

showImageButton2.addEventListener('click', () => {
    myImage2.style.display = `flex`;
});
showImageButton3.addEventListener('click', () => {
    myImage3.style.display = `flex`;
});


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