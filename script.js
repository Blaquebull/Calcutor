let topDisplayArray=[];
let answer=0;
const storage = {
    numberStored:[0,0],
    numberNew:[0,0],
    toDow:(n)=>{return n*1},
}
let textStored='';
const topDisplay =document.querySelector(".display-top");
const bottomDisplay=document.querySelector(".display-bottom");
bottomDisplay.textContent="";
numbers=Array.from(document.querySelectorAll(".num"));
operationsButtons =Array.from(document.querySelectorAll(".op"));
//Add click events and action to numeric buttons
//--------------------------------------------------------------------------------------------------

numbers.forEach(number => {
    number.addEventListener("click",e=>{
        textStored += e.target.textContent;
        bottomDisplay.textContent=""
        storage.numberStored[0]=textStored;
         answer=operate(+storage.numberStored[0],+storage.numberNew[1],storage.toDow)
         bottomDisplay.textContent=textStored;
        topDisplayArray.push(e.target.textContent);
        topDisplay.textContent =topDisplayArray.join("");
        console.log(storage);
    })
    
 });
 //operations buttons
//--------------------------------------------------------------------------------------------------
operationsButtons.forEach(btn=>{
    btn.addEventListener("click",e=>{
        switch(true){
            case e.target.textContent === "+":
                textStored="";
                storage.numberNew[1]=answer;
                storage.toDow = add;
                topDisplayArray.push(e.target.textContent);
                topDisplay.textContent =topDisplayArray.join("");
                bottomDisplay.textContent="";
                bottomDisplay.textContent=answer;
                console.log(storage);
            break;

            case e.target.textContent === "-":
                textStored="";
                storage.numberNew[1]=answer;
                storage.toDow = subtract;
                topDisplayArray.push(e.target.textContent);
                topDisplay.textContent =topDisplayArray.join("");
                bottomDisplay.textContent=""
                bottomDisplay.textContent=answer;
            break;
            
            case e.target.textContent === "\u00F7":
                textStored="";
                storage.numberNew[1]=answer;;
                storage.toDow = divide;
                topDisplayArray.push(e.target.textContent);
                topDisplay.textContent =topDisplayArray.join("");
                bottomDisplay.textContent=""
                bottomDisplay.textContent=answer;
            break;

            case e.target.textContent === "x":
                textStored="";
                storage.numberNew[1]=answer;
                storage.toDow = multiply;
                topDisplayArray.push(e.target.textContent);
                topDisplay.textContent =topDisplayArray.join("");
                bottomDisplay.textContent=""
                bottomDisplay.textContent=answer;
            break;
    }
    })
})
//--------------------------------------------------------------------------------------------------
//equal to button
//--------------------------------------------------------------------------------------------------
const equalTo = document.querySelector(".Equal");
equalTo.addEventListener("click",()=>{
    answer=operate(+storage.numberStored[0],+storage.numberNew[1],storage.toDow);
    bottomDisplay.textContent="";
    bottomDisplay.textContent=answer;
})
//---------------------------------------------------------------------------------------------------
//clear button
//---------------------------------------------------------------------------------------------------
const clearBtn =document.querySelector(".clear");
clearBtn.addEventListener("click",()=>{
     topDisplayArray=[];
     answer=0;
    storage.numberStored=[0,0];
    storage.numberNew=[0,0];
    storage.toDow=(n)=>{return n*1};
topDisplay.textContent="";
bottomDisplay.textContent="";
});

//-------------------------------------------------------------------------------------------------------
//percentage button
//-----------------------------------------------------------------------------------------------------
const percentBtn =document.querySelector(".percent");
percentBtn.addEventListener("click",e=>{
    storage.numberStored[0]=percentage(storage.numberStored[0]);
    topDisplayArray.push(e.target.textContent);
    topDisplay.textContent =topDisplayArray.join("");
    answer=operate(+storage.numberStored[0],+storage.numberNew[1],storage.toDow);
    bottomDisplay.textContent="";
    bottomDisplay.textContent=answer;
    console.log(storage);
})
//------------------------------------------------------------------------------------------------------
//backspace button;
//-------------------------------------------------------------------------------------------------------
const backspaceBtn =document.querySelector(".back");
backspaceBtn.addEventListener("click",e=>{
    topDisplay.textContent =topDisplayArray.join("");
    bottomDisplay.textContent="";
    answer=0;
    storage.numberStored=[0,0];
    storage.toDow=(n)=>{return n*1};

});


//-------------------------------------------------------------------------------------------------------


const add =function(num1=0,num2=0){
    return num1 + num2;
    }
    
const subtract =function(num1=0,num2=0){
        return num2 - num1; 
    }
    
const divide =function(num1=1,num2=1){
        return num2 / num1;  
    }
    
const multiply =function(num1=1,num2=1){
        return num1 * num2; 
    }
    
function percentage(num=0){
        return num/100;   
    }
//Operation function that calls the other functions
const operate = function(num1,num2,operator =()=>{return null;}){
    
    return operator(num1,num2);
    }