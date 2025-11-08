const textBox = document.getElementById("textBox");
const toFahrenhite = document.getElementById("toFahrenhite");
const toCelsius = document.getElementById("toCelsius");
const convertedTemp = document.getElementById("convertedTemp");
let temp;

function convert(){
    if(toFahrenhite.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32 ;
        convertedTemp.textContent = temp.toFixed(2) +"°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32)*(5/9) ;
        convertedTemp.textContent = temp.toFixed(2) +"°C";
    }
    else{
        convertedTemp.textContent= "Select a unit..!"
    }
}