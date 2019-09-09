// jshint esversion:6

//////// AOS - Animate on scroll ////////
AOS.init({duration: 1200});


//////// Dark/Light mode ////////
setTheme();

function toggleTheme() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  // theme === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
  if (currentTheme === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  setTheme();
}

function setTheme() {
  var theme = localStorage.getItem("theme");

  document.documentElement.setAttribute('data-theme', theme);

  if (theme === 'dark') {
    document.querySelector('.btn-theme-switch').innerHTML = '🌚';
    if (window.location.pathname == '/') {
      document.querySelector('.header__personal-photo').src="images/me-header-dark.png";
    }
  } else {
    document.querySelector('.btn-theme-switch').innerHTML = '🌝';
    if (window.location.pathname == '/') {
      document.querySelector('.header__personal-photo').src="images/me-header.png";
    }
  }

}

document.querySelector('.btn-theme-switch').addEventListener("click", toggleTheme); // Toggle theme when button is clicked

//////// Element animations - using anime.js ////////
anime({
  targets: '.site-navigation',
  keyframes: [
  {translateY: '-6rem', duration: 0, opacity: 0},
  {translateY: '0rem', opacity: 1, duration: 1400, delay: 500}
  ],
  easing: 'easeOutQuad'
});


//////// Home animation
if (window.location.pathname == '/') {
  //Animate in the text

  // Wrap every letter in a span
  $('.text-animate-wrapper').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x222]|\w)/g, "<span class='letter-wrapper'><span class='letter'>$&</span></span>"));
  });

  anime({
    targets: '.letter',
    keyframes: [
      {translateX: "-105%", duration: 0, opacity: 0, rotateZ: 1},
      {translateX: 0, delay: 2400, duration: 800, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic
    ],
    delay: anime.stagger(30)
  });

  // Background Grid animation
  const numberOfColumns = Math.floor( (document.documentElement.clientWidth / 40) );
  const numberOfRows = Math.floor( (document.documentElement.clientHeight / 40) );
  const numberOfElements = numberOfColumns * numberOfRows;
  console.log(numberOfElements);

  for (var i = 0; i < numberOfElements; i++) {
    const grid = document.getElementById("header__background-grid");
    const square = document.createElement('div');
    square.setAttribute('class', 'header__background-grid-square');
    grid.appendChild(square);
  }

  //Animate in the grid
  anime({
    targets: '.header__background-grid .header__background-grid-square',
    translateX: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),
    translateY: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'y'}),
    rotateZ: anime.stagger([0, 90], {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),
    //borderRadius: ['0%', '50%'],
    scale: [1,0.5],
    delay: anime.stagger(50, {grid: [numberOfColumns, numberOfRows], from: 'center'}),
    easing: 'easeInOutQuad',
    direction: 'reverse'
  });

  //Animate in the background color slide
  anime({
    targets: '.background-slide',
    keyframes: [
    {translateX: '-100vw', duration: 0},
    {translateX: '0', duration: 1000},
    {translateX: '10vw', duration: 800}
    ],
    easing: 'cubicBezier(.17,.67,.5,1)',
    delay: anime.stagger(50, {start: 1600})
  });

  //Animate in headshot
  anime({
    targets: '.header__personal-photo-box',
    keyframes: [
    {translateX: '-25rem', duration: 0, opacity: 1},
    {translateX: '0rem', opacity: 1, duration: 900}
    ],
    easing: 'easeOutQuad',
    // easing: 'cubicBezier(0.090, 0.415, 0.65, 1.1)',
    delay: anime.stagger(100, {start: 2400})
  });

  //animate the arrow
  anime({
    targets: '.triangle',
    keyframes: [
      {opacity: 0},
      {opacity: 1, delay: 2000, easing: 'easeOutQuad'}
    ],
    duration: 2400
  });

  anime({
    targets: '.triangle',
    translateY: -25,
    duration: 1400,
    endDelay: 700,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.site-navigation',
    keyframes: [
    {translateY: '-6rem', duration: 0, opacity: 0},
    {translateY: '0rem', opacity: 1, duration: 1400, delay: 2900}
    ],
    easing: 'easeOutQuad'
  });
}

//////// Page transitions - using highway.js ////////
/*
import Highway from '@dogstudio/highway';
import Fade from './transitions';


const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});
*/
