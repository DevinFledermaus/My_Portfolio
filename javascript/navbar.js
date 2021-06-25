function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
  if (nav_icon.className == "fas fa-bars") {
    nav_icon.className = "fas fa-times";
  } else if (nav_icon.className == "fas fa-times") {
    nav_icon.className = "fas fa-bars";
  }
}

let nav_icon = document.querySelector(".fas");
