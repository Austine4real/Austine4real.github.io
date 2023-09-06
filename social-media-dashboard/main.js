function themeChange() {
    let lightChange = document.querySelector("#light-mode");
    let bodyChange = document.querySelector("body");
    let cardChange = document.querySelectorAll(".change-color");
  
    lightChange.addEventListener("change", function () {
      bodyChange.classList.toggle("bodyColorChange");
  
      for (i = 0; i < cardChange.length; i++) {
        cardChange[i].classList.toggle("cardColorChange");
      }
    });
  }
  themeChange();