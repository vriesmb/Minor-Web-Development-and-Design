// Auteur: Mike de Vries

// ----------------- //
// DOM ELEMENTS & VARIABLES buiten functies
const cloudItems = document.querySelectorAll('.multiple_clouds div');
const mickeyCloudContainer = document.querySelector('.cloudContainer');
let topRightStatus = false;
console.log(topRightStatus)
const gameArticle = document.createElement('article');
let tempData = 0;
// ----------------- //

function startPositions() {
    if (topRightStatus === false) {
        mickeyCloudContainer.classList.add('topRight');
        // start positie van de clouds
        setTimeout(() => {
            // hier zet ik de clouds in de gewenste start positie
            cloudItems.forEach(cloud => cloud.classList.toggle('start_position'));

            // hier zet ik de data-state van de clouds
            // zodat ik die later kan gebruiken in de vergelijking/if-else area
            cloudItems[0].setAttribute('data-state', 'money');
            cloudItems[1].setAttribute('data-state', 'planet');
            cloudItems[2].setAttribute('data-state', 'trading');
            console.log("clouds positioned + page loaded ");
            topRightStatus = true;
            console.log(topRightStatus);

            //styling waardes meegeven zodat er een fade in kan worden gedaan
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            gameArticle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            document.querySelector('#main_frame').appendChild(gameArticle);

            // html toevoegen aan de gameArticle
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
    } if (topRightStatus === true) {
        console.log('nu naar de blog')
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                window.location.href = 'blog.html';
            });
        } else {
            window.location.href = 'blog.html';
        }
    }

    else {
        console.log('cloud al positioned in topright');
    }

}

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
    cloudItems.forEach(cloud => cloud.classList.toggle('dark'));
    console.log('darkClouds Toggled');

    const mickeyMouseMascotte = document.querySelector('.mickey');
    mickeyMouseMascotte.classList.toggle('dark');
    console.log('Mascotte Darkened Toggled');

    const mickeyEar = document.querySelectorAll('.ear');
    mickeyEar.forEach(ear => ear.classList.toggle('dark'));
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
// en de sols zijn de solar days op Mars
// de tijd duurt daar iets langer dan 24 uur om mars om zijn as te draaien
// vandaar de andere benaming van een dag
// Define data and sol variables
// oude temp data van de API maar die werkt uit zichzelf niet
// had in de documentatie van NASA gelezen dat ik een string 
// in de array moest zetten dus hardcoded gedaan voor 
// zekerheid in de insertNasaDataIntoHtml functie
// const tempData = data[sol].AT;

let currentState = "idle";
let amountClicksCloud = 0;

