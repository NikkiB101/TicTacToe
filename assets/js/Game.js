export default class Game{
    constructor(){
        this.turn= "X";
        this.board = new Array(9).fill(null);
    }


nextTurn() {
    this.turn = this.turn === "X" ? "O" : "X";
}

makeMove(i) {
    if (this.board[i]){
        return;
    }
    
    this.board[i] = this.turn;
    this.nextTurn();
}
}