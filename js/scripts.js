let logo = document.getElementById("logo")
let home = document.getElementById("home")
let developers = document.getElementById("developers")


let refreshPage = function refreshPage(){
    window.location.reload();
} 

let goToDeveloperPage = function goToDeveloperPage(){
    location.href = 'logistic-companies.html'
}
logo.addEventListener("click", refreshPage)
home.addEventListener("click", refreshPage)
developers.addEventListener("click", goToDeveloperPage)




//burger menu
function openMenu() {
    let x = document.getElementById("headerNavigation")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      document.getElementById("logo").style.opacity = "0.5"
      document.getElementById("sectionFirst").style.opacity = "0.5"
      document.getElementById("sectionSecond").style.opacity = "0.5"
    }
  }
  function closeMenu() {
    let x = document.getElementById("headerNavigation")
    if(x.style.display === "none"){
      x.style.display = "block";
    }else{
      x.style.display = "none"
      document.getElementById("logo").style.opacity = "1"
      document.getElementById("sectionFirst").style.opacity = "1"
      document.getElementById("sectionSecond").style.opacity = "1"

    }
  }

  // banner slider

  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 9 seconds
}
