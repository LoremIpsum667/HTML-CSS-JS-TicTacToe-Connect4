// player 1 vs player 2
let lap = 1;
let playerX = document.querySelector(".PlayerX");
let player0 = document.querySelector(".PlayerO");
let cases = document.querySelectorAll(".cases");
let pvp = document.querySelector("#pvp");
let pvcpu = document.querySelector("#pvcpu");

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.querySelector("#player").innerHTML = "<p>Player <span class='playerO'>O</span> turn</p>"




// pvp
function play(elem) {
    if (elem.innerHTML == "") {
        if (lap % 2 !== 0) {
            document.querySelector("#player").innerHTML = "<p>Player <span class='playerO'>O</span> turn</p>"
            elem.innerHTML = "X";
            lap++
        } else {
            document.querySelector("#player").innerHTML = "<p>Player <span class='playerX'>X</span> turn</p>"
            elem.innerHTML = "O";
            lap++
        }
        win()
        if (pvcpu.checked == true && lap % 2 === 0) {
            setTimeout("cpu()", 500);
            win()
        }



    }
}
// pvcpu
function cpu(elem) {
    if (elem.innerHTML == "") {
        if (lap % 2 !== 0) {
            document.querySelector("#player").innerHTML = "<p>Player <span class='playerO'>O</span> turn</p>"
            elem.innerHTML = "X";
            lap++
        } else {
            document.querySelector("#player").innerHTML = "<p>Player <span class='playerX'>X</span> turn</p>"
            elem.innerHTML = "O";
            lap++
        } if (lap % 2 === 0) {
            cpu()
        } win()



    }
}

function win() {
    let roundWin = false;
    for (let i = 0; i < winningCondition.length; i++) {
        const a = cases[winningCondition[i][0]].innerHTML;
        const b = cases[winningCondition[i][1]].innerHTML;
        const c = cases[winningCondition[i][2]].innerHTML;
        console.log(cases[0].innerHTML)
        if (a === b && b === c) {
            if (a === "X") {
                console.log("gagné");
                document.querySelector("#playerXwin").innerHTML = "<p>Player <span class='playerX'>X</span> Win</p>"
                roundWin = true;
                break;
            } else if (a === "O") {
                console.log("perdu");
                document.querySelector("#playerOwin").innerHTML = "<p>Player <span class='playerO'>O</span> Win</p>"
                roundWin = true;
                break;
            } else if (lap == 10) {
                document.querySelector("#Tie").innerHTML = "<p>Tie</p>"
                break;
            }

        }


    }
}

// player 1 vs cpu
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cpu() {
    let array = [];
    for (let j = 0; j < cases.length; j++) {
        if (cases[j].innerHTML == "") {
            array.push(j);
        }
    }
    let random = getRandom(0, array.length - 1)
    console.log(random);
    cases[array[random]].click()

}