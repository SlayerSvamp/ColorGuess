var game = {
    max: 0
};

function start() {
    alertbox.setAttribute("hidden", null);
    gamebox.removeAttribute("hidden");
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
        e.onclick = () => guess(i);
        e.style = `background-color: ${color[i]}`;
        colors.appendChild(e);
    }
}

function end() {
    alertbox.removeAttribute("hidden");
    gamebox.setAttribute("hidden", null);
}

function guess(value) {
    if (game.correct == value) {
        game.score++;
        if (game.score > game.max)
            game.max = game.score;
        next();
    } else
        end();
}
let get_color = () => `rgb(${rand()}, ${rand()}, ${rand()})`;

let rand = () => Math.floor(Math.random() * 256);

start();