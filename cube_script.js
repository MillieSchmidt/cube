const colors = ['red', 'limegreen', 'lightblue', 'orange', 'white', 'gold', 'purple'];
const cells = Object.values(document.querySelectorAll('.cube-cell'));
let rowOne = false;
let rowTwo = false;
let rowThree = false;

for (let i = 0; i < cells.length; i++) {
    let random = Math.floor(Math.random() * colors.length);
    cells[i].style.backgroundColor = colors[random];
}

if (cells[0].style.backgroundColor == cells[1].style.backgroundColor && cells[0].style.backgroundColor == cells[2].style.backgroundColor) {
    rowOne = true;
}

if (cells[3].style.backgroundColor == cells[4].style.backgroundColor && cells[3].style.backgroundColor == cells[5].style.backgroundColor) {
    rowTwo = true;
}

if (cells[6].style.backgroundColor == cells[7].style.backgroundColor && cells[6].style.backgroundColor == cells[8].style.backgroundColor) {
    rowThree = true;
}

if (rowOne == true && rowTwo == true && rowThree == true) {
    win();
}

cells[0].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[0].style.backgroundColor = colors[random];

    if (cells[0].style.backgroundColor == cells[1].style.backgroundColor && cells[0].style.backgroundColor == cells[2].style.backgroundColor) {
        rowOne = true;
    } else {
        rowOne = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[1].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[1].style.backgroundColor = colors[random];

    if (cells[0].style.backgroundColor == cells[1].style.backgroundColor && cells[0].style.backgroundColor == cells[2].style.backgroundColor) {
        rowOne = true;
    } else {
        rowOne = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[2].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[2].style.backgroundColor = colors[random];

    if (cells[0].style.backgroundColor == cells[1].style.backgroundColor && cells[0].style.backgroundColor == cells[2].style.backgroundColor) {
        rowOne = true;
    } else {
        rowOne = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[3].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[3].style.backgroundColor = colors[random];

    if (cells[3].style.backgroundColor == cells[4].style.backgroundColor && cells[3].style.backgroundColor == cells[5].style.backgroundColor) {
        rowTwo = true;
    } else {
        rowTwo = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[4].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[4].style.backgroundColor = colors[random];

    if (cells[3].style.backgroundColor == cells[4].style.backgroundColor && cells[3].style.backgroundColor == cells[5].style.backgroundColor) {
        rowTwo = true;
    } else {
        rowTwo = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[5].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[5].style.backgroundColor = colors[random];

    if (cells[3].style.backgroundColor == cells[4].style.backgroundColor && cells[3].style.backgroundColor == cells[5].style.backgroundColor) {
        rowTwo = true;
    } else {
        rowTwo = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[6].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[6].style.backgroundColor = colors[random];

    if (cells[6].style.backgroundColor == cells[7].style.backgroundColor && cells[6].style.backgroundColor == cells[8].style.backgroundColor) {
        rowThree = true;
    } else {
        rowThree = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[7].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[7].style.backgroundColor = colors[random];

    if (cells[6].style.backgroundColor == cells[7].style.backgroundColor && cells[6].style.backgroundColor == cells[8].style.backgroundColor) {
        rowThree = true;
    } else {
        rowThree = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

cells[8].addEventListener('touchend', function() {
    let random = Math.floor(Math.random() * colors.length);
    cells[8].style.backgroundColor = colors[random];

    if (cells[6].style.backgroundColor == cells[7].style.backgroundColor && cells[6].style.backgroundColor == cells[8].style.backgroundColor) {
        rowThree = true;
    } else {
        rowThree = false;
    }

    if (rowOne == true && rowTwo == true && rowThree == true) {
        win();
    }
});

function win() {
    document.querySelector('.page-wrapper').style.animation = 'moveRight 8s ease-in forwards';
    document.querySelector('.cube').style.pointerEvents = 'none';
    rowOne = false;
    rowTwo = false;
    rowThree = false;
}

document.querySelector('button').addEventListener('click', function() {
    location.reload();
})