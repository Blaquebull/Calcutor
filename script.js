
//add display and store numeric clicks
    const storage={
        toDo :()=>{},
        numberClicked:"0",
        numberStored:"0",
    };
    let numberClicked="";
    let displayString=[];
    let answer =0;
    const display =document.querySelector(".display-bottom");
    const displayTop =document.querySelector(".display-top");

    const numberButton = Array.from(document.querySelectorAll(".num"));
    numberButton.forEach((btn)=>btn.addEventListener("click",e=>{
        displayString.push(e.target.textContent);
        storage.numberClicked =e.target.textContent;
     answer = operate(+storage.numberStored , +storage.numberClicked, storage.toDo);
    storage.numberStored=answer;
    display.textContent=answer;
    displayTop.textContent=displayString.join("");
    })
    );
//<--------------------------------------------------------->
//add function buttons 
//------------------------------------------------------------
//addition button
const plus =document.querySelector(".plus");
plus.addEventListener("click",e=>{
    //display.textContent= e.target.textContent;
    numberClicked=""
    if(!(storage.numberStored)){
        storage.numberStored=storage.numberClicked;
    }
    storage.toDo = add;
    storage.numberClicked=""
    displayString.push("+")
    console.log(displayString.join(""));
    display.textContent = e.target.textContent;
    console.log(storage);
})
//subtraction button
const minus =document.querySelector(".minus");
minus.addEventListener("click",e=>{
    display.textContent+= e.target.textContent;
    numberClicked=""
    if(!(storage.numberStored)){
        storage.numberStored=storage.numberClicked;
    }
    storage.toDo = subtract;
    console.log(storage);
})
//multipliction button
const times =document.querySelector(".multiply");
times.addEventListener("click",e=>{
    display.textContent+= e.target.textContent;
    numberClicked=""
    if(!(storage.numberStored)){
        storage.numberStored=storage.numberClicked;
    }
    storage.toDo = multiply;
    console.log(storage);
})
//division button
const over =document.querySelector(".divide");
over.addEventListener("click",e=>{
    display.textContent+= e.target.textContent;
    numberClicked=""
    if(!(storage.numberStored)){
        storage.numberStored=storage.numberClicked;
    }
    storage.toDo = divide;
    console.log(storage);
})
//percentage button
const percent =document.querySelector(".percent");
percent.addEventListener("click",e=>{
    display.textContent+= e.target.textContent;
    numberClicked=""
    storage.numberStored = storage.numberClicked;
    storage.numberClicked=(storage.numberClicked)/100;
    console.log(storage);
})
//clear button
const clear =document.querySelector(".clear");
clear.addEventListener("click",cleanSlate);
//Equal to button
const equalTo =document.querySelector(".Equal");
equalTo.addEventListener("click",()=>{
    let answer = operate(+storage.numberStored , +storage.numberClicked, storage.toDo);
    display.textContent = answer;
    numberClicked="";
    storage.numberStored =answer.toString();
    console.log(storage);
})

//basic function for button click 
const add =function(num1,num2){
    return num1 + num2;
    }
    
const subtract =function(num1,num2){
        return num1 - num2; 
    }
    
const divide =function(num1,num2){
        return num1 / num2;  
    }
    
const multiply =function(num1,num2){
        return num1 * num2; 
    }
    
function percentage(num){
        return num/100;   
    }
    
//clear function
 function cleanSlate(){
        answer=0;
        display.textContent= "";
        displayTop.textContent="";
        displayString.length =0;
        for(let prop in storage){
            delete storage[prop];
        }
        storage.numberClicked="0";
        storage.numberStored="0"
    }
//Operation function that calls the other functions
const operate = function(num1,num2,operator){
    return operator(num1,num2);
    }