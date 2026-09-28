let hours = document.querySelector(".hour");
let minutes = document.querySelector(".min");
let second = document.querySelector(".sec");

function updateClock() {
  const obj = new Date();
  let h = obj.getHours();
  let m = obj.getMinutes();
  let s = obj.getSeconds();

  //checking time<10 or not
  h < 10 ? (h = "0" + h) : (h = h);
  m < 10 ? (m = "0" + m) : (m = m);
  s < 10 ? (s = "0" + s) : (s = s);

  hours.innerHTML = h;
  minutes.innerHTML = m;
  second.innerHTML = s;
}
//for first time load
updateClock();
setInterval(updateClock, 1000);
