const display = document.getElementByld('display');

function appendToDisplay(input) {
    displayvalue += input;
}

function clearDisplay() {
    display.value="";
}

function calculate() {

try{
    display.value= eval(display.value); 

}catch(error){
    display.value="Error";
}
}
