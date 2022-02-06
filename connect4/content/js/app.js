// player 1 vs player 2
let lap = 1;
let playerX = document.querySelector(".PlayerX");
let player0 = document.querySelector(".PlayerO");
let cases = document.querySelectorAll(".cases");
let pvp = document.querySelector("#pvp");
let pvcpu = document.querySelector("#pvcpu");

const winningCondition = [
    // horizontal
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    // verical
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [12, 20, 27, 34],
    [20, 27, 34, 41],
    // diagonal left
    [3, 11, 19, 27],
    [2, 10, 18, 26],
    [10, 18, 26, 34],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [14, 22, 30, 38],
    // diagonal right
    [20, 26, 32, 38],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [3, 9, 15, 21]
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
            setTimeout("cpu()", 1000);
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
        const d = cases[winningCondition[i][3]].innerHTML;
        if (a === b && b === c && c === d) {
            if (a === "X") {
                document.querySelector("#playerXwin").innerHTML = "<p>Player <span class='playerX'>X</span> Win</p>"
                roundWin = true;
                break;
            } else if (a === "O") {
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