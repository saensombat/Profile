window.addEventListener("scroll", function() {
    var element = document.getElementById("myElement");
    var scrollPosition = window.scrollY;
    console.log(scrollPosition)
    // กำหนดจุดที่ต้องการให้เปลี่ยนสี
    var targetPosition = 710;

    if (scrollPosition >= targetPosition) {
      element.style.color = "#f8b436";
    } else {
      element.style.color = "black";
    }
  });


var scrollButton = document.getElementById("scroll_about");
var content = document.getElementById("_about");

scrollButton.addEventListener("click", function() {
  content.scrollIntoView({ behavior: "smooth" });
});