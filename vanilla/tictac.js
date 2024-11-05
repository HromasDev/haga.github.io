let map = ['', '', '', '', '', '', '', '', '']
let roles = ['X', 'O']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let currentrole = roles[getRandomInt(2)]

let botrole;

if (currentrole == 'O') botrole = 'X';
else botrole = 'O'


console.log('Ваша роль ' + currentrole)
console.log('Роль бота ' + botrole)

let buttons = document.getElementsByClassName('button');

function result() {
    if (buttons[0].value == currentrole && buttons[1].value == currentrole && buttons[2].value == currentrole || buttons[3].value == currentrole && buttons[4].value == currentrole && buttons[5].value == currentrole || buttons[6].value == currentrole && buttons[7].value == currentrole && buttons[8].value == currentrole || buttons[0].value == currentrole && buttons[3].value == currentrole && buttons[6].value == currentrole || buttons[1].value == currentrole && buttons[4].value == currentrole && buttons[7].value == currentrole || buttons[2].value == currentrole && buttons[5].value == currentrole && buttons[8].value == currentrole || buttons[0].value == currentrole && buttons[4].value == currentrole && buttons[8].value == currentrole || buttons[2].value == currentrole && buttons[4].value == currentrole && buttons[6].value == currentrole) {
        alert('Ты победил')
        return
    }

    else if (buttons[0].value == botrole && buttons[1].value == botrole && buttons[2].value == botrole || buttons[3].value == botrole && buttons[4].value == botrole && buttons[5].value == botrole || buttons[6].value == botrole && buttons[7].value == botrole && buttons[8].value == botrole || buttons[0].value == botrole && buttons[3].value == botrole && buttons[6].value == botrole || buttons[1].value == botrole && buttons[4].value == botrole && buttons[7].value == botrole || buttons[2].value == botrole && buttons[5].value == botrole && buttons[8].value == botrole || buttons[0].value == botrole && buttons[4].value == botrole && buttons[8].value == botrole || buttons[2].value == botrole && buttons[4].value == botrole && buttons[6].value == botrole) {
        alert('Ты проиграл')
        return
    }
}

function push1() {
    let botstep = null;

    while (botstep == null || botstep == 0 || map[botstep] !== '') botstep = getRandomInt(9);

    if (map[0] == 0) {
        document.getElementsByClassName('button')[0].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[0] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push2() {
    let botstep = null;

    while (botstep == null || botstep == 1 || map[botstep] !== '') botstep = getRandomInt(9);

    if (map[1] == 0) {
        document.getElementsByClassName('button')[1].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[1] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push3() {
    let botstep = null;

    while (botstep == null || botstep == 2 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[2] == 0) {
        document.getElementsByClassName('button')[2].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[2] = currentrole
        map[botstep] = botrole
    }

    console.log(map)
    result()
}

function push4() {
    let botstep = null;

    while (botstep == null || botstep == 3 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[3] == 0) {
        document.getElementsByClassName('button')[3].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[3] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push5() {
    let botstep = null;

    while (botstep == null || botstep == 4 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[4] == 0) {
        document.getElementsByClassName('button')[4].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[4] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push6() {
    let botstep = null;

    while (botstep == null || botstep == 5 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[5] == 0) {
        document.getElementsByClassName('button')[5].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[5] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push7() {
    let botstep = null;

    while (botstep == null || botstep == 6 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[6] == 0) {
        document.getElementsByClassName('button')[6].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[6] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push8() {
    let botstep = null;

    while (botstep == null || botstep == 7 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[7] == 0) {
        document.getElementsByClassName('button')[7].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[7] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}

function push9() {
    let botstep = null;

    while (botstep == null || botstep == 8 || map[botstep] !== '') botstep = getRandomInt(9);
    if (map[8] == 0) {
        document.getElementsByClassName('button')[8].value = currentrole;
        document.getElementsByClassName('button')[botstep].value = botrole;

        map[8] = currentrole
        map[botstep] = botrole
    }
    console.log(map)
    result()
}
