//set the key
const display = document.getElementById("display");
const keys = document.getElementById("keys");

//function to display() -:
function appendToDisplay(input){
    display.value += input;
}
//function to calculate -:
function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(e){
        display.value = "Error";
    }
}

//function to clearDisplay -:
function clearDisplay(){
    display.value = "";
}