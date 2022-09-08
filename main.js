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


convertBtn.addEventListener('click', function(){
    let lengthString = `${numberEl.value} meters = ${(numberEl.value * 3.281).toFixed(3)} feet | ${numberEl.value} feet = ${(numberEl.value / 3.281).toFixed(3)} meters`
    lengthEl.textContent = lengthString
    let volumeString = `${numberEl.value} liters = ${(numberEl.value * 0.264).toFixed(3)} gallons | ${numberEl.value} gallons = ${(numberEl.value / 0.264).toFixed(3)} liters`
    volumeEl.textContent = volumeString
    let massString = `${numberEl.value} kilos = ${(numberEl.value * 2.204).toFixed(3)} pounds | ${numberEl.value} pounds = ${(numberEl.value / 2.204).toFixed(3)} kilos`
    massEl.textContent = massString
})