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

