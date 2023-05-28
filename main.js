window.addEventListener("scroll", function() {
    var element = document.getElementById("myElement");
    var scrollPosition = window.scrollY;
    console.log(scrollPosition)
    // กำหนดจุดที่ต้องการให้เปลี่ยนสี
    var targetPosition = 880;

    if (scrollPosition >= targetPosition) {
      element.style.color = "#f8b436";
    } else {
      element.style.color = "black";
    }
  });

  window.addEventListener("scroll", function() {
    var list = document.getElementById("myList");
    var linkElements = list.getElementsByTagName("a");
    var scrollPosition = window.scrollY;
  
    var targetPosition = 880;
  
    for (var i = 0; i < linkElements.length; i++) {
      var linkElement = linkElements[i];

      if (scrollPosition >= targetPosition) {
        linkElement.style.color = "#f8b436";
      } else  {
        linkElement.style.color = "black";
      }
    }
  });

var scrollButton = document.getElementById("scroll_about");
var content = document.getElementById("_about");

scrollButton.addEventListener("click", function() {
  content.scrollIntoView({ behavior: "smooth" });
});