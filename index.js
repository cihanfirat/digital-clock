let hrs = document.getElementById("hours")
let min = document.getElementById("minutes")
let sec = document.getElementById("seconds")

setInterval(()=>{
let currentTime = new Date();  /*  Todays Date*/
hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours(); /*Get Today's hours-- inline if hours <10 then put 0 ex: 2 => 02 for printing in two digits */
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();/*Get Today's minutes -- inline if minutes <10 then put 0 ex: 2 => 02 for printing in two digits */
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();/*Get Today's seconds inline if seconds <10 then put 0 ex: 2 => 02 for printing in two digits */
},1000) /* Execute this every 1000 ms = 1 second*/
