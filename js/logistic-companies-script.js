let logo = document.getElementById("logo")
let home = document.getElementById("home")
let developers = document.getElementById("developers")


let refreshPage = function refreshPage(){
    window.location.reload();
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
      document.getElementsByTagName("section")[0].style.opacity = "0.5"
      document.getElementById("logo").style.opacity = "0.5"
    }
  }
  function closeMenu() {
    let x = document.getElementById("headerNavigation")
    if(x.style.display === "none"){
      x.style.display = "block";
    }else{
      x.style.display = "none"
      document.getElementsByTagName("section")[0].style.opacity = "1"
      document.getElementById("logo").style.opacity = "1"
  
  
    }
  }


// all projects

  function allProjects() {
    let projectsContainer = document.getElementById("projectsContainer")
    let allProjectsList = document.getElementById("allProjectsList")
    if(allProjectsList.style.display === "flex"){
      allProjectsList.style.display = "none"
    }else{
      allProjectsList.style.display = "flex"
    }
    if(projectsContainer.style.display === "none"){
      projectsContainer.style.display = "flex"
    }else{
      projectsContainer.style.display = "none"
    }
  }




function productPage() {
  location.href = 'product-page.html'
}   
