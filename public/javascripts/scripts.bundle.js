!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){var a,n;(a={AOSinit:function(){AOS.init({duration:1200})},navigationAnimation:function(){anime({targets:".site-navigation",keyframes:[{translateY:"-6rem",duration:0,opacity:0},{translateY:"0rem",opacity:1,duration:1400,delay:500}],easing:"easeOutQuad"})},homeAnimation:function(){$(".text-animate-wrapper").each(function(){$(this).html($(this).text().replace(/([^\x00-\x222]|\w)/g,"<span class='letter-wrapper'><span class='letter'>$&</span></span>"))}),anime({targets:".letter",keyframes:[{translateX:"-105%",duration:0,opacity:0,rotateZ:1},{translateX:0,delay:2400,duration:800,opacity:1,rotateZ:0,easing:"easeOutQuad"}],delay:anime.stagger(30)});const e=Math.floor(document.documentElement.clientWidth/40),t=Math.floor(document.documentElement.clientHeight/40),a=e*t;console.log(a);for(var n=0;n<a;n++){const e=document.getElementById("header__background-grid"),t=document.createElement("div");t.setAttribute("class","header__background-grid-square"),e.appendChild(t)}anime({targets:".header__background-grid .header__background-grid-square",translateX:anime.stagger(12,{grid:[e,t],from:"center",axis:"x"}),translateY:anime.stagger(12,{grid:[e,t],from:"center",axis:"y"}),rotateZ:anime.stagger([0,90],{grid:[e,t],from:"center",axis:"x"}),scale:[1,.5],delay:anime.stagger(50,{grid:[e,t],from:"center"}),easing:"easeInOutQuad",direction:"reverse"}),anime({targets:".background-slide",keyframes:[{translateX:"-100vw",duration:0},{translateX:"0",duration:1e3},{translateX:"10vw",duration:800}],easing:"cubicBezier(.17,.67,.5,1)",delay:anime.stagger(50,{start:1600})}),anime({targets:".header__personal-photo-box",keyframes:[{translateX:"-25rem",duration:0,opacity:1},{translateX:"0rem",opacity:1,duration:900}],easing:"easeOutQuad",delay:anime.stagger(100,{start:2400})}),anime({targets:".triangle",keyframes:[{opacity:0},{opacity:1,delay:2e3,easing:"easeOutQuad"}],duration:2400}),anime({targets:".triangle",translateY:-25,duration:1400,endDelay:700,direction:"alternate",loop:!0}),anime({targets:".site-navigation",keyframes:[{translateY:"-6rem",duration:0,opacity:0},{translateY:"0rem",opacity:1,duration:1400,delay:2900}],easing:"easeOutQuad"})},setTheme:function(){var e=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",e),"dark"===e?(document.querySelector(".btn-theme-switch").innerHTML="🌚","/"==window.location.pathname&&(document.querySelector(".header__personal-photo").src="images/me-header-dark.png")):(document.querySelector(".btn-theme-switch").innerHTML="🌝","/"==window.location.pathname&&(document.querySelector(".header__personal-photo").src="images/me-header.png"))}},n=function(){"light"===document.documentElement.getAttribute("data-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),a.setTheme()},{init:function(){console.log("Application has started"),window.addEventListener("load",function(){window.location.pathname,a.homeAnimation()}),document.querySelector(".btn-theme-switch").addEventListener("click",n),a.setTheme(),a.navigationAnimation(),a.AOSinit()}}).init()}]);