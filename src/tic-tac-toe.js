class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.marks = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.marks[rowIndex][colIndex];
    }

    noMoreTurns() {
        let cells = this.marks;
        return cells.every(x => x.every(y => y != null));
    }

    getWinner() {
        return this.winner;
    }

    checkDiagonal() {
        let cells = this.marks;
        return ((cells[1][1]!=null)&&(cells[0][0] == cells[1][1])&&(cells[1][1] == cells[2][2]))||((cells[1][1]!=null)&&(cells[2][0] == cells[1][1])&&(cells[1][1] == cells[0][2]));
    }

    checkRank(){
        let cells = this.marks;
        let w = false;
        for (let i = 0; i <= 2; i++)
            if (((cells[i][1]!=null)&&(cells[i][0] == cells[i][1])&&(cells[i][1] == cells[i][2]))||((cells[1][i]!=null)&&(cells[0][i] == cells[1][i])&&(cells[1][i] == cells[2][i]))){
            w = true;
        }
        return w;
    }

    isDraw() {
        return (this.noMoreTurns() && (this.getWinner() == null));
    }


    isFinished() {
        return (this.getWinner()!=null)||this.isDraw();
    }

    nextTurn(rowIndex, columnIndex) {
        let player = this.getCurrentPlayerSymbol();
        let cell = this.getFieldValue(rowIndex, columnIndex);

        if (cell == null) {
            this.marks[rowIndex][columnIndex] = player;
            if (this.checkDiagonal()||this.checkRank()){
                this.winner = player;
            }
            if (player == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }

        }
    }
}

module.exports = TicTacToe;
