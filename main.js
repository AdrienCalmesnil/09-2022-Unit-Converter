/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn =  document.getElementById('convert-btn')
let numberEl = document.getElementById('number-el')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')
const darkBtn = document.getElementById('dark-btn')


convertBtn.addEventListener('click', function(){
    let lengthString = `${numberEl.value} meters = ${(numberEl.value * 3.281).toFixed(3)} feet | ${numberEl.value} feet = ${(numberEl.value / 3.281).toFixed(3)} meters`
    lengthEl.textContent = lengthString
    let volumeString = `${numberEl.value} liters = ${(numberEl.value * 0.264).toFixed(3)} gallons | ${numberEl.value} gallons = ${(numberEl.value / 0.264).toFixed(3)} liters`
    volumeEl.textContent = volumeString
    let massString = `${numberEl.value} kilos = ${(numberEl.value * 2.204).toFixed(3)} pounds | ${numberEl.value} pounds = ${(numberEl.value / 2.204).toFixed(3)} kilos`
    massEl.textContent = massString
})



// DARK MODE FUNCTION
let x = document.getElementsByClassName('box-switch')
let y = document.getElementsByClassName('title-switch')
let z = document.getElementsByClassName('p-switch')

darkBtn.addEventListener('click', function(){
    if(document.body.style.background === "white"){
        document.body.style.background = "radial-gradient(circle, rgba(105,67,255,1) 0%, rgba(34,32,41,1) 61%, rgba(34,32,41,1) 100%)"
        document.getElementById('converters-switch').style.backgroundColor = "#1F2937"

        for(let i = 0; i < x.length; i++){
            x[i].style.backgroundColor = "#273549"
            y[i].style.color = "#CCC1FF"
            z[i].style.color = "#fff"
        }
        
    }else{
        document.body.style.background = "white"
        document.getElementById('converters-switch').style.backgroundColor = "#f4f4f4"
        
        for(let i = 0; i < x.length; i++){
            x[i].style.backgroundColor = "#fff"
            y[i].style.color = "#5A537B"
            z[i].style.color = "#353535"
        }

    }
})