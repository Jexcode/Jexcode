// loader 

const loader = document.querySelector('.loader');

window.addEventListener('load', vanish);

function vanish() {

  loader.classList.add('disappear');

}

// loader ends

const countDown = document.querySelector('.countdown');

// set launch time

const launchDate = new Date('September 20, 2023 20:00:00').getTime();

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

const portfolioTabItemOne = document.querySelector('.portfolio-tab-item-one'); 
const portfolioTabItemTwo = document.querySelector('.portfolio-tab-item-two'); 
const clipBg = document.querySelector(".click-bg");
const portfolioItems = document.querySelectorAll('.portfolio-var');

const barCons = document.querySelectorAll('.skill-bar');
const bars = document.querySelectorAll('.bar');



portfolioTabItemOne.addEventListener('click', ()=>{
  const id = portfolioItems[0].dataset.id;
  
    clipBg.classList.add('active-one');
    clipBg.classList.remove('active-two');
    portfolioItems[0].classList.add('show-active');
    portfolioItems[1].classList.remove('show-active');
    });
    
    


portfolioTabItemTwo.addEventListener('click', (e)=>{
  const id = e.target.dataset.id;
  
  
    clipBg.classList.add('active-two');
    clipBg.classList.remove('active-one');
    portfolioItems[0].classList.remove('show-active');
    portfolioItems[1].classList.add('show-active');
    
         bars.forEach(function(bar) {
           bar.classList.add('grow')
         });
     
});


const themeControl = document.querySelector('.theme-control');

themeControl.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-theme');
  
  const body = document.body;
  
  if (body.classList.contains("dark-theme")) {
  themeControl.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
  themeControl.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});


function show(){
  barCons.forEach(function(barCon) {
     barCon.addEventListener("show", () => {
      bars.forEach(function(bar) {
         bar.classList.toggle('grow')
      });
     });
  }); 

}

