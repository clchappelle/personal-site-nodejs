// jshint esversion:6


//Animate in the text
anime({
  targets: '.slide-up-hey',
  keyframes: [
    {translateY: "101%", duration: 0, opacity: 0, rotateZ: 1},
    {translateY: 0, delay: 2400, duration: 1800, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic
  ],
});

anime({
  targets: '.slide-up-content',
  keyframes: [
    {translateY: "100px", duration: 0, opacity: 0, rotateZ: 1},
    {translateY: 0, delay: 2800, duration: 1700, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic
  ],
  delay: anime.stagger(900)
});

anime({
  targets: '.night-mode',
  keyframes: [
    {translateY: "-105%", duration: 0, opacity: 0, rotateZ: 5},
    {translateY: 0, delay: 4000, duration: 1500, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic
  ],
  delay: anime.stagger(1000)
});


// Background Grid animation
const numberOfColumns = Math.floor( (document.documentElement.clientWidth / 40) );
const numberOfRows = Math.floor( (document.documentElement.clientHeight / 40) );
const numberOfElements = numberOfColumns * numberOfRows;
console.log(numberOfElements);

for (i = 0; i < numberOfElements; i++) {
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
  // {translateY: '150vh', rotateZ: -10, opacity:0, scale:0, duration: 0},
  // {translateY: '0', rotateZ: 0, opacity:1, scale:1, duration: 1000}
  ],
  //easing: 'easeOutSine',
  //easing: 'spring(1, 90, 30, 0)',
  easing: 'cubicBezier(.17,.67,.5,1)',
  delay: anime.stagger(50, {start: 1600})
});

//Animate in headshot

anime({
  targets: '.header__personal-photo-box, .header__personal-photo-box__big-blur, .header__personal-photo-box__small-blur',
  keyframes: [
  {translateX: '-30rem', duration: 0, opacity: 0},
  {translateX: '0', opacity: 1, duration: 1100}
  ],
  easing: 'easeOutSine',
  //easing: 'cubicBezier(0.090, 0.415, 0.365, 1.205)',
  delay: anime.stagger(100, {start: 2200})
});
