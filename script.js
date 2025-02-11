function triggerStartShow() {
    const getStartedTrigger = document.querySelector('.getStarted');
    getStartedTrigger.classList.toggle('hidden');
    console.log('triggerGetStarted');
}


let isDark = false;

function triggerDarkLight() {
    const lightModeTrigger = document.querySelector('#main_frame > a:has(svg)');
    lightModeTrigger.classList.toggle('dark');
    console.log('lightModeTrigger toggled');
    
    const bg = document.querySelector('.background');
    bg.classList.toggle('dark');
    console.log('Dark mode toggled');

}




































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


    