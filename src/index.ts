import intToRoman from "./intToRoman";

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

    if (uInputAsNum % 1 !== 0) {
        alert("Input must be an integer!");
        return;
    }

    updateOutput(intToRoman(uInputAsNum));

    numberInput.value = '';
};
app?.appendChild(submitButton);

const outputP = document.createElement("p");
app?.appendChild(outputP);
const updateOutput = (newOutput:string) => {
    outputP.innerHTML = newOutput;
}

const headline = document.createElement("h1");
headline.innerHTML = "Type an integer between 1 and 3999 to convert it into a roman number!";
app?.prepend(headline);

//styling
if (app) {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "100%";
    document.body.style.backgroundColor = "burlywood";
    app.style.margin = "2rem 4rem";
    app.style.display = "flex";
    app.style.flexDirection = "column";
    headline.style.fontSize = "18px";
    headline.style.textAlign = "center";
    numberInput.style.borderWidth = "0";
    numberInput.style.textAlign = "center";
    submitButton.style.borderWidth = "0";
    outputP.style.fontSize = "14px";
    outputP.style.textAlign = "center";
}