//basic function for button click 
function add(num1,num2){
return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2; 
}

function divide(num1,num2){
    return num1 / num2;  
}

function multiply(num1,num2){
    return num1 * num2; 
}

function percentage(num){
    return num/100;   
}

function clear(){
    
}

function backspace(){
    
}
//Operation function that calls the other functions
function operate(num1,num2,operator){
return operator(num1,num2);
}
//add display and store numeric clicks
    const display =document.querySelector(".display");
    const button = Array.from(document.querySelectorAll(".num"));
    button.forEach((btn)=>btn.addEventListener("click",e=>{
        display.textContent+=e.target.textContent;
        const num1 = +display.textContent;
        console.log(num1);
    })
    );
