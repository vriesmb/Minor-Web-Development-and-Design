// nieuw toggle zetten op meerdere items in de nodelist
const cloudItems = document.querySelectorAll('.multiple_clouds div');
const mickeyCloudContainer = document.querySelector('.cloudContainer');
let topRightStatus = false;
console.log(topRightStatus)
const gameArticle = document.createElement('article');
let tempData = 0;


function startPositions() {
    if (topRightStatus === false) {
        mickeyCloudContainer.classList.add('topRight');
        // start positie van de clouds
        setTimeout(() => {
            cloudItems.forEach(cloud => cloud.classList.toggle('start_position'));
            cloudItems[0].setAttribute('data-state', 'money');
            cloudItems[1].setAttribute('data-state', 'planet');
            cloudItems[2].setAttribute('data-state', 'trading');
            console.log("clouds positioned + page loaded ");
            topRightStatus = true;
            console.log(topRightStatus);

            // kiest onderwerp tekst aanmaken en toevoegen aan DOM
            // gameArticle.classList.add('gameInfoArticle');

            //styling waardes meegeven zodat er een fade in kan worden gedaan
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            gameArticle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            document.querySelector('#main_frame').appendChild(gameArticle);

            const startTopicH2 = document.createElement('h2');
            startTopicH2.textContent = 'Kies een onderwerp';
            const startTopicH3 = document.createElement('h3');
            startTopicH3.textContent = 'Klik op een wolk voor meer info';

            gameArticle.appendChild(startTopicH2);
            gameArticle.appendChild(startTopicH3);

            // trigger de transition (smooth fade in)
            setTimeout(() => {
                gameArticle.style.opacity = '1';
                gameArticle.style.transform = 'translateY(0)';
            }, 750);

        }, 500);
    } else {
        console.log('cloud already positioned topright');
    }

}


// gameArticle.addEventListener("click", () => {

//     setTimeout(() => {
//     }, 1000)

//     if (currentState === "planet") {
//       // DEZE HTML

//     } else if (currentState === "money") {

//       // DEZE HTML

//     } else if (currentState === "trading") {

//       // DEZE HTML

//     } else if (currentState === "idle") {

//       // DEFAULT TEXT

//     }

// })

// standaard waarde 'light' zodat dark getriggerd kan worden
// let omdat de status moet veranderen zodat hij teruggeschakeld kan worden
let isDark = false;

// couldItems gebruikt voor triggerDarkLight & moveClouds
const mickeyCloud = document.querySelector('.cloud');

function triggerDarkLight() {
    const lightModeTrigger = document.querySelector('#main_frame > a:has(svg)');
    lightModeTrigger.classList.toggle('dark');
    console.log('lightModeTrigger toggled');

    const bg = document.querySelector('.background');
    bg.classList.toggle('dark');
    console.log('Dark mode toggled');

    // const cloudItems = document.querySelector('.cloud');
    mickeyCloud.classList.toggle('dark');
    console.log('darkClouds Toggled');

    const mickeyMouseMascotte = document.querySelector('.mickey');
    mickeyMouseMascotte.classList.toggle('dark');
    console.log('Mascotte Darkened Toggled');

    const mickeyEar = document.querySelectorAll('.ear');
    mickeyEar.classList.toggle('dark');
    console.log('Ears Darkened');
}


// kijk welke cloud is geselecteerd
function handleCloudClick(event) {
    // single targett cloud
    const clickedCloud = event.currentTarget;

    // run de functie voor een geselecteerde cloud
    runFunctionForClickedCloud(clickedCloud);

    // run een functie voor de andere clouds
    cloudItems.forEach(cloud => {
        if (cloud !== clickedCloud) {
            // hier wil ik een if statement maken om te 
            // kijken welke cloud is geselecteerd uit de index
            runFunctionForOtherClouds(cloud);
        }
    });
}


// NASA Data - AT is de Atmospeheric Temperature
// Define data and sol variables

// const tempData = data[sol].AT;

