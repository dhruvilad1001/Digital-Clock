let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let hours=document.getElementById("hrs")
let minuets=document.getElementById("min")
let seconds=document.getElementById("sec")
let date=document.getElementById("date")
let month=document.getElementById("mon")
let day=document.getElementById("day")
let year=document.getElementById("year")
let ampm=document.getElementById("am-pm")

setInterval(() => {
let time=new Date
hours.innerHTML=(time.getHours()<10?"0":"") + time.getHours()
minuets.innerHTML=(time.getMinutes()<10?"0":"") + time.getMinutes()
seconds.innerHTML=(time.getSeconds()<10?"0":"") + time.getSeconds()
date.innerHTML=time.getDate()
month.innerHTML=months[time.getMonth()]
day.innerHTML=days[time.getDay()]
year.innerHTML=time.getFullYear()
ampm.innerHTML=time.getHours()>=12?"PM":"AM"
},1000);