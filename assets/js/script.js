import Game from "./Game.js";

let game = new Game();

game.makeMove(0);
game.makeMove(3);
game.makeMove(7);
game.makeMove(4);
game.makeMove(8);
game.makeMove(6);

console.log(game.board);
console.log(game.findWinningCombination());