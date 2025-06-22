const msgBox = document.getElementById("msgBox");
const resetBtn = document.getElementById("resetBtn");
const indiBoxes = Array.from(document.getElementsByClassName("small--boxes"));
let userVal = 'X';

// Creating a Toggle Function

function toggle(userVal){
  return userVal === "X" ? "O" : "X";
}


// when clicked each box have 'O' or 'X'

indiBoxes.forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerHTML === "") {
            element.innerHTML = userVal;
            checkResult();
            userVal = toggle(userVal);
        }
    });
});

// resetFunc

resetBtn.addEventListener('click', () => {
    indiBoxes.forEach(e => {
        e.innerHTML = "";
        e.style.pointerEvents = "auto";
    });
    msgBox.innerHTML = "";
    userVal = "X";
});

// checkResult

function checkResult() {
    let flag = false;
    const win = [
        [0, 1, 2],
        [1, 4, 7],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    win.forEach(pattern => {
   
        const [a, b, c] = pattern;
        const valA = indiBoxes[a].innerHTML;
        const valB = indiBoxes[b].innerHTML;
        const valC = indiBoxes[c].innerHTML;

        if (valA && valA === valB && valB === valC) {
            msgBox.innerHTML = `${valB} won!`;
            indiBoxes.forEach(box => box.style.pointerEvents = "none");
            flag = true;
        }
    });

       if (!flag) {
        const isDraw = Array.from(indiBoxes).every(box => box.innerHTML !== "");
        msgBox.innerHTML = isDraw ? "Draw!" : "";
    }
}