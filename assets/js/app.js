
 
 function dClock(){
let digitalClock = document.getElementById("digitalClock");

let d = new Date();
console.log(d);

let hrs = d.getHours();
// console.log(hrs);

let min = d.getMinutes();
// console.log(min);

let sec = d.getSeconds();
// console.log(sec);

let session = "am"
 console.log(hrs, min, sec);
 
 if(hrs >= 12){
	 session = "pm"
 }
 if(hrs >= 12){
	 hrs = hrs-12
 }
 hrs =(hrs < 10) ? ('0'+ hrs) : hrs
 min = (min < 10) ? ('0' + min): min
 sec = (sec < 10 )?('0'+ sec) : sec
 
 
 
 let result = `${hrs} : ${min} : ${sec} ${session}`;
 console.log(hrs, min, sec);
 
 digitalClock.innerHTML = result;
 setTimeout(dClock, 1000);
 }
 dClock();
 
 