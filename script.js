var game = { max: 0 };

function start() {
    game.score = 0;
    next();
}

function next() {
    let color = [get_color(), get_color(), get_color()];
    game.correct = Math.floor(Math.random() * 3);
    code.innerHTML = color[game.correct];
    score.innerHTML = game.score;
    maxscore.innerHTML = game.max;
    colors.innerHTML = "";
    for (let i in color) {
        let e = document.createElement("div");
        e.className = "color";
        e.onclick = () => guess(i);
        e.style = `background-color: ${color[i]}`;
        colors.appendChild(e);
    }
}

function guess(value) {
    if(game.correct == value)
    {
        game.score++;
        if (game.score > game.max)
            game.max = game.score;
        next();
    }
    else
        start();
}
let get_color = () => `rgb(${rand()}, ${rand()}, ${rand()})`;

let rand = () => Math.floor(Math.random() * 256);

start();