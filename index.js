const nav = document.querySelector("nav");
//console.log(nav);

window.addEventListener("scroll", () => {
  //console.log(window.scrollY);

  if (window.scrollY > 400) {
    nav.style.top = "-60px";
  } else {
    nav.style.top = 0;
  }
});

/*const nav = document.querySelector("nav");

nav.style.top = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "-60px";
  } else {
    nav.style.top = 0;
  }*/
