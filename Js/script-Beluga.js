const title = document.querySelector('.belTitle');
const facts = document.querySelector('.factB');


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  const fontSize = 100 - scrollPosition * 3;
  title.style.fontSize = `${fontSize}px`;
});

const ice1 = document.querySelector('.easteregg');
window.onscroll = () => {

  let pos3 = window.scrollY + 15;

  ice1.style.top = `${-pos3}px`;
}


const Bubble = document.querySelector('.BelBub1');
const Bubble2 = document.querySelector('.BelBub2');
const Bubble3 = document.querySelector('.BelBub3');

Bubble.addEventListener('click', () => {

  if (Bubble.style.display === "none") {
    Bubble.style.display = "block";
  } else {
    Bubble.style.display = "none";
  }

});

Bubble2.addEventListener('click', () => {

  if (Bubble2.style.display === "none") {
    Bubble2.style.display = "block";
  } else {
    Bubble2.style.display = "none";
  }

});

Bubble3.addEventListener('click', () => {

  if (Bubble3.style.display === "none") {
    Bubble3.style.display = "block";
  } else {
    Bubble3.style.display = "none";
  }

});


document.addEventListener("mousemove", parallax);

function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;
    const up = document.querySelectorAll("img.BelUp");

    up[0].style.transform = `translateY(${y}px)`;
    up[1].style.transform = `translateY(${y}px)`;
    up[2].style.transform = `translateY(${y}px)`;
    up[3].style.transform = `translateY(${y}px)`;
    up[4].style.transform = `translateY(${y}px)`;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

const showImageButton = document.getElementById('show-image-button');
const showImageButton2 = document.getElementById('show-image-button2');
const showImageButton3 = document.getElementById('show-image-button3');
const showImageButton4 = document.getElementById('show-image-button4');
const showImageButton5 = document.getElementById('show-image-button5');
const myImage = document.getElementById('BelImg1');
const myImage2 = document.getElementById('BelImg2');
const myImage3 = document.getElementById('BelImg3');
const myImage4 = document.getElementById('BelImg4');
const myImage5 = document.getElementById('BelImg5');

showImageButton.addEventListener('click', () => {
  myImage.style.display = `flex`;
});

showImageButton2.addEventListener('click', () => {
  myImage2.style.display = `flex`;
});

showImageButton3.addEventListener('click', () => {
  myImage3.style.display = `flex`;
});

showImageButton4.addEventListener('click', () => {
  myImage4.style.display = `flex`;
});

showImageButton5.addEventListener('click', () => {
  myImage5.style.display = `flex`;
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