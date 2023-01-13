var hamburger = document.querySelector(".menu img");
hamburger.addEventListener("click", function () {
  document.getElementById("Sidenav").style.width = "250px";
  document.getElementById("Sidenav").style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

var closeButton = document.querySelector(".closeButton img");
closeButton.addEventListener("click", function () {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("Sidenav").style.display = "none";
  document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
});