let currentState = "idle";
let amountClicksCloud = 0;
// let currentState = "idle";  
// functie met conditions voor de geselecteerde cloud
function runFunctionForClickedCloud(cloud) {
    //   console.log('Clicked cloud:', cloud);
    // const cloudOpen = document.querySelector('dialog');

    // styling waardes meegeven zodat er een fade in kan worden gedaan
    // gameArticle.style.opacity = '0';
    // gameArticle.style.transform = 'translateY(20px)';
    // gameArticle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';



    currentState = cloud.getAttribute('data-state');
    console.log('currentState:', currentState);

    if (currentState === "planet") {
        amountClicksCloud++;
        if (gameArticle) {

            // Smooth fade out
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            setTimeout(() => {
                // Update inner HTML after fade out
                gameArticle.innerHTML =
                    `
                <h2>Flinke kou op planeet Mars</h2>
                <h3>We kijken naar de data op Sol 657</h3>
                <p>Maximale Temp: ${tempData}°C</p>
                <style>
                    .round-image {
                        width: 200px; /* Adjust the size as needed */
                        height: 200px; /* Adjust the size as needed */
                        clip-path: circle(35%);
                        object-fit: cover;
                    }
                </style>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Spinning_Mars.gif" alt="gif van planeet Mars" class="round-image">
                `;

                // Smooth fade in
                gameArticle.style.opacity = '1';
                gameArticle.style.transform = 'translateY(0)';
            }, 1250); // Adjust the timeout duration to match the transition duration

        }
        // DEZE HTML
        if (amountClicksCloud >= 2) {
            currentState = "idle";
            console.log(currentState);
            amountClicksCloud = 0;
            // Smooth fade out
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            setTimeout(() => {
                // Update inner HTML after fade out
                gameArticle.innerHTML = `
    <h2>Kies je onderwerp</h2>
    <h3>Klik op een wolk voor meer info</h3>
  `;

                // Smooth fade in
                gameArticle.style.opacity = '1';
                gameArticle.style.transform = 'translateY(0)';
            }, 1250); // Adjust the timeout duration to match the transition duration
        }
    } else if (currentState === "money") {
        amountClicksCloud++;
        // DEZE HTML

        if (gameArticle) {
            gameArticle.innerHTML =
                `
        <h2>Money</h2>
        <h3>Gaat over ondernemingen</h3>
        `;
        }

        if (amountClicksCloud >= 2) {
            currentState = "idle";
            console.log(currentState);
            amountClicksCloud = 0;

            if (gameArticle) {
                gameArticle.innerHTML =
                    `
            <h2>Kies je onderwerp</h2>
            <h3>Klik op een wolk voor meer info</h3>
            `;
            }
        }
    } else if (currentState === "trading") {
        amountClicksCloud++;
        // DEZE HTML
        if (gameArticle) {
            gameArticle.innerHTML =
                `
        <h2>Trading</h2>
        <h3>Crypto koersen</h3>
        `;
        }

        if (amountClicksCloud >= 2) {
            currentState = "idle";
            console.log(currentState);
            amountClicksCloud = 0;
            if (gameArticle) {
                gameArticle.innerHTML =
                    `
            <h2>Kies je onderwerp</h2>
            <h3>Klik op een wolk voor meer info</h3>
            `;
            }
        }
    } else {
        console.log('DIT WERKT');
        // DEFAULT TEXT

    }

}



// functie maken bij click op mickey
// check wat de status is van de clouds met currentState
// en run de functie voor de geselecteerde cloud
// speel audio die mickey zegt staat in mapje audio en file heet mars_mickey.wav
let isPlaying = false;

const mickeySpeaker = document.querySelector('.cloud');
const audio = new Audio('./audio/mars_mickey.wav');

mickeySpeaker.addEventListener('click', () => {
    if (currentState === "planet") {
        console.log(isPlaying)
        if (isPlaying === false) {
            isPlaying = true;
            audio.play();
        } else {
            return
        }

        setTimeout(() => {
            isPlaying = false;
            console.log(isPlaying)
        }, 10000)

        startPositions();

    }
    // else if (currentState === "money") {
    //     const audio = new Audio('./audio/mars_mickey.wav');
    //     audio.play();
    //     console.log('Mickey verteld over money');
    //     startPositions();
    // } else if (currentState === "trading") {
    //     const audio = new Audio('./audio/mars_mickey.wav');
    //     audio.play();
    //     console.log('Mickey verteld over trading');
    //     startPositions();
    // } 
    else {
        console.log('Mickey - kies een onderwerp');
    }
})







