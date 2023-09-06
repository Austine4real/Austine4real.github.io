let create= document.querySelector(".create")

let newDiv = document.createElement("div")
newDiv.className= "new-div"
newDiv.innerHTML= `<h1>HAPPY NEW YEAR</h1>`
create.appendChild(newDiv)

// const countDown=()=>{
let day = document.querySelector(".days h4")
let hours = document.querySelector(".hours h4")
let minute = document.querySelector(".minutes h4")
let seconds = document.querySelector(".seconds h4")

let newYear = `1 January 2023`

function countDown(){
  let currentDate = new Date()
  let presentdate = new Date(newYear)

  let millisecToXmax = (presentdate - currentDate)/1000;

  let dayRem = Math.floor(millisecToXmax / 3600 / 24)
  let hoursRem = Math.floor(millisecToXmax / 3600 ) % 24
  let minsRem = Math.floor(millisecToXmax / 60) % 60
  let secRem = Math.floor(millisecToXmax ) % 60
  
//   console.log("days, hours, minutes, seconds")

  day.innerHTML = dayRem
  hours.innerHTML = hoursRem
  minute.innerHTML = minsRem
  seconds.innerHTML = secRem
}
setInterval(countDown, 1000)


