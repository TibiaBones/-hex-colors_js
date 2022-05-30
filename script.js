let letters = "0123456789ABCDEF";
let codeOnDisplay = document.getElementById('hexColor');


function randomColor() {
    let color = "#";
    let hexCode = "";

    for (let i = 0; i < 6; i++) {
        hexCode += letters[(Math.floor(Math.random() * 16))];
    };

    color += hexCode;
    codeOnDisplay.textContent = hexCode;
    document.body.style.background = color;
}