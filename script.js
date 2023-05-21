let body = document.body;
let world = document.getElementById("world")
let input = document.getElementById("keyinput")
let inventory = document.getElementById("inventory")
let layers = document.getElementsByClassName("layer")
let inventorygrid = document.getElementById("inventorygrid")
let player = document.getElementsByClassName("player")[0]
inventory.style.visibility = "hidden"


let chunks = 2;
let chunkblocks = 10;

for (let i = 0; i < 8; i++) {
    world.innerHTML += '<div class="layer"></div>'
}

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 20; j++) {
        layers[i].innerHTML += '<div class="block grass"></div>'
    }
    for (let j = 0; j < 20; j++) {
        
    }
}

for (let i = 0; i < 20; i++) {
    inventorygrid.innerHTML += '<div class="item"></div>';
}

let x = 0;
let y = 0;
let z = 0;

let stepSize = 20
let inJump = false;

input.addEventListener("keydown", function (board) {
    console.log(board.keyCode);
    if (board.keyCode === 73) {
        if (inventory.style.visibility == "hidden") inventory.style.visibility = "visible"
        else inventory.style.visibility = "hidden";
    }

    else if (board.keyCode === 68) {
        player.style.left = x + "px";
        x = x + stepSize;
    }

    else if (board.keyCode === 65) {
        player.style.left = x + "px";
        x = x - stepSize;
    }

    else if (board.keyCode === 87 && inJump == false) {
        inJump = true;
        player.style.animation = 'jump 0.5s linear';
        setTimeout(() => {
            player.style.animation = 'none';
            inJump = false;
        }, 500)



    }
})

input.addEventListener("blur", function () {
    input.focus()
})
