const output = document.querySelector(".output")

const wrapper = document.querySelector(".wrapper")

let operator = null; 
let firstNumber = null;
let result = null;
let secondNumber = null;


wrapper.addEventListener("click", (btn) => {

    const button = btn.target.innerHTML;
    let btnAccess = btn.target.classList
    let btnAccessNumber = btn.target.classList.contains("number");
    let btnAccessOperator = btn.target.classList.contains("operator");
    let display = output.textContent;

    const isButton = btn.target.nodeName === 'BUTTON';
    if (!isButton){
        return;

    } else if (btnAccessNumber && firstNumber==null){ 
        output.textContent=button;                  //* changes display from a 0 to the first clicked number and stores that number
        firstNumber= output.textContent;  
       
    } else if (btnAccess.contains("decimal")){
        if (String(output.textContent).includes(".")){  //checks to see if there is a demcimal point and adds one if not
            return;
        } else {
             display = display + `${button}`;
             output.textContent = display
        }

    }else if (btnAccess.contains("percent")){
        firstNumber= display;               //* divide display by 100
        firstNumber=Number(firstNumber)/100;
        if (String(firstNumber).length>8){
            firstNumber=firstNumber.toExponential(7)
        }output.textContent=firstNumber;

    } else if (btnAccess.contains("negative")){
        display = -output.textContent;       //* Make number negative
        output.textContent=display;

    } else if (btnAccess.contains("clear")){
        firstNumber=null;                  //*resets calculator
        secondNumber=null;
        operator=null;
        result=null;
        output.textContent=0

    } else if (btnAccessNumber && operator==null){
            if (String(firstNumber.length)>8){    //* concatinates the clicked number onto the end of the display
                return};
        firstNumber= display + `${button}`;                         
        output.textContent=firstNumber; 

    } else if (btnAccessNumber && secondNumber!=null && operator!=null){
        if (String(secondNumber.length)>8){                           //*stores second number and reloads it to the output
            return};
        secondNumber= display + `${button}`;                        
        output.textContent=secondNumber;   

    }else if (btnAccessOperator && firstNumber!=null){
        operator= button;                            //* stores the requested operator
        firstNumber= display ;                                    
        output.textContent=0;

    }else if (btnAccessNumber  && operator!=null){ 
        output.textContent=button;                //* changes display from a 0 to the first clicked number
        secondNumber= output.textContent; 

    }else if (firstNumber && secondNumber && operator =="/" && btnAccess.contains("equals")){
        result = Number(firstNumber) / Number(secondNumber);                             //* evaluates the division equation
        if (secondNumber==0){
            output.textContent = "Why U Do Dat?";
            firstNumber=null;                  //divide by 0 message
            secondNumber=null;
            operator=null;
            result=null;
            return;
        } else if(String(result).length>8)
            {result= result.toExponential(8);  
            output.textContent = result;
            firstNumber=result;                               
        }output.textContent = result;
        firstNumber=result;

    }else if (firstNumber && secondNumber && operator =="-" && btnAccess.contains("equals")){
        result = Number(firstNumber) - Number(secondNumber);                                //* evaluates the subtraction equation
        if(String(result).length>8)
            {result= result.toExponential(8);                                 
        }output.textContent = result;
        firstNumber=result;

    }else if (firstNumber && secondNumber && operator =="*" && btnAccess.contains("equals")){
        result = Number(firstNumber) * Number(secondNumber);                                  //* evaluates the multiplication equation
        if(String(result).length>8)
            {result= result.toExponential(8);                                 
        }output.textContent = result;
        firstNumber=result;

    } else if (firstNumber && secondNumber && operator =="+" && btnAccess.contains("equals")){
        result = Number(firstNumber) + Number(secondNumber);            //* evaluates the addition equation
        if(String(result).length>8)
            {result= result.toExponential(8);                                 
        }output.textContent = result;
        firstNumber=result;
    }
})
    



