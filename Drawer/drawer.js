class Drawer{
    drawGame(game, gameView){
        // let gameView = document.getElementById("game");
        while (gameView.hasChildNodes()) {
            gameView.removeChild(gameView.firstChild);
        }
        gameView.style.display = "initial";
        var charIndex = 97;
        for (let i = 0; i < game.rows; i++) {
            const row = document.createElement("ul");
            row.className = "row";
            const indexButton = document.createElement("button");
            const inputValue = String.fromCharCode(charIndex);
            const t = document.createTextNode(inputValue);
            indexButton.appendChild(t);
            indexButton.className = "circle";
            charIndex++;
            row.appendChild(indexButton);
            for (let j = 0; j < game.cols; j++){
                const button = document.createElement("button");
                const inputValue = game.board[i][j];
                const t = document.createTextNode(inputValue);
                button.appendChild(t);
                button.className = "cell";
                row.appendChild(button);
            }
            gameView.appendChild(row);
        }
    }
}