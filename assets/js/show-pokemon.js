// var buttons = document.querySelectorAll(".moreInfoButton");

// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//       var elementId = button.getAttribute("data-element");
//       var x = document.getElementById(elementId);
//       if (x.style.display === "none") {
//        x.style.display = "block";
//        button.innerText = "Menos Info"
//       } else {
//         x.style.display = "none";
//         button.innerText = "Mais Info"
//       }
//     });
//   });


function showPage(elementId) {
    var x = document.getElementById(elementId);
    console.log(x)
    if (x.style.display === "none") {
     x.style.display = "block";
     moreInfoButton.value = "Less Info"
    } else {
      x.style.display = "none";
      moreInfoButton.value = "More Info"
    }
  }
