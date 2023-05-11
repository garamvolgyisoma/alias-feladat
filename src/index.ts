//import intToRoman from "./intToRoman";

const app = document.getElementById("app");

const numberInput = document.createElement("input");
numberInput.setAttribute("type", "text");
numberInput.setAttribute("data-testid", "numberInput");
    
app?.appendChild(numberInput);

const submitButton = document.createElement("button");
submitButton.setAttribute("data-testid", "submitButton");
submitButton.textContent = "Convert";
submitButton.onclick = () => {
    const userInput:string = numberInput.value.trim();
    if (isNaN(Number(userInput))) {
        alert("Invalid input!");
        return;
    }

    const uInputAsNum:number = Number(userInput);

    if (uInputAsNum < 1 || uInputAsNum > 3999) {
        alert("Input must be between 1 and 3999!");
        return;
    }

    //intToRoman(uInputAsNum);

    numberInput.value = '';
};
app?.appendChild(submitButton);
