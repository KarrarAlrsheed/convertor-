function reslut(){
const value  =document.getElementById("textBox").value
let reslut= 0;
const displayResult =document.getElementById("result");
const iraqiToUsd= document.getElementById("iraqiToUsd");
const UsdToIraqi = document.getElementById("UsdToIraqi");
 if (iraqiToUsd.checked ){

    reslut= Number(value *0.00076)
    displayResult.textContent=reslut.toFixed(2);
  
}
 else if (UsdToIraqi.checked ){
    reslut= Number(value *1.3)
    displayResult.textContent=reslut.toFixed(2);
 }
 else
 displayResult.textContent="you most choise";

 


}


