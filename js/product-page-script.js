
// image slider
function currentDiv(n) {
    showDivs(slideIndex = n);

  }
  function showDivs(n) {
    
    let i;
    let x = document.getElementsByClassName("mySlides");
    
    
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  //next prev buttons

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


// header clicks
let logo = document.getElementById("logo")
let home = document.getElementById("home")
let developers = document.getElementById("developers")


let refreshPage = function refreshPage(){
  location.href = "logistic-companies.html"  
}
let goToHomaPage = function goToHomaPage(){
    location.href = 'index.html'
}
developers.addEventListener("click", refreshPage)
logo.addEventListener("click", goToHomaPage)
home.addEventListener("click", goToHomaPage)


// burger menu
function openMenu() {
  let x = document.getElementById("headerNavigation")
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    document.getElementsByClassName("body")[0].style.opacity = "0.5"
    document.getElementById("logo").style.opacity = "0.5"
  }
}
function closeMenu() {
  let x = document.getElementById("headerNavigation")
  if(x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none"
    document.getElementsByClassName("body")[0].style.opacity = "1"
    document.getElementById("logo").style.opacity = "1"


  }
}
 
