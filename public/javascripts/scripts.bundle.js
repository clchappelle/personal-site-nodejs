!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){function a(){var e=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",e),"dark"===e?(document.querySelector(".btn-theme-switch").innerHTML="🌚","/"==window.location.pathname&&(document.querySelector(".header__personal-photo").src="images/me-header-dark.png")):(document.querySelector(".btn-theme-switch").innerHTML="🌝","/"==window.location.pathname&&(document.querySelector(".header__personal-photo").src="images/me-header.png"))}AOS.init({duration:1200}),a(),document.querySelector(".btn-theme-switch").addEventListener("click",function(){"light"===document.documentElement.getAttribute("data-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),a()}),anime({targets:".site-navigation",keyframes:[{translateY:"-6rem",duration:0,opacity:0},{translateY:"0rem",opacity:1,duration:1400,delay:500}],easing:"easeOutQuad"}),document.addEventListener("DOMContentLoaded",function(){document.getElementsByTagName("BODY")[0].classList.remove("preload"),function(){if("/"==window.location.pathname){$(".text-animate-wrapper").each(function(){$(this).html($(this).text().replace(/([^\x00-\x222]|\w)/g,"<span class='letter-wrapper'><span class='letter'>$&</span></span>"))}),anime({targets:".letter",keyframes:[{translateX:"-105%",duration:0,opacity:0,rotateZ:1},{translateX:0,delay:2400,duration:800,opacity:1,rotateZ:0,easing:"easeOutQuad"}],delay:anime.stagger(30)});const t=Math.floor(document.documentElement.clientWidth/40),a=Math.floor(document.documentElement.clientHeight/40),r=t*a;console.log(r);for(var e=0;e<r;e++){const e=document.getElementById("header__background-grid"),t=document.createElement("div");t.setAttribute("class","header__background-grid-square"),e.appendChild(t)}anime({targets:".header__background-grid .header__background-grid-square",translateX:anime.stagger(12,{grid:[t,a],from:"center",axis:"x"}),translateY:anime.stagger(12,{grid:[t,a],from:"center",axis:"y"}),rotateZ:anime.stagger([0,90],{grid:[t,a],from:"center",axis:"x"}),scale:[1,.5],delay:anime.stagger(50,{grid:[t,a],from:"center"}),easing:"easeInOutQuad",direction:"reverse"}),anime({targets:".background-slide",keyframes:[{translateX:"-100vw",duration:0},{translateX:"0",duration:1e3},{translateX:"10vw",duration:800}],easing:"cubicBezier(.17,.67,.5,1)",delay:anime.stagger(50,{start:1600})}),anime({targets:".header__personal-photo-box",keyframes:[{translateX:"-25rem",duration:0,opacity:1},{translateX:"0rem",opacity:1,duration:900}],easing:"easeOutQuad",delay:anime.stagger(100,{start:2400})}),anime({targets:".triangle",keyframes:[{opacity:0},{opacity:1,delay:2e3,easing:"easeOutQuad"}],duration:2400}),anime({targets:".triangle",translateY:-25,duration:1400,endDelay:700,direction:"alternate",loop:!0}),anime({targets:".site-navigation",keyframes:[{translateY:"-6rem",duration:0,opacity:0},{translateY:"0rem",opacity:1,duration:1400,delay:2900}],easing:"easeOutQuad"})}}()})}]);