let player = "X";
let count = 0;
let flag = false;
let checkCondition = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
[1, 4, 7], [2, 5, 8], [3, 4, 5],
[6, 7, 8], [2, 4, 6]];
let gameState = ['', '', '', '', '', '', '', '', ''];
// console.log(win);

// for( i = 0; i < 8; i++){
//     console.log(checkCondition[i]);
// }

const table = document.getElementById('table')
// console.log(table)

table.addEventListener('click', (e) => {

    const id = e.target.id;
    // console.log(count);

    count++;
    addText(id);
});

function winner() {
    for (let i = 0; i < 8; i++) {
        var a = checkCondition[i][0];
        var b = checkCondition[i][1];
        var c = checkCondition[i][2];
        if (player == gameState[a] && player == gameState[b] && player == gameState[c]) {
            // console.log(document.getElementById('winner').innerHTML);
            document.getElementById('winner').innerText = `winner is ${player}`;
            flag = true;
        }



    }
}

//adding text in the box
function addText(id) {

    const it = document.getElementById(id)
    const index = it.id;
    // console.log(it.id);
    if (it.innerHTML == "" && flag == false) {
        it.innerHTML = player;
        gameState[index] = player;

        if (count >= 5) {
        // const win = document.getElementById('winner');
        console.log(count)
        winner();
        }

        if (!gameState.includes("") && count == 9 && flag == false)
            document.getElementById('winner').innerText = `Match draw`;

        player = player === 'X' ? 'O' : 'X';
    }
}