// functie met conditions voor de geselecteerde cloud
function runFunctionForClickedCloud(cloud) {
    //   console.log('Clicked cloud:', cloud);
    // const cloudOpen = document.querySelector('dialog');

    // BRON: getAttribute geleerd van Jamie
    currentState = cloud.getAttribute('data-state');
    // hierboven pak ik de currentstate van een/de cloud maar 
    // zet hem om in een string zodat ik in een if else kan 
    // vergelijken/condities kan toevoegen

    // even loggen om de state te checken voodat we de if&else-es in gaan
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
            // Smooth fade out
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            setTimeout(() => {
                // Update inner HTML after fade out
                gameArticle.innerHTML =
                    `
                <h2>Money</h2>
                <h3>k ben een gedreven ondernemer met een passie voor fitness, media en technologie. Met New Motion help ik mensen de juiste supplementen en trainingsadvies te vinden, terwijl ik met M4U Creatives toffe video’s en designs maak voor bedrijven.</h3>
                `;

                // Smooth fade in
                gameArticle.style.opacity = '1';
                gameArticle.style.transform = 'translateY(0)';
            }, 1250); // Adjust the timeout duration to match the transition duration
        }

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
    } else if (currentState === "trading") {
        amountClicksCloud++;
        // DEZE HTML
        if (gameArticle) {
            // Smooth fade out
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            setTimeout(() => {
                // Update inner HTML after fade out
                gameArticle.innerHTML =
                    `
                <h2>Trading</h2>
                <h3>Ik heb ervaring met trading en sportweddenschappen. Ik handel altijd met een slimme, gestructureerde aanpak. Door data en strategie te combineren, maak ik weloverwogen keuzes en probeer ik elke kans zo goed mogelijk te benutten. Anderen zouden hun playstation opstarten. Voor mij is dit mijn fun-momentje op de dag.</h3>
                `;

                // Smooth fade in
                gameArticle.style.opacity = '1';
                gameArticle.style.transform = 'translateY(0)';
            }, 1250); // Adjust the timeout duration to match the transition duration
        }

        if (amountClicksCloud >= 2) {
            currentState = "idle";
            console.log(currentState);
            amountClicksCloud = 0;
            // Smooth fade out
            gameArticle.style.opacity = '0';
            gameArticle.style.transform = 'translateY(20px)';
            setTimeout(() => {
                // Update inner HTML na de fade out
                gameArticle.innerHTML = `
             <h2>Kies je onderwerp</h2>
            <h3>Klik op een wolk voor meer info</h3>
            `;

                // Smooth fade in
                gameArticle.style.opacity = '1';
                gameArticle.style.transform = 'translateY(0)';
            }, 1250);
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
const audioMars = new Audio('./audio/mars_mickey.wav');
const audioInstruction = new Audio('./audio/mickey_instruction.wav');
const audioMoney = new Audio('./audio/money_mickey.wav');
const audioTrading = new Audio('./audio/trading_mickey.wav');

mickeySpeaker.addEventListener('click', () => {
    if (currentState === "planet") {
        console.log(isPlaying)
        if (isPlaying === false) {
            isPlaying = true;
            audioMars.play();
        } else {
            return
        }

        setTimeout(() => {
            isPlaying = false;
            console.log(isPlaying)
        }, 10000)

        startPositions();

    } else if (currentState === "money") {
        console.log(isPlaying)
        if (isPlaying === false) {
            isPlaying = true;
            audioMoney.play();
        } else {
            return
        }

        setTimeout(() => {
            isPlaying = false;
            console.log(isPlaying)
        }, 10000)
    } else if (currentState === "trading") {
        console.log(isPlaying)
        if (isPlaying === false) {
            isPlaying = true;
            audioTrading.play();
        } else {
            return
        }

        setTimeout(() => {
            isPlaying = false;
            console.log(isPlaying)
        }, 1000)
    } else {
        console.log(isPlaying)
        if (isPlaying === false) {
            isPlaying = true;
            audioInstruction.play();
        }

        setTimeout(() => {
            isPlaying = false;
            console.log(isPlaying)
        }, 4000)
        console.log('Mickey - kies een onderwerp');
    }
})


// functie met conditions voor de andere clouds
function runFunctionForOtherClouds(cloud) {
    console.log('Other cloud:', cloud);
    cloud.classList.toggle('move_away');
}

// BRON: Jamie heeft samen met me problemen weten op te lossen

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
// checker of de tempData wordt geupdate (had problemen met de data re-writen)
setInterval(() => {
    console.log(tempData)
}, 1000)

// functie om de data in de html te zetten
function insertNasaDataIntoHtml(data) {
    // const solKeys = data.sol_keys;

    // in de documentatie van NASA stond dat ik 
    // een string in de array moest zetten om de data te krijgen

    // Get the latest sol key
    // 1 eraf halen geef de index het laatste element (door natuurlijk de array die begint op 0).
    /// solKeys[solKeys.length - 1] geeft de laatste sol key
    // const latestSol = solKeys[solKeys.length - 1];
    // werkte niet, dus ik heb het hardcoded gedaan

    // pakt de laatste temp data van de laatste sol key
    return tempData = data["675"].AT.av
    // rewrite hier de data in de html
}

// fetch en display NASA data
fetchNasaData();


// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
// // ----------BACKUP----------------- //
// archive van code van oudere/eerder concept
// ------------------------------------ //
// ------------------------------------ //


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
