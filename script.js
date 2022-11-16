
//add display and store numeric clicks
    const storage={
        toDo :()=>{return add(+storage.numberClicked,+storage.numberStored)},
        numberClicked:0,
        numberStored:0,
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
    display.textContent=storage.numberStored;
    displayTop.textContent=displayString.join("");
    console.log(storage);
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
    display.textContent = e.target.textContent;
})
//subtraction button
const minus =document.querySelector(".minus");
minus.addEventListener("click",e=>{
    display.textContent= e.target.textContent;
    numberClicked=""
    if(!(storage.numberStored)){
        storage.numberStored=storage.numberClicked;
    }
    storage.toDo = subtract;
    storage.numberClicked=""
    displayString.push("-")
    display.textContent = e.target.textContent;
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
    storage.numberClicked=""
    displayString.push("x")
    display.textContent = e.target.textContent;
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
    storage.numberClicked=""
    displayString.push(`\u00f7`);
    display.textContent = e.target.textContent;
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
    display.textContent = storage.numberStored;   
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
        storage.numberStored="0";
        storage.toDo=()=>{};
    }
//Operation function that calls the other functions
const operate = function(num1,num2,operator){
    return operator(num1,num2);
    }