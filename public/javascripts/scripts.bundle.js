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

eval("// jshint esversion:6\n\nvar UIController = (function() {\n\n\n  return {\n    // AOS - Animate on scroll\n    AOSinit: function() {\n      AOS.init({duration: 1200});\n    },\n\n    navigationAnimation: function() {\n      anime({\n        targets: '.site-navigation',\n        keyframes: [\n        {translateY: '-6rem', duration: 0, opacity: 0},\n        {translateY: '0rem', opacity: 1, duration: 1400, delay: 500}\n        ],\n        easing: 'easeOutQuad'\n      });\n    },\n    //Home animation\n    homeAnimation: function () {\n\n      // Wrap every letter in a span\n      $('.text-animate-wrapper').each(function(){\n        $(this).html($(this).text().replace(/([^\\x00-\\x222]|\\w)/g, \"<span class='letter-wrapper'><span class='letter'>$&</span></span>\"));\n      });\n\n      anime({\n        targets: '.letter',\n        keyframes: [\n          {translateX: \"-105%\", duration: 0, opacity: 0, rotateZ: 1},\n          {translateX: 0, delay: 2400, duration: 800, opacity: 1, rotateZ: 0, easing: 'easeOutQuad'} //easeOutElastic\n        ],\n        delay: anime.stagger(30)\n      });\n\n      // Background Grid animation\n      const numberOfColumns = Math.floor( (document.documentElement.clientWidth / 40) );\n      const numberOfRows = Math.floor( (document.documentElement.clientHeight / 40) );\n      const numberOfElements = numberOfColumns * numberOfRows;\n      console.log(numberOfElements);\n\n      for (var i = 0; i < numberOfElements; i++) {\n        const grid = document.getElementById(\"header__background-grid\");\n        const square = document.createElement('div');\n        square.setAttribute('class', 'header__background-grid-square');\n        grid.appendChild(square);\n      }\n\n      //Animate in the grid\n      anime({\n        targets: '.header__background-grid .header__background-grid-square',\n        translateX: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),\n        translateY: anime.stagger(12, {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'y'}),\n        rotateZ: anime.stagger([0, 90], {grid: [numberOfColumns, numberOfRows], from: 'center', axis: 'x'}),\n        //borderRadius: ['0%', '50%'],\n        scale: [1,0.5],\n        delay: anime.stagger(50, {grid: [numberOfColumns, numberOfRows], from: 'center'}),\n        easing: 'easeInOutQuad',\n        direction: 'reverse'\n      });\n\n      //Animate in the background color slide\n      anime({\n        targets: '.background-slide',\n        keyframes: [\n        {translateX: '-100vw', duration: 0},\n        {translateX: '0', duration: 1000},\n        {translateX: '10vw', duration: 800}\n        ],\n        easing: 'cubicBezier(.17,.67,.5,1)',\n        delay: anime.stagger(50, {start: 1600})\n      });\n\n      //Animate in headshot\n      anime({\n        targets: '.header__personal-photo-box',\n        keyframes: [\n        {translateX: '-25rem', duration: 0, opacity: 1},\n        {translateX: '0rem', opacity: 1, duration: 900}\n        ],\n        easing: 'easeOutQuad',\n        // easing: 'cubicBezier(0.090, 0.415, 0.65, 1.1)',\n        delay: anime.stagger(100, {start: 2400})\n      });\n\n      //animate the arrow\n      anime({\n        targets: '.triangle',\n        keyframes: [\n          {opacity: 0},\n          {opacity: 1, delay: 2000, easing: 'easeOutQuad'}\n        ],\n        duration: 2400\n      });\n\n      anime({\n        targets: '.triangle',\n        translateY: -25,\n        duration: 1400,\n        endDelay: 700,\n        direction: 'alternate',\n        loop: true\n      });\n\n      anime({\n        targets: '.site-navigation',\n        keyframes: [\n        {translateY: '-6rem', duration: 0, opacity: 0},\n        {translateY: '0rem', opacity: 1, duration: 1400, delay: 2900}\n        ],\n        easing: 'easeOutQuad'\n      });\n    },\n\n    // Set light or dark theme\n    setTheme: function() {\n      var theme = localStorage.getItem(\"theme\");\n\n      document.documentElement.setAttribute('data-theme', theme);\n\n      if (theme === 'dark') {\n        document.querySelector('.btn-theme-switch').innerHTML = '🌚';\n        if (window.location.pathname == '/') {\n          document.querySelector('.header__personal-photo').src=\"images/me-header-dark.png\";\n        }\n      } else {\n        document.querySelector('.btn-theme-switch').innerHTML = '🌝';\n        if (window.location.pathname == '/') {\n          document.querySelector('.header__personal-photo').src=\"images/me-header.png\";\n        }\n      }\n    }\n\n  };\n})();\n\n\n//////// Page transitions - using highway.js ////////\n/*\nimport Highway from '@dogstudio/highway';\nimport Fade from './transitions';\n\n\nconst H = new Highway.Core({\n  transitions: {\n    default: Fade\n  }\n});\n*/\n\nvar controller = (function(UIctrl) {\n\n  // SETUP EVENT LISTENERS\n  var setupEventListeners = function() {\n\n    window.addEventListener('load', function() {\n\n      if (window.location.pathname == '/' || '/zerodown') {\n        UIctrl.homeAnimation();\n      }\n\n    });\n\n    document.querySelector('.btn-theme-switch').addEventListener('click', toggleTheme); // Toggle theme when button is clicked\n  };\n\n\n  // THEME\n  var toggleTheme = function() {\n    var currentTheme = document.documentElement.getAttribute(\"data-theme\");\n    // theme === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');\n    if (currentTheme === 'light') {\n      localStorage.setItem('theme', 'dark');\n    } else {\n      localStorage.setItem('theme', 'light');\n    }\n    UIctrl.setTheme();\n  };\n\n  return  {\n    init: function() {\n      console.log('Application has started');\n      setupEventListeners();\n      UIctrl.setTheme();\n      UIctrl.navigationAnimation();\n      UIctrl.AOSinit();\n    }\n  };\n\n})(UIController);\n\ncontroller.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzP2MwYTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8ganNoaW50IGVzdmVyc2lvbjo2XG5cbnZhciBVSUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cblxuICByZXR1cm4ge1xuICAgIC8vIEFPUyAtIEFuaW1hdGUgb24gc2Nyb2xsXG4gICAgQU9TaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICBBT1MuaW5pdCh7ZHVyYXRpb246IDEyMDB9KTtcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbkFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6ICcuc2l0ZS1uYXZpZ2F0aW9uJyxcbiAgICAgICAga2V5ZnJhbWVzOiBbXG4gICAgICAgIHt0cmFuc2xhdGVZOiAnLTZyZW0nLCBkdXJhdGlvbjogMCwgb3BhY2l0eTogMH0sXG4gICAgICAgIHt0cmFuc2xhdGVZOiAnMHJlbScsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxNDAwLCBkZWxheTogNTAwfVxuICAgICAgICBdLFxuICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9Ib21lIGFuaW1hdGlvblxuICAgIGhvbWVBbmltYXRpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gV3JhcCBldmVyeSBsZXR0ZXIgaW4gYSBzcGFuXG4gICAgICAkKCcudGV4dC1hbmltYXRlLXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKC8oW15cXHgwMC1cXHgyMjJdfFxcdykvZywgXCI8c3BhbiBjbGFzcz0nbGV0dGVyLXdyYXBwZXInPjxzcGFuIGNsYXNzPSdsZXR0ZXInPiQmPC9zcGFuPjwvc3Bhbj5cIikpO1xuICAgICAgfSk7XG5cbiAgICAgIGFuaW1lKHtcbiAgICAgICAgdGFyZ2V0czogJy5sZXR0ZXInLFxuICAgICAgICBrZXlmcmFtZXM6IFtcbiAgICAgICAgICB7dHJhbnNsYXRlWDogXCItMTA1JVwiLCBkdXJhdGlvbjogMCwgb3BhY2l0eTogMCwgcm90YXRlWjogMX0sXG4gICAgICAgICAge3RyYW5zbGF0ZVg6IDAsIGRlbGF5OiAyNDAwLCBkdXJhdGlvbjogODAwLCBvcGFjaXR5OiAxLCByb3RhdGVaOiAwLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9IC8vZWFzZU91dEVsYXN0aWNcbiAgICAgICAgXSxcbiAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMzApXG4gICAgICB9KTtcblxuICAgICAgLy8gQmFja2dyb3VuZCBHcmlkIGFuaW1hdGlvblxuICAgICAgY29uc3QgbnVtYmVyT2ZDb2x1bW5zID0gTWF0aC5mbG9vciggKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIDQwKSApO1xuICAgICAgY29uc3QgbnVtYmVyT2ZSb3dzID0gTWF0aC5mbG9vciggKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLyA0MCkgKTtcbiAgICAgIGNvbnN0IG51bWJlck9mRWxlbWVudHMgPSBudW1iZXJPZkNvbHVtbnMgKiBudW1iZXJPZlJvd3M7XG4gICAgICBjb25zb2xlLmxvZyhudW1iZXJPZkVsZW1lbnRzKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyX19iYWNrZ3JvdW5kLWdyaWRcIik7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXJfX2JhY2tncm91bmQtZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuXG4gICAgICAvL0FuaW1hdGUgaW4gdGhlIGdyaWRcbiAgICAgIGFuaW1lKHtcbiAgICAgICAgdGFyZ2V0czogJy5oZWFkZXJfX2JhY2tncm91bmQtZ3JpZCAuaGVhZGVyX19iYWNrZ3JvdW5kLWdyaWQtc3F1YXJlJyxcbiAgICAgICAgdHJhbnNsYXRlWDogYW5pbWUuc3RhZ2dlcigxMiwge2dyaWQ6IFtudW1iZXJPZkNvbHVtbnMsIG51bWJlck9mUm93c10sIGZyb206ICdjZW50ZXInLCBheGlzOiAneCd9KSxcbiAgICAgICAgdHJhbnNsYXRlWTogYW5pbWUuc3RhZ2dlcigxMiwge2dyaWQ6IFtudW1iZXJPZkNvbHVtbnMsIG51bWJlck9mUm93c10sIGZyb206ICdjZW50ZXInLCBheGlzOiAneSd9KSxcbiAgICAgICAgcm90YXRlWjogYW5pbWUuc3RhZ2dlcihbMCwgOTBdLCB7Z3JpZDogW251bWJlck9mQ29sdW1ucywgbnVtYmVyT2ZSb3dzXSwgZnJvbTogJ2NlbnRlcicsIGF4aXM6ICd4J30pLFxuICAgICAgICAvL2JvcmRlclJhZGl1czogWycwJScsICc1MCUnXSxcbiAgICAgICAgc2NhbGU6IFsxLDAuNV0sXG4gICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDUwLCB7Z3JpZDogW251bWJlck9mQ29sdW1ucywgbnVtYmVyT2ZSb3dzXSwgZnJvbTogJ2NlbnRlcid9KSxcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXG4gICAgICAgIGRpcmVjdGlvbjogJ3JldmVyc2UnXG4gICAgICB9KTtcblxuICAgICAgLy9BbmltYXRlIGluIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHNsaWRlXG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6ICcuYmFja2dyb3VuZC1zbGlkZScsXG4gICAgICAgIGtleWZyYW1lczogW1xuICAgICAgICB7dHJhbnNsYXRlWDogJy0xMDB2dycsIGR1cmF0aW9uOiAwfSxcbiAgICAgICAge3RyYW5zbGF0ZVg6ICcwJywgZHVyYXRpb246IDEwMDB9LFxuICAgICAgICB7dHJhbnNsYXRlWDogJzEwdncnLCBkdXJhdGlvbjogODAwfVxuICAgICAgICBdLFxuICAgICAgICBlYXNpbmc6ICdjdWJpY0JlemllciguMTcsLjY3LC41LDEpJyxcbiAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoNTAsIHtzdGFydDogMTYwMH0pXG4gICAgICB9KTtcblxuICAgICAgLy9BbmltYXRlIGluIGhlYWRzaG90XG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6ICcuaGVhZGVyX19wZXJzb25hbC1waG90by1ib3gnLFxuICAgICAgICBrZXlmcmFtZXM6IFtcbiAgICAgICAge3RyYW5zbGF0ZVg6ICctMjVyZW0nLCBkdXJhdGlvbjogMCwgb3BhY2l0eTogMX0sXG4gICAgICAgIHt0cmFuc2xhdGVYOiAnMHJlbScsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA5MDB9XG4gICAgICAgIF0sXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgLy8gZWFzaW5nOiAnY3ViaWNCZXppZXIoMC4wOTAsIDAuNDE1LCAwLjY1LCAxLjEpJyxcbiAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMTAwLCB7c3RhcnQ6IDI0MDB9KVxuICAgICAgfSk7XG5cbiAgICAgIC8vYW5pbWF0ZSB0aGUgYXJyb3dcbiAgICAgIGFuaW1lKHtcbiAgICAgICAgdGFyZ2V0czogJy50cmlhbmdsZScsXG4gICAgICAgIGtleWZyYW1lczogW1xuICAgICAgICAgIHtvcGFjaXR5OiAwfSxcbiAgICAgICAgICB7b3BhY2l0eTogMSwgZGVsYXk6IDIwMDAsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ31cbiAgICAgICAgXSxcbiAgICAgICAgZHVyYXRpb246IDI0MDBcbiAgICAgIH0pO1xuXG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6ICcudHJpYW5nbGUnLFxuICAgICAgICB0cmFuc2xhdGVZOiAtMjUsXG4gICAgICAgIGR1cmF0aW9uOiAxNDAwLFxuICAgICAgICBlbmREZWxheTogNzAwLFxuICAgICAgICBkaXJlY3Rpb246ICdhbHRlcm5hdGUnLFxuICAgICAgICBsb29wOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgYW5pbWUoe1xuICAgICAgICB0YXJnZXRzOiAnLnNpdGUtbmF2aWdhdGlvbicsXG4gICAgICAgIGtleWZyYW1lczogW1xuICAgICAgICB7dHJhbnNsYXRlWTogJy02cmVtJywgZHVyYXRpb246IDAsIG9wYWNpdHk6IDB9LFxuICAgICAgICB7dHJhbnNsYXRlWTogJzByZW0nLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMTQwMCwgZGVsYXk6IDI5MDB9XG4gICAgICAgIF0sXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIFNldCBsaWdodCBvciBkYXJrIHRoZW1lXG4gICAgc2V0VGhlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcblxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRoZW1lKTtcblxuICAgICAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10aGVtZS1zd2l0Y2gnKS5pbm5lckhUTUwgPSAn8J+Mmic7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcGVyc29uYWwtcGhvdG8nKS5zcmM9XCJpbWFnZXMvbWUtaGVhZGVyLWRhcmsucG5nXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdGhlbWUtc3dpdGNoJykuaW5uZXJIVE1MID0gJ/CfjJ0nO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvJykge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3BlcnNvbmFsLXBob3RvJykuc3JjPVwiaW1hZ2VzL21lLWhlYWRlci5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9O1xufSkoKTtcblxuXG4vLy8vLy8vLyBQYWdlIHRyYW5zaXRpb25zIC0gdXNpbmcgaGlnaHdheS5qcyAvLy8vLy8vL1xuLypcbmltcG9ydCBIaWdod2F5IGZyb20gJ0Bkb2dzdHVkaW8vaGlnaHdheSc7XG5pbXBvcnQgRmFkZSBmcm9tICcuL3RyYW5zaXRpb25zJztcblxuXG5jb25zdCBIID0gbmV3IEhpZ2h3YXkuQ29yZSh7XG4gIHRyYW5zaXRpb25zOiB7XG4gICAgZGVmYXVsdDogRmFkZVxuICB9XG59KTtcbiovXG5cbnZhciBjb250cm9sbGVyID0gKGZ1bmN0aW9uKFVJY3RybCkge1xuXG4gIC8vIFNFVFVQIEVWRU5UIExJU1RFTkVSU1xuICB2YXIgc2V0dXBFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnLycgfHwgJy96ZXJvZG93bicpIHtcbiAgICAgICAgVUljdHJsLmhvbWVBbmltYXRpb24oKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10aGVtZS1zd2l0Y2gnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVRoZW1lKTsgLy8gVG9nZ2xlIHRoZW1lIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgfTtcblxuXG4gIC8vIFRIRU1FXG4gIHZhciB0b2dnbGVUaGVtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtcbiAgICAvLyB0aGVtZSA9PT0gJ2xpZ2h0JyA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJykgOiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICBpZiAoY3VycmVudFRoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9XG4gICAgVUljdHJsLnNldFRoZW1lKCk7XG4gIH07XG5cbiAgcmV0dXJuICB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb24gaGFzIHN0YXJ0ZWQnKTtcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIFVJY3RybC5zZXRUaGVtZSgpO1xuICAgICAgVUljdHJsLm5hdmlnYXRpb25BbmltYXRpb24oKTtcbiAgICAgIFVJY3RybC5BT1Npbml0KCk7XG4gICAgfVxuICB9O1xuXG59KShVSUNvbnRyb2xsZXIpO1xuXG5jb250cm9sbGVyLmluaXQoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts.js\n");

/***/ })

/******/ });