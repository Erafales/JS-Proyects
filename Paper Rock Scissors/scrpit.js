// Juego simple de piedra papel o tijeras

const arrayMoves = ['Piedra', 'Papel', 'Tijeras']

const btnPiedra = document.getElementById('btn-1')
const btnPapel = document.getElementById('btn-2')
const btnTijera = document.getElementById('btn-3')

var userMove = ''
var machineMove = ''

btnPiedra.addEventListener("click", function() {
    userMove = document.getElementById('btn-1').value
    console.log('user selected: ' + userMove)
    startPlay();
});
btnPapel.addEventListener("click", function() { 
    userMove = document.getElementById('btn-2').value
    console.log('user selected: ' + userMove)
    startPlay();
});
btnTijera.addEventListener("click", function() {
    userMove = document.getElementById('btn-3').value
    console.log('user selected: ' + userMove)
    startPlay();
});

function startPlay() {
    machineMove = arrayMoves[Math.floor(Math.random() * 3)]
    console.log('machine selected: ' + machineMove)
    comparation(userMove, machineMove)
}

function comparation(userMove, machineMove) {
    console.log(userMove, machineMove)
    if (userMove === machineMove) {
        console.log('Empate');
    } else if (userMove === "Tijeras" && machineMove === 'Papel'){
        console.log('User wins');
    } else if (userMove === "Papel" && machineMove === 'Tijeras'){
        console.log('Machine wins');
    } else if (userMove === "Papel" && machineMove === 'Piedra'){
        console.log('User wins');
    } else if (userMove === "Papel" && machineMove === 'Tijeras'){
        console.log('Machine wins');
    } else if (userMove === "Piedra" && machineMove === 'Tijeras'){
        console.log('User wins');
    } else if (userMove === "Piedra" && machineMove === 'Papel'){
        console.log('Machine wins');
    }
}