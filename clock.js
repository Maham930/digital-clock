function(){

var dd=document.getElementsByClassName('Day');
var hh=document.getElementById('hours');
var mm=document.getElementById("minutes");
var ss=document.getElementById('second');



var h = new Date();
var g = h.getHours()
console.log(g);

 hh.innerText = g
console.log();
 
var m = h.getMinutes();
console.log(m);

mm.innerText = m

var t = h.getSeconds();
console.log(t);

ss.innerText = t

updateclock()
setInterval(updateclock,1000);