// if (gameArticle) {
//     gameArticle.innerHTML =
//     `
//     <h2>Kies je onderwerp</h2>
//     <h3>Klik op een wolk voor meer info</h3>
//     `;
// }


// cloud.classList.toggle('open');

//     mickeyCloudContainer.classList.toggle('topRight');
// contentCloudHandler();

// }


// function contentCloudHandler() {
//     if (currentState === "planet") {
//         // DEZE HTML

//       } else if (currentState === "money") {
//         // DEZE HTML

//       } else if (currentState === "trading") {
//         // DEZE HTML

//       } else if (currentState === "idle") {
//         // DEFAULT TEXT

//       }
//     }

// functie met conditions voor de andere clouds
function runFunctionForOtherClouds(cloud) {
    console.log('Other cloud:', cloud);
    cloud.classList.toggle('move_away');
    // 
}

// // Add event listeners to each cloud
// cloudItems.forEach(cloud => {
//   cloud.addEventListener('click', handleCloudClick);
// });








// const cloudOpen = document.querySelector('dialog');
// const cloudTrigger = document.querySelector('dialog + button');
// const cloudClose = document.querySelector('dialog button');

// // 'Show the dialog' button opens the dialog modally
// showButton.addEventListener('click', () => {
//   dialog.showModal();
// });

// // 'Close' button closes the dialog
// closeButton.addEventListener('click', () => {
//   dialog.close();
// });












// NASA Deel

// async function getData() {
//     const url = 'https://api.nasa.gov/insight_weather/?api_key=Z7W2br7uX8avYcqhlclVdhS19u7HsKJa5fdg0PL4&feedtype=json&ver=1.0';
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }



//   async function getData() {
//     const apiKey = process.env.NASA_API_KEY;
//     const url = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log(json);
//       displayTemperatureData(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   getData();

//   function displayTemperatureData(data) {
//     const section = document.createElement('section');
//     section.id = 'temperature_data';
//     section.style.padding = '20px';
//     section.style.backgroundColor = '#f0f0f0';

//     // SOL zijn de solar days op Mars
//     const solKeys = data.sol_keys;
//     solKeys.forEach(sol => {
//     //   const article = document.createElement('article');
//     //   article.style.marginBottom = '20px';
//     //   article.style.padding = '10px';
//     //   article.style.border = '1px solid #ccc';
//     //   article.style.borderRadius = '5px';
//     //   article.style.backgroundColor = '#fff';

//     //   const solTitle = document.createElement('h2');
//       solTitle.textContent = `Sol ${sol}`;
//     //   article.appendChild(solTitle);

//       const tempData = data[sol].AT;
//       if (tempData) {
//         const avgTemp = document.createElement('p');
//         avgTemp.textContent = `Average Temperature: ${tempData.av} °C`;
//         article.appendChild(avgTemp);

//         const minTemp = document.createElement('p');
//         minTemp.textContent = `Min Temperature: ${tempData.mn} °C`;
//         article.appendChild(minTemp);

//         const maxTemp = document.createElement('p');
//         maxTemp.textContent = `Max Temperature: ${tempData.mx} °C`;
//         article.appendChild(maxTemp);
//       } else {
//         const noData = document.createElement('p');
//         noData.textContent = 'No temperature data available.';
//         article.appendChild(noData);
//       }

//       section.appendChild(article);
//     });

//     document.body.appendChild(section);
//   }

// Call getData to fetch and display the data



















// function dragEvent(event) {
//     event.dataTransfer.setData("draggableContainer", event.target.id);
//     event.preventDefault()

// }

// function drop(event){
// event.preventDefault();
// const data = event.dataTransfer.getData("draggableContainer");

// }

// function dropAllowed(event){
// event.preventDefault();





// }
// let nextTrigger = document.getElementsByClassName('next');

// testFunction(){
//     cloud.classList.toggle('active');
// }

// window.onscroll = function () {
//     scrollRotate();
// };

// function scrollRotate() {
//     let mickey = document.querySelector(".mickey"); // Gebruik de class in plaats van ID
//     if (mickey) {
//         mickey.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
//     }
// }

