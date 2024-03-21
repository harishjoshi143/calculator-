let result = document.getElementById("display");
let display = document.getElementById("Display");

function Display(value){
    result.value += value;
}

function clearDisplay(){
    result.value = "";
}

function del(){
    result.value = result.value.slice(0,-1)
}

function calculate(){
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = "error"
    }
}
