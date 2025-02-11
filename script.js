// nieuw toggle zetten op meerdere items in de nodelist
const cloudItems = document.querySelectorAll('.multiple_clouds div');
const mickeyCloudContainer = document.querySelector('.cloudContainer');
const topRightStatus = false;
console.log(topRightStatus)

function startPositions() {
    if (topRightStatus === false) {
        mickeyCloudContainer.classList.add('topRight');
        // start positie van de clouds
        setTimeout(() => {
        cloudItems.forEach(cloud => cloud.classList.toggle('start_position'));
        console.log("clouds positioned + page loaded ");
        topRightStatus = true;
        console.log(topRightStatus);
        }, 500);
    } else {
        console.log('cloud already positioned topright');
    }
   
}


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
      runFunctionForOtherClouds(cloud);
    }
  });
}

// functie met conditions voor de geselecteerde cloud
function runFunctionForClickedCloud(cloud) {
  console.log('Clicked cloud:', cloud);
    // const cloudOpen = document.querySelector('dialog');
    cloud.classList.toggle('open');
//     mickeyCloudContainer.classList.toggle('topRight');
}

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



  async function getData() {
    const url = 'https://api.nasa.gov/insight_weather/?api_key=Z7W2br7uX8avYcqhlclVdhS19u7HsKJa5fdg0PL4&feedtype=json&ver=1.0';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      displayTemperatureData(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  function displayTemperatureData(data) {
    const section = document.createElement('section');
    section.id = 'temperature_data';
    section.style.padding = '20px';
    section.style.backgroundColor = '#f0f0f0';
  
    // SOL zijn de solar days op Mars
    const solKeys = data.sol_keys;
    solKeys.forEach(sol => {
    //   const article = document.createElement('article');
    //   article.style.marginBottom = '20px';
    //   article.style.padding = '10px';
    //   article.style.border = '1px solid #ccc';
    //   article.style.borderRadius = '5px';
    //   article.style.backgroundColor = '#fff';
  
    //   const solTitle = document.createElement('h2');
      solTitle.textContent = `Sol ${sol}`;
    //   article.appendChild(solTitle);
  
      const tempData = data[sol].AT;
      if (tempData) {
        const avgTemp = document.createElement('p');
        avgTemp.textContent = `Average Temperature: ${tempData.av} °C`;
        article.appendChild(avgTemp);
  
        const minTemp = document.createElement('p');
        minTemp.textContent = `Min Temperature: ${tempData.mn} °C`;
        article.appendChild(minTemp);
  
        const maxTemp = document.createElement('p');
        maxTemp.textContent = `Max Temperature: ${tempData.mx} °C`;
        article.appendChild(maxTemp);
      } else {
        const noData = document.createElement('p');
        noData.textContent = 'No temperature data available.';
        article.appendChild(noData);
      }
  
      section.appendChild(article);
    });
  
    document.body.appendChild(section);
  }
  
  // Call getData to fetch and display the data
  getData();


















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

    // myFunction(){
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