// loader 

const loader = document.querySelector('.loader');

window.addEventListener('load', vanish);

function vanish() {

  loader.classList.add('disappear');

}

// loader ends

const countDown = document.querySelector('.countdown');

// set launch time

const launchDate = new Date('August 5, 2023 20:00:00').getTime();

// Update every second

const intvl = setInterval(() => {

  // get today date and time (ms)

  const now = new Date().getTime();

  

  // Distance from now to the launch date

  const distance = launchDate - now;

  

  // Time calculations

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

  

  //Display the result

  countDown.innerHTML = `

   <div>${days}<span>Days</span></div>

   <div>${hours}<span>Hours</span></div>

   <div>${mins}<span>Minutes</span></div>

   <div>${seconds}<span>Seconds</span></div>

  `;

  

  

  // If launch day pass

  if(distance < 0){

    // Stoo countdown

    clearInterval(intvl);

    // Style and output text

    countDown.style.color = 'royalblue';

    countDown.innerHTML = 'Launched!';

  }

}, 1000);
