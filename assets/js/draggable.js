var isDragging = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

$("#content").on("touchstart", function(event) {
  isDragging = true;
  initialX = event.touches[0].clientX - xOffset;
  initialY = event.touches[0].clientY - yOffset;
});

$("#content").on("touchmove", function(event) {
  if (isDragging) {
    event.preventDefault();
    currentX = event.touches[0].clientX - initialX;
    currentY = event.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, this);
  }
});

$("#content").on("touchend", function(event) {
  isDragging = false;
});

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// Code cho phần tử #playlist
var isDragging2 = false;
var currentX2;
var currentY2;
var initialX2;
var initialY2;
var xOffset2 = 0;
var yOffset2 = 0;

$("#playlist").on("touchstart", function(event) {
  isDragging2 = true;
  initialX2 = event.touches[0].clientX - xOffset2;
  initialY2 = event.touches[0].clientY - yOffset2;
});

$("#playlist").on("touchmove", function(event) {
  if (isDragging2) {
    event.preventDefault();
    currentX2 = event.touches[0].clientX - initialX2;
    currentY2 = event.touches[0].clientY - initialY2;

    xOffset2 = currentX2;
    yOffset2 = currentY2;

    setTranslate(currentX2, currentY2, this);
  }
});

$("#playlist").on("touchend", function(event) {
  isDragging2 = false;
});