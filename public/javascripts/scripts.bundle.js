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

eval("// jshint esversion:6\n\n\n//////// AOS - Animate on scroll ////////\nAOS.init({duration: 1200});\n\n\n//////// Dark/Light mode ////////\nsetTheme();\n\nfunction toggleTheme() {\n  var currentTheme = document.documentElement.getAttribute(\"data-theme\");\n  // theme === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');\n  if (currentTheme === 'light') {\n    localStorage.setItem('theme', 'dark');\n  } else {\n    localStorage.setItem('theme', 'light');\n  }\n  setTheme();\n}\n\nfunction setTheme() {\n  var theme = localStorage.getItem(\"theme\");\n\n  document.documentElement.setAttribute('data-theme', theme);\n\n  if (theme === 'dark') {\n    document.querySelector('.btn-theme-switch').innerHTML = '🌚';\n    if (window.location.pathname == '/') {\n      document.querySelector('.header__personal-photo').src=\"images/me-header-dark.png\";\n    }\n  } else {\n    document.querySelector('.btn-theme-switch').innerHTML = '🌝';\n    if (window.location.pathname == '/') {\n      document.querySelector('.header__personal-photo').src=\"images/me-header.png\";\n    }\n  }\n\n}\n\ndocument.querySelector('.btn-theme-switch').addEventListener(\"click\", toggleTheme); // Toggle theme when button is clicked\n\n\n//////// Element animations - using anime.js ////////\nanime({\n  targets: '.site-navigation',\n  keyframes: [\n  {translateY: '-6rem', duration: 0, opacity: 0},\n  {translateY: '0rem', opacity: 1, duration: 1400, delay: 500}\n  ],\n  easing: 'easeOutQuad'\n});\n\n\n//////// Home page on load ////////\n//When document is loaded, remove preload class. Preload class has display set to hidden. Prevents elements from displaying before JS can animate\nhomeAnimation();\n\n//////// Home animation\nfunction homeAnimation() {\n  if (window.location.pathname == '/' || '/zerodown') {\n    //Animate in the text\n\n    // Wrap every letter in a span\n    $('.text-animate-wrapper').each(function(){\n      $(this).html($(this).text().replace(/([^\\x00-\\x222]|\\w)/g, \"<span class='letter-wrapper'><span class='letter'>$&</span></span>\"));\n    });\n\n    anime({\n      targets: '.letter',\n      keyframes: [\n        {translateX: \"-105%\", duration: 0, opacity: 0, rotateZ: 1},\n        {translateX: 0, delay: 2400, duration: 800, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic\n      ],\n      delay: anime.stagger(30)\n    });\n\n    // Background Grid animation\n    const numberOfColumns = Math.floor( (document.documentElement.clientWidth / 40) );\n    const numberOfRows = Math.floor( (document.documentElement.clientHeight / 40) );\n    const numberOfElements = numberOfColumns * numberOfRows;\n    console.log(numberOfElements);\n\n    for (var i = 0; i < numberOfElements; i++) {\n      const grid = document.getElementById(\"header__background-grid\");\n      const square = document.createElement('div');\n      square.setAttribute('class', 'header__background-grid-square');\n      grid.appendChild(square);\n    }\n\n    //Animate in the grid\n    anime({\n      targets: '.header__background-grid .header__background-grid-square',\n      translateX: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),\n      translateY: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'y'}),\n      rotateZ: anime.stagger([0, 90], {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),\n      //borderRadius: ['0%', '50%'],\n      scale: [1,0.5],\n      delay: anime.stagger(50, {grid: [numberOfColumns, numberOfRows], from: 'center'}),\n      easing: 'easeInOutQuad',\n      direction: 'reverse'\n    });\n\n    //Animate in the background color slide\n    anime({\n      targets: '.background-slide',\n      keyframes: [\n      {translateX: '-100vw', duration: 0},\n      {translateX: '0', duration: 1000},\n      {translateX: '10vw', duration: 800}\n      ],\n      easing: 'cubicBezier(.17,.67,.5,1)',\n      delay: anime.stagger(50, {start: 1600})\n    });\n\n    //Animate in headshot\n    anime({\n      targets: '.header__personal-photo-box',\n      keyframes: [\n      {translateX: '-25rem', duration: 0, opacity: 1},\n      {translateX: '0rem', opacity: 1, duration: 900}\n      ],\n      easing: 'easeOutQuad',\n      // easing: 'cubicBezier(0.090, 0.415, 0.65, 1.1)',\n      delay: anime.stagger(100, {start: 2400})\n    });\n\n    //animate the arrow\n    anime({\n      targets: '.triangle',\n      keyframes: [\n        {opacity: 0},\n        {opacity: 1, delay: 2000, easing: 'easeOutQuad'}\n      ],\n      duration: 2400\n    });\n\n    anime({\n      targets: '.triangle',\n      translateY: -25,\n      duration: 1400,\n      endDelay: 700,\n      direction: 'alternate',\n      loop: true\n    });\n\n    anime({\n      targets: '.site-navigation',\n      keyframes: [\n      {translateY: '-6rem', duration: 0, opacity: 0},\n      {translateY: '0rem', opacity: 1, duration: 1400, delay: 2900}\n      ],\n      easing: 'easeOutQuad'\n    });\n  }\n}\n\n\n//////// Page transitions - using highway.js ////////\n/*\nimport Highway from '@dogstudio/highway';\nimport Fade from './transitions';\n\n\nconst H = new Highway.Core({\n  transitions: {\n    default: Fade\n  }\n});\n*/\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzP2MwYTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8ganNoaW50IGVzdmVyc2lvbjo2XG5cblxuLy8vLy8vLy8gQU9TIC0gQW5pbWF0ZSBvbiBzY3JvbGwgLy8vLy8vLy9cbkFPUy5pbml0KHtkdXJhdGlvbjogMTIwMH0pO1xuXG5cbi8vLy8vLy8vIERhcmsvTGlnaHQgbW9kZSAvLy8vLy8vL1xuc2V0VGhlbWUoKTtcblxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gIHZhciBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtcbiAgLy8gdGhlbWUgPT09ICdsaWdodCcgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpIDogbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gIGlmIChjdXJyZW50VGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICB9XG4gIHNldFRoZW1lKCk7XG59XG5cbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSk7XG5cbiAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRoZW1lLXN3aXRjaCcpLmlubmVySFRNTCA9ICfwn4yaJztcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcGVyc29uYWwtcGhvdG8nKS5zcmM9XCJpbWFnZXMvbWUtaGVhZGVyLWRhcmsucG5nXCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdGhlbWUtc3dpdGNoJykuaW5uZXJIVE1MID0gJ/CfjJ0nO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19wZXJzb25hbC1waG90bycpLnNyYz1cImltYWdlcy9tZS1oZWFkZXIucG5nXCI7XG4gICAgfVxuICB9XG5cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10aGVtZS1zd2l0Y2gnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVGhlbWUpOyAvLyBUb2dnbGUgdGhlbWUgd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuXG5cbi8vLy8vLy8vIEVsZW1lbnQgYW5pbWF0aW9ucyAtIHVzaW5nIGFuaW1lLmpzIC8vLy8vLy8vXG5hbmltZSh7XG4gIHRhcmdldHM6ICcuc2l0ZS1uYXZpZ2F0aW9uJyxcbiAga2V5ZnJhbWVzOiBbXG4gIHt0cmFuc2xhdGVZOiAnLTZyZW0nLCBkdXJhdGlvbjogMCwgb3BhY2l0eTogMH0sXG4gIHt0cmFuc2xhdGVZOiAnMHJlbScsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxNDAwLCBkZWxheTogNTAwfVxuICBdLFxuICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbn0pO1xuXG5cbi8vLy8vLy8vIEhvbWUgcGFnZSBvbiBsb2FkIC8vLy8vLy8vXG4vL1doZW4gZG9jdW1lbnQgaXMgbG9hZGVkLCByZW1vdmUgcHJlbG9hZCBjbGFzcy4gUHJlbG9hZCBjbGFzcyBoYXMgZGlzcGxheSBzZXQgdG8gaGlkZGVuLiBQcmV2ZW50cyBlbGVtZW50cyBmcm9tIGRpc3BsYXlpbmcgYmVmb3JlIEpTIGNhbiBhbmltYXRlXG5ob21lQW5pbWF0aW9uKCk7XG5cbi8vLy8vLy8vIEhvbWUgYW5pbWF0aW9uXG5mdW5jdGlvbiBob21lQW5pbWF0aW9uKCkge1xuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyB8fCAnL3plcm9kb3duJykge1xuICAgIC8vQW5pbWF0ZSBpbiB0aGUgdGV4dFxuXG4gICAgLy8gV3JhcCBldmVyeSBsZXR0ZXIgaW4gYSBzcGFuXG4gICAgJCgnLnRleHQtYW5pbWF0ZS13cmFwcGVyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5odG1sKCQodGhpcykudGV4dCgpLnJlcGxhY2UoLyhbXlxceDAwLVxceDIyMl18XFx3KS9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXItd3JhcHBlcic+PHNwYW4gY2xhc3M9J2xldHRlcic+JCY8L3NwYW4+PC9zcGFuPlwiKSk7XG4gICAgfSk7XG5cbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLmxldHRlcicsXG4gICAgICBrZXlmcmFtZXM6IFtcbiAgICAgICAge3RyYW5zbGF0ZVg6IFwiLTEwNSVcIiwgZHVyYXRpb246IDAsIG9wYWNpdHk6IDAsIHJvdGF0ZVo6IDF9LFxuICAgICAgICB7dHJhbnNsYXRlWDogMCwgZGVsYXk6IDI0MDAsIGR1cmF0aW9uOiA4MDAsIG9wYWNpdHk6IDEsIHJvdGF0ZVo6IDAsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30gLy9lYXNlT3V0RWxhc3RpY1xuICAgICAgXSxcbiAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDMwKVxuICAgIH0pO1xuXG4gICAgLy8gQmFja2dyb3VuZCBHcmlkIGFuaW1hdGlvblxuICAgIGNvbnN0IG51bWJlck9mQ29sdW1ucyA9IE1hdGguZmxvb3IoIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyA0MCkgKTtcbiAgICBjb25zdCBudW1iZXJPZlJvd3MgPSBNYXRoLmZsb29yKCAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAvIDQwKSApO1xuICAgIGNvbnN0IG51bWJlck9mRWxlbWVudHMgPSBudW1iZXJPZkNvbHVtbnMgKiBudW1iZXJPZlJvd3M7XG4gICAgY29uc29sZS5sb2cobnVtYmVyT2ZFbGVtZW50cyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHM7IGkrKykge1xuICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyX19iYWNrZ3JvdW5kLWdyaWRcIik7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcl9fYmFja2dyb3VuZC1ncmlkLXNxdWFyZScpO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIC8vQW5pbWF0ZSBpbiB0aGUgZ3JpZFxuICAgIGFuaW1lKHtcbiAgICAgIHRhcmdldHM6ICcuaGVhZGVyX19iYWNrZ3JvdW5kLWdyaWQgLmhlYWRlcl9fYmFja2dyb3VuZC1ncmlkLXNxdWFyZScsXG4gICAgICB0cmFuc2xhdGVYOiBhbmltZS5zdGFnZ2VyKDEyLCB7Z3JpZDogW251bWJlck9mQ29sdW1ucywgbnVtYmVyT2ZSb3dzXSwgZnJvbTogJ2NlbnRlcicsIGF4aXM6ICd4J30pLFxuICAgICAgdHJhbnNsYXRlWTogYW5pbWUuc3RhZ2dlcigxMiwge2dyaWQ6IFtudW1iZXJPZkNvbHVtbnMsIG51bWJlck9mUm93c10sIGZyb206ICdjZW50ZXInLCBheGlzOiAneSd9KSxcbiAgICAgIHJvdGF0ZVo6IGFuaW1lLnN0YWdnZXIoWzAsIDkwXSwge2dyaWQ6IFtudW1iZXJPZkNvbHVtbnMsIG51bWJlck9mUm93c10sIGZyb206ICdjZW50ZXInLCBheGlzOiAneCd9KSxcbiAgICAgIC8vYm9yZGVyUmFkaXVzOiBbJzAlJywgJzUwJSddLFxuICAgICAgc2NhbGU6IFsxLDAuNV0sXG4gICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcig1MCwge2dyaWQ6IFtudW1iZXJPZkNvbHVtbnMsIG51bWJlck9mUm93c10sIGZyb206ICdjZW50ZXInfSksXG4gICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcbiAgICAgIGRpcmVjdGlvbjogJ3JldmVyc2UnXG4gICAgfSk7XG5cbiAgICAvL0FuaW1hdGUgaW4gdGhlIGJhY2tncm91bmQgY29sb3Igc2xpZGVcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLmJhY2tncm91bmQtc2xpZGUnLFxuICAgICAga2V5ZnJhbWVzOiBbXG4gICAgICB7dHJhbnNsYXRlWDogJy0xMDB2dycsIGR1cmF0aW9uOiAwfSxcbiAgICAgIHt0cmFuc2xhdGVYOiAnMCcsIGR1cmF0aW9uOiAxMDAwfSxcbiAgICAgIHt0cmFuc2xhdGVYOiAnMTB2dycsIGR1cmF0aW9uOiA4MDB9XG4gICAgICBdLFxuICAgICAgZWFzaW5nOiAnY3ViaWNCZXppZXIoLjE3LC42NywuNSwxKScsXG4gICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcig1MCwge3N0YXJ0OiAxNjAwfSlcbiAgICB9KTtcblxuICAgIC8vQW5pbWF0ZSBpbiBoZWFkc2hvdFxuICAgIGFuaW1lKHtcbiAgICAgIHRhcmdldHM6ICcuaGVhZGVyX19wZXJzb25hbC1waG90by1ib3gnLFxuICAgICAga2V5ZnJhbWVzOiBbXG4gICAgICB7dHJhbnNsYXRlWDogJy0yNXJlbScsIGR1cmF0aW9uOiAwLCBvcGFjaXR5OiAxfSxcbiAgICAgIHt0cmFuc2xhdGVYOiAnMHJlbScsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA5MDB9XG4gICAgICBdLFxuICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgLy8gZWFzaW5nOiAnY3ViaWNCZXppZXIoMC4wOTAsIDAuNDE1LCAwLjY1LCAxLjEpJyxcbiAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDEwMCwge3N0YXJ0OiAyNDAwfSlcbiAgICB9KTtcblxuICAgIC8vYW5pbWF0ZSB0aGUgYXJyb3dcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLnRyaWFuZ2xlJyxcbiAgICAgIGtleWZyYW1lczogW1xuICAgICAgICB7b3BhY2l0eTogMH0sXG4gICAgICAgIHtvcGFjaXR5OiAxLCBkZWxheTogMjAwMCwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfVxuICAgICAgXSxcbiAgICAgIGR1cmF0aW9uOiAyNDAwXG4gICAgfSk7XG5cbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLnRyaWFuZ2xlJyxcbiAgICAgIHRyYW5zbGF0ZVk6IC0yNSxcbiAgICAgIGR1cmF0aW9uOiAxNDAwLFxuICAgICAgZW5kRGVsYXk6IDcwMCxcbiAgICAgIGRpcmVjdGlvbjogJ2FsdGVybmF0ZScsXG4gICAgICBsb29wOiB0cnVlXG4gICAgfSk7XG5cbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLnNpdGUtbmF2aWdhdGlvbicsXG4gICAgICBrZXlmcmFtZXM6IFtcbiAgICAgIHt0cmFuc2xhdGVZOiAnLTZyZW0nLCBkdXJhdGlvbjogMCwgb3BhY2l0eTogMH0sXG4gICAgICB7dHJhbnNsYXRlWTogJzByZW0nLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMTQwMCwgZGVsYXk6IDI5MDB9XG4gICAgICBdLFxuICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLyBQYWdlIHRyYW5zaXRpb25zIC0gdXNpbmcgaGlnaHdheS5qcyAvLy8vLy8vL1xuLypcbmltcG9ydCBIaWdod2F5IGZyb20gJ0Bkb2dzdHVkaW8vaGlnaHdheSc7XG5pbXBvcnQgRmFkZSBmcm9tICcuL3RyYW5zaXRpb25zJztcblxuXG5jb25zdCBIID0gbmV3IEhpZ2h3YXkuQ29yZSh7XG4gIHRyYW5zaXRpb25zOiB7XG4gICAgZGVmYXVsdDogRmFkZVxuICB9XG59KTtcbiovXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts.js\n");

/***/ })

/******/ });