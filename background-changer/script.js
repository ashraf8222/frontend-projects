let body = document.querySelector("body");
let colour = document.querySelectorAll(".colour");
colour[0].addEventListener("click", function () {
  body.style.backgroundColor = "purple";
});
colour[1].addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});
colour[2].addEventListener("click", function () {
  body.style.backgroundColor = "white";
});
colour[3].addEventListener("click", function () {
  body.style.backgroundColor = "green";
});
colour[4].addEventListener("click", function () {
  body.style.backgroundColor = "yellow";
});
colour[5].addEventListener("click", function () {
  body.style.backgroundColor = "red";
});
colour[6].addEventListener("click", function () {
  body.style.backgroundColor = "black";
});
colour[7].addEventListener("click", function () {
  let red, green, blue;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  //"format -rgb(255, 100, 50)"
  body.style.backgroundColor =
    "rgb" +
    "(" +
    String(red) +
    "," +
    " " +
    String(green) +
    "," +
    " " +
    String(blue) +
    ")";
  // body.style.backgroundColor = `rgb(${String(red)},${String(green)},${String(blue)})`
});
set;
