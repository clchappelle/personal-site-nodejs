/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// jshint esversion:6\n\n\n//////// AOS - Animate on scroll ////////\nAOS.init({duration: 1200});\n\n\n//////// Dark/Light mode ////////\nsetTheme();\n\nfunction toggleTheme() {\n  var currentTheme = document.documentElement.getAttribute(\"data-theme\");\n  // theme === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');\n  if (currentTheme === 'light') {\n    localStorage.setItem('theme', 'dark');\n  } else {\n    localStorage.setItem('theme', 'light');\n  }\n  setTheme();\n}\n\nfunction setTheme() {\n  var theme = localStorage.getItem(\"theme\");\n\n  document.documentElement.setAttribute('data-theme', theme);\n\n  if (theme === 'dark') {\n    document.querySelector('.btn-theme-switch').innerHTML = '🌚';\n    if (window.location.pathname == '/') {\n      document.querySelector('.header__personal-photo').src=\"images/me-header-dark.png\";\n    }\n  } else {\n    document.querySelector('.btn-theme-switch').innerHTML = '🌝';\n    if (window.location.pathname == '/') {\n      document.querySelector('.header__personal-photo').src=\"images/me-header.png\";\n    }\n  }\n\n}\n\ndocument.querySelector('.btn-theme-switch').addEventListener(\"click\", toggleTheme); // Toggle theme when button is clicked\n\n//////// Element animations - using anime.js ////////\nanime({\n  targets: '.site-navigation',\n  keyframes: [\n  {translateY: '-6rem', duration: 0, opacity: 0},\n  {translateY: '0rem', opacity: 1, duration: 1400, delay: 500}\n  ],\n  easing: 'easeOutQuad'\n});\n\n\n//////// Home page on load ////////\n//When document is loaded, remove preload class. Preload class has display set to hidden. Prevents elements from displaying before JS can animate\nhomeAnimation();\n\n//////// Home animation\nfunction homeAnimation() {\n  if (window.location.pathname == '/') {\n    //Animate in the text\n\n    // Wrap every letter in a span\n    $('.text-animate-wrapper').each(function(){\n      $(this).html($(this).text().replace(/([^\\x00-\\x222]|\\w)/g, \"<span class='letter-wrapper'><span class='letter'>$&</span></span>\"));\n    });\n\n    anime({\n      targets: '.letter',\n      keyframes: [\n        {translateX: \"-105%\", duration: 0, opacity: 0, rotateZ: 1},\n        {translateX: 0, delay: 2400, duration: 800, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic\n      ],\n      delay: anime.stagger(30)\n    });\n\n    // Background Grid animation\n    const numberOfColumns = Math.floor( (document.documentElement.clientWidth / 40) );\n    const numberOfRows = Math.floor( (document.documentElement.clientHeight / 40) );\n    const numberOfElements = numberOfColumns * numberOfRows;\n    console.log(numberOfElements);\n\n    for (var i = 0; i < numberOfElements; i++) {\n      const grid = document.getElementById(\"header__background-grid\");\n      const square = document.createElement('div');\n      square.setAttribute('class', 'header__background-grid-square');\n      grid.appendChild(square);\n    }\n\n    //Animate in the grid\n    anime({\n      targets: '.header__background-grid .header__background-grid-square',\n      translateX: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),\n      translateY: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'y'}),\n      rotateZ: anime.stagger([0, 90], {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),\n      //borderRadius: ['0%', '50%'],\n      scale: [1,0.5],\n      delay: anime.stagger(50, {grid: [numberOfColumns, numberOfRows], from: 'center'}),\n      easing: 'easeInOutQuad',\n      direction: 'reverse'\n    });\n\n    //Animate in the background color slide\n    anime({\n      targets: '.background-slide',\n      keyframes: [\n      {translateX: '-100vw', duration: 0},\n      {translateX: '0', duration: 1000},\n      {translateX: '10vw', duration: 800}\n      ],\n      easing: 'cubicBezier(.17,.67,.5,1)',\n      delay: anime.stagger(50, {start: 1600})\n    });\n\n    //Animate in headshot\n    anime({\n      targets: '.header__personal-photo-box',\n      keyframes: [\n      {translateX: '-25rem', duration: 0, opacity: 1},\n      {translateX: '0rem', opacity: 1, duration: 900}\n      ],\n      easing: 'easeOutQuad',\n      // easing: 'cubicBezier(0.090, 0.415, 0.65, 1.1)',\n      delay: anime.stagger(100, {start: 2400})\n    });\n\n    //animate the arrow\n    anime({\n      targets: '.triangle',\n      keyframes: [\n        {opacity: 0},\n        {opacity: 1, delay: 2000, easing: 'easeOutQuad'}\n      ],\n      duration: 2400\n    });\n\n    anime({\n      targets: '.triangle',\n      translateY: -25,\n      duration: 1400,\n      endDelay: 700,\n      direction: 'alternate',\n      loop: true\n    });\n\n    anime({\n      targets: '.site-navigation',\n      keyframes: [\n      {translateY: '-6rem', duration: 0, opacity: 0},\n      {translateY: '0rem', opacity: 1, duration: 1400, delay: 2900}\n      ],\n      easing: 'easeOutQuad'\n    });\n  }\n}\n\n\n//////// Page transitions - using highway.js ////////\n/*\nimport Highway from '@dogstudio/highway';\nimport Fade from './transitions';\n\n\nconst H = new Highway.Core({\n  transitions: {\n    default: Fade\n  }\n});\n*/\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzP2MwYTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8ganNoaW50IGVzdmVyc2lvbjo2XG5cblxuLy8vLy8vLy8gQU9TIC0gQW5pbWF0ZSBvbiBzY3JvbGwgLy8vLy8vLy9cbkFPUy5pbml0KHtkdXJhdGlvbjogMTIwMH0pO1xuXG5cbi8vLy8vLy8vIERhcmsvTGlnaHQgbW9kZSAvLy8vLy8vL1xuc2V0VGhlbWUoKTtcblxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gIHZhciBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtcbiAgLy8gdGhlbWUgPT09ICdsaWdodCcgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpIDogbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gIGlmIChjdXJyZW50VGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICB9XG4gIHNldFRoZW1lKCk7XG59XG5cbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSk7XG5cbiAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRoZW1lLXN3aXRjaCcpLmlubmVySFRNTCA9ICfwn4yaJztcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcGVyc29uYWwtcGhvdG8nKS5zcmM9XCJpbWFnZXMvbWUtaGVhZGVyLWRhcmsucG5nXCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdGhlbWUtc3dpdGNoJykuaW5uZXJIVE1MID0gJ/CfjJ0nO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19wZXJzb25hbC1waG90bycpLnNyYz1cImltYWdlcy9tZS1oZWFkZXIucG5nXCI7XG4gICAgfVxuICB9XG5cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10aGVtZS1zd2l0Y2gnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVGhlbWUpOyAvLyBUb2dnbGUgdGhlbWUgd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuXG4vLy8vLy8vLyBFbGVtZW50IGFuaW1hdGlvbnMgLSB1c2luZyBhbmltZS5qcyAvLy8vLy8vL1xuYW5pbWUoe1xuICB0YXJnZXRzOiAnLnNpdGUtbmF2aWdhdGlvbicsXG4gIGtleWZyYW1lczogW1xuICB7dHJhbnNsYXRlWTogJy02cmVtJywgZHVyYXRpb246IDAsIG9wYWNpdHk6IDB9LFxuICB7dHJhbnNsYXRlWTogJzByZW0nLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMTQwMCwgZGVsYXk6IDUwMH1cbiAgXSxcbiAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG59KTtcblxuXG4vLy8vLy8vLyBIb21lIHBhZ2Ugb24gbG9hZCAvLy8vLy8vL1xuLy9XaGVuIGRvY3VtZW50IGlzIGxvYWRlZCwgcmVtb3ZlIHByZWxvYWQgY2xhc3MuIFByZWxvYWQgY2xhc3MgaGFzIGRpc3BsYXkgc2V0IHRvIGhpZGRlbi4gUHJldmVudHMgZWxlbWVudHMgZnJvbSBkaXNwbGF5aW5nIGJlZm9yZSBKUyBjYW4gYW5pbWF0ZVxuaG9tZUFuaW1hdGlvbigpO1xuXG4vLy8vLy8vLyBIb21lIGFuaW1hdGlvblxuZnVuY3Rpb24gaG9tZUFuaW1hdGlvbigpIHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnLycpIHtcbiAgICAvL0FuaW1hdGUgaW4gdGhlIHRleHRcblxuICAgIC8vIFdyYXAgZXZlcnkgbGV0dGVyIGluIGEgc3BhblxuICAgICQoJy50ZXh0LWFuaW1hdGUtd3JhcHBlcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKC8oW15cXHgwMC1cXHgyMjJdfFxcdykvZywgXCI8c3BhbiBjbGFzcz0nbGV0dGVyLXdyYXBwZXInPjxzcGFuIGNsYXNzPSdsZXR0ZXInPiQmPC9zcGFuPjwvc3Bhbj5cIikpO1xuICAgIH0pO1xuXG4gICAgYW5pbWUoe1xuICAgICAgdGFyZ2V0czogJy5sZXR0ZXInLFxuICAgICAga2V5ZnJhbWVzOiBbXG4gICAgICAgIHt0cmFuc2xhdGVYOiBcIi0xMDUlXCIsIGR1cmF0aW9uOiAwLCBvcGFjaXR5OiAwLCByb3RhdGVaOiAxfSxcbiAgICAgICAge3RyYW5zbGF0ZVg6IDAsIGRlbGF5OiAyNDAwLCBkdXJhdGlvbjogODAwLCBvcGFjaXR5OiAxLCByb3RhdGVaOiAwLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9IC8vZWFzZU91dEVsYXN0aWNcbiAgICAgIF0sXG4gICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigzMClcbiAgICB9KTtcblxuICAgIC8vIEJhY2tncm91bmQgR3JpZCBhbmltYXRpb25cbiAgICBjb25zdCBudW1iZXJPZkNvbHVtbnMgPSBNYXRoLmZsb29yKCAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gNDApICk7XG4gICAgY29uc3QgbnVtYmVyT2ZSb3dzID0gTWF0aC5mbG9vciggKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLyA0MCkgKTtcbiAgICBjb25zdCBudW1iZXJPZkVsZW1lbnRzID0gbnVtYmVyT2ZDb2x1bW5zICogbnVtYmVyT2ZSb3dzO1xuICAgIGNvbnNvbGUubG9nKG51bWJlck9mRWxlbWVudHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcl9fYmFja2dyb3VuZC1ncmlkXCIpO1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXJfX2JhY2tncm91bmQtZ3JpZC1zcXVhcmUnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG5cbiAgICAvL0FuaW1hdGUgaW4gdGhlIGdyaWRcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLmhlYWRlcl9fYmFja2dyb3VuZC1ncmlkIC5oZWFkZXJfX2JhY2tncm91bmQtZ3JpZC1zcXVhcmUnLFxuICAgICAgdHJhbnNsYXRlWDogYW5pbWUuc3RhZ2dlcigxMiwge2dyaWQ6IFtudW1iZXJPZkNvbHVtbnMsIG51bWJlck9mUm93c10sIGZyb206ICdjZW50ZXInLCBheGlzOiAneCd9KSxcbiAgICAgIHRyYW5zbGF0ZVk6IGFuaW1lLnN0YWdnZXIoMTIsIHtncmlkOiBbbnVtYmVyT2ZDb2x1bW5zLCBudW1iZXJPZlJvd3NdLCBmcm9tOiAnY2VudGVyJywgYXhpczogJ3knfSksXG4gICAgICByb3RhdGVaOiBhbmltZS5zdGFnZ2VyKFswLCA5MF0sIHtncmlkOiBbbnVtYmVyT2ZDb2x1bW5zLCBudW1iZXJPZlJvd3NdLCBmcm9tOiAnY2VudGVyJywgYXhpczogJ3gnfSksXG4gICAgICAvL2JvcmRlclJhZGl1czogWycwJScsICc1MCUnXSxcbiAgICAgIHNjYWxlOiBbMSwwLjVdLFxuICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoNTAsIHtncmlkOiBbbnVtYmVyT2ZDb2x1bW5zLCBudW1iZXJPZlJvd3NdLCBmcm9tOiAnY2VudGVyJ30pLFxuICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXG4gICAgICBkaXJlY3Rpb246ICdyZXZlcnNlJ1xuICAgIH0pO1xuXG4gICAgLy9BbmltYXRlIGluIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHNsaWRlXG4gICAgYW5pbWUoe1xuICAgICAgdGFyZ2V0czogJy5iYWNrZ3JvdW5kLXNsaWRlJyxcbiAgICAgIGtleWZyYW1lczogW1xuICAgICAge3RyYW5zbGF0ZVg6ICctMTAwdncnLCBkdXJhdGlvbjogMH0sXG4gICAgICB7dHJhbnNsYXRlWDogJzAnLCBkdXJhdGlvbjogMTAwMH0sXG4gICAgICB7dHJhbnNsYXRlWDogJzEwdncnLCBkdXJhdGlvbjogODAwfVxuICAgICAgXSxcbiAgICAgIGVhc2luZzogJ2N1YmljQmV6aWVyKC4xNywuNjcsLjUsMSknLFxuICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoNTAsIHtzdGFydDogMTYwMH0pXG4gICAgfSk7XG5cbiAgICAvL0FuaW1hdGUgaW4gaGVhZHNob3RcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLmhlYWRlcl9fcGVyc29uYWwtcGhvdG8tYm94JyxcbiAgICAgIGtleWZyYW1lczogW1xuICAgICAge3RyYW5zbGF0ZVg6ICctMjVyZW0nLCBkdXJhdGlvbjogMCwgb3BhY2l0eTogMX0sXG4gICAgICB7dHJhbnNsYXRlWDogJzByZW0nLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogOTAwfVxuICAgICAgXSxcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgIC8vIGVhc2luZzogJ2N1YmljQmV6aWVyKDAuMDkwLCAwLjQxNSwgMC42NSwgMS4xKScsXG4gICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxMDAsIHtzdGFydDogMjQwMH0pXG4gICAgfSk7XG5cbiAgICAvL2FuaW1hdGUgdGhlIGFycm93XG4gICAgYW5pbWUoe1xuICAgICAgdGFyZ2V0czogJy50cmlhbmdsZScsXG4gICAgICBrZXlmcmFtZXM6IFtcbiAgICAgICAge29wYWNpdHk6IDB9LFxuICAgICAgICB7b3BhY2l0eTogMSwgZGVsYXk6IDIwMDAsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ31cbiAgICAgIF0sXG4gICAgICBkdXJhdGlvbjogMjQwMFxuICAgIH0pO1xuXG4gICAgYW5pbWUoe1xuICAgICAgdGFyZ2V0czogJy50cmlhbmdsZScsXG4gICAgICB0cmFuc2xhdGVZOiAtMjUsXG4gICAgICBkdXJhdGlvbjogMTQwMCxcbiAgICAgIGVuZERlbGF5OiA3MDAsXG4gICAgICBkaXJlY3Rpb246ICdhbHRlcm5hdGUnLFxuICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgYW5pbWUoe1xuICAgICAgdGFyZ2V0czogJy5zaXRlLW5hdmlnYXRpb24nLFxuICAgICAga2V5ZnJhbWVzOiBbXG4gICAgICB7dHJhbnNsYXRlWTogJy02cmVtJywgZHVyYXRpb246IDAsIG9wYWNpdHk6IDB9LFxuICAgICAge3RyYW5zbGF0ZVk6ICcwcmVtJywgb3BhY2l0eTogMSwgZHVyYXRpb246IDE0MDAsIGRlbGF5OiAyOTAwfVxuICAgICAgXSxcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8vLy8vLy8gUGFnZSB0cmFuc2l0aW9ucyAtIHVzaW5nIGhpZ2h3YXkuanMgLy8vLy8vLy9cbi8qXG5pbXBvcnQgSGlnaHdheSBmcm9tICdAZG9nc3R1ZGlvL2hpZ2h3YXknO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5cblxuY29uc3QgSCA9IG5ldyBIaWdod2F5LkNvcmUoe1xuICB0cmFuc2l0aW9uczoge1xuICAgIGRlZmF1bHQ6IEZhZGVcbiAgfVxufSk7XG4qL1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts.js\n");

/***/ })

/******/ });