// window.onscroll = scrollRotate;




// info en inspo sources van de *drabbable feature*

// deze pagina was mn inspo om ook die functie te willen (van CSS Tricks)
// maar begrijp echt niets van zijn code:
// https://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/

// hier sla ik mijn WEL waardige sources op:
// - https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// - https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
//  Window-relative coordinates: clientX/clientY.
//   Document-relative coordinates: pageX/pageY.
// source: https://javascript.info/mouse-events-basics
// notes van sourcs javascript.info
// clientX & clientY geeft de positie van de muis binnen het venster (zonder scroll-offset).
// pageX & pageY geeft de positie op de hele pagina (inclusief scroll-offset).
// offsetX & offsetY  geeft de positie van de muis binnen het geklikte element (handig voor slepen!).
// getBoundingClientRect()geeft een object met de exacte positie en grootte van een element t.o.v. het viewport (precieser dan offsetLeft).


//  Draggable functie voor de dumbbell
// const dumbbell = document.querySelector('.dumbbell');
// let isDragging = false;
// let offsetX, offsetY;

// // mousedown - begint te slepen > dragging wordt true voor volgende (mousemove listener) 
// // listener weet dat hij verplaatsen kan worden
// // clientx & y gaan gebruiken vor de muispositie
// // 
// dumbbell.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.clientX - dumbbell.offsetLeft;
//   offsetY = e.clientY - dumbbell.offsetTop;
//   dumbbell.style.cursor = "grabbing";
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     dumbbell.style.left = (e.clientX - offsetX) + 'px';
//     dumbbell.style.top = (e.clientY - offsetY) + 'px';
//   }
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
//   dumbbell.style.cursor = "grab";
// });




// --- input pakken van colorpicker functie - inspo van les Kilian 'stop using js'   ---
// const colorPicker = document.getElementById('colorPicker');
// colorPicker.addEventListener('input', (e) => {
//   // dumbbell kleur aanpassen met style setproperty en de value van de input (variable kleur maken in css)
//   document.documentElement.style.setProperty('--dumbbell-color', e.target.value);
// });







// --- DIMWL interactive component: PR invoer ---
// const prBtn = document.getElementById('prBtn');
// prBtn.addEventListener('click', () => {
//   const pr = document.getElementById('prInput').value;
//   const prResult = document.getElementById('prResult');
//   if (pr && pr > 0) {
//     prResult.textContent = "Je hebt " + pr + " kg gelift! Goed bezig!";
//   } else {
//     prResult.textContent = "Voer een geldig gewicht in!";
//   }
// });




// fetch en NASA data laten zien in html
async function fetchNasaData() {
    // veilige methode voor inladen api key
    // want als je het in de url zet is het zichtbaar voor iedereen
    const apiKey = 'Z7W2br7uX8avYcqhlclVdhS19u7HsKJa5fdg0PL4';
    const url = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // insert data in de html
        insertNasaDataIntoHtml(data);
    } catch (error) {
        console.error(error.message);
    }
}



setInterval(() => {
    console.log(tempData)
}, 1000)

// Function to insert NASA data into HTML
function insertNasaDataIntoHtml(data) {
    const solKeys = data.sol_keys;
    // console.log("DATA", );
    // const tempData = data["675"].AT;
    // in de documentatie van NASA stond dat ik 
    // een string in de array moest zetten om de data te krijgen

    // Get the latest sol key
    // 1 eraf halen geef de index het laatste element (door natuurlijk de array die begint op 0).
    /// solKeys[solKeys.length - 1] geeft de laatste sol key
    // const latestSol = solKeys[solKeys.length - 1];

    return tempData = data["675"].AT.av
    // const tempData = data[latestSol].AT;

    // const planetH3 = document.querySelector('#main_frame > article');

    // if (tempData) {
    //     const nasaDataH4 = document.createElement('h4');
    //     nasaDataH4.textContent = `Maximale Temp: ${tempData.mx} °C`;
    //     planetH3.appendChild(h4);
    // } else {
    //     const planetH4 = document.createElement('h4');
    //     planetH4.textContent = 'No temperature data available.';
    //     planetH4.appendChild(h4);
    // }
}

// Call the function to fetch and display NASA data
fetchNasaData();