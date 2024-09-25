const output = document.querySelector(".output")

const wrapper = document.querySelector(".wrapper")

let operator = null; 
let heldNumber = null;
let result = null;
let secondNumber = null;


wrapper.addEventListener("click", (btn) => {

    const button = btn.target.innerHTML;
    let btnAccess = btn.target.classList;
    let display = output.textContent;

    const isButton = btn.target.nodeName === 'BUTTON';
    if (!isButton){
        return};
    
        if (output.textContent==="0" && btnAccess.contains("number")){
            output.textContent= button;
    }   else if (btnAccess.contains("number")){
            display = display + `${button}`;
            output.textContent= display;
    }   else if (btnAccess.contains("operator")){
            heldNumber = display;
            operator = button;
            output.textContent="0";
            console.log(operator)
    }   else if (btnAccess.contains("equals")){
            if (heldNumber && operator == "/"){
                secondNumber=output.textContent // struggling to figure out how to make repeated uses of the equals sign funcction correctly.
                heldNumber=Number(heldNumber)/Number(secondNumber)
                console.log(heldNumber, secondNumber)
                output.textContent=heldNumber
            } else if (heldNumber && operator == "+"){
                output.textContent=Number(heldNumber)+Number(display)
                console.log(heldNumber, display)
            }else if (heldNumber && operator == "-"){
                output.textContent=Number(heldNumber)-Number(display)
            }
    
        } 
})
    



