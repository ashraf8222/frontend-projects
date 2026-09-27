let hours= document.querySelector("#hour h1");
let minutes= document.querySelector("#min h1");
let second= document.querySelector("#sec h1");
let ms= document.querySelector("#msec h1");
let start= document.querySelector("#start");
let stop= document.querySelector("#stop");
let reset= document.querySelector("#reset");
let id,time,runtime=0;

function calculateTime(){
    let reminder;
    const curtime= Date.now(); // fatch current time case-100016ms
    let timepassed= curtime-time; 
    // this give the last pause time if start is used after some time of stop (initial-100000  paused-105000 then resume time-115000 this will give 5032)
    

    runtime=timepassed;  //interval - 16ms

    //time calculation 
    let hour=Math.floor(timepassed/3600000); 
    reminder=timepassed%3600000; 
    let min=Math.floor(reminder/60000);
    reminder=reminder%60000;
    let sec=Math.floor(reminder/1000);
    reminder=reminder%1000;
    let millis=Math.floor(reminder/10);
    
    //adjusting time<10 to ("0"+time) as string
    hour<10?hour="0"+hour:hour=hour;
    min<10?min="0"+min:min=min;
    sec<10?sec="0"+sec:sec=sec;
    millis<10?millis="0"+millis:millis=millis;

    //html manipulation
    hours.innerHTML= hour;
    minutes.innerHTML= min;
    second.innerHTML= sec;
    ms.innerHTML= millis;
}

function startClock(){
    clearInterval(id);// prevents 2nd call of setInterval() only once executing at a time
    time=Date.now()-runtime; // starting time case 100000ms
    id=setInterval(calculateTime,16);
}
function pauseClock(){
    //clear the setinterval
    clearInterval(id);
}
function resetClock(){
    runtime=0;// prevent the previous elapsed
    clearInterval(id);
    hours.innerHTML= "00";
    minutes.innerHTML= "00";
    second.innerHTML= "00";
    ms.innerHTML= "00";
}
start.addEventListener("click",startClock);
stop.addEventListener("click",pauseClock);
reset.addEventListener("click",resetClock);
