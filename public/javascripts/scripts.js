// jshint esversion:6


//Animate in the text

// Wrap every letter in a span
$('.slide-up-wrapper').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x222]|\w)/g, "<span class='letter-wrapper'><span class='letter'>$&</span></span>"));
});


anime({
  targets: '.letter',
  keyframes: [
    {translateX: "105%", duration: 0, opacity: 0, rotateZ: 1},
    {translateX: 0, delay: 2400, duration: 800, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic
  ],
  delay: anime.stagger(30)
});

anime({
  targets: '.night-mode',
  keyframes: [
    {translateY: "-105%", duration: 0, opacity: 0, rotateZ: 5},
    {translateY: 0, delay: 2000, duration: 1500, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic
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
  ],
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

//animate the arrow
anime({
  targets: '.triangle',
  keyframes: [
    {opacity: 0},
    {opacity: 1, delay: 2400, easing: 'easeOutQuad'}
  ],
  duration: 1400
});

anime({
  targets: '.triangle',
  translateY: -25,
  duration: 1400,
  endDelay: 2000,
  direction: 'alternate',
  loop: true
});
