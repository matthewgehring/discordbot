module.exports = class ConnectFour{
    constructor(){
        this.red = '🔴';
        this.empty = '⚪';
        this.blue = '🔵';
        this.board = [[],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []]
    }

    newGame(){
        for(let idx=0; idx<7; idx++){
            for(let idy=0; idy<7;idy++){
                this.board[idx].push(this.empty);
            }
        }
    }

    boardToString(){
        this.rotate();
        let string = 'A    B    C    D    E    F    G\r\n';
        for(let idx=0; idx<7; idx++){
            for(let idy=0; idy<7;idy++){
                string += this.board[idx][idy]
            }
            string += '\r\n'
        }
        return string;
    }

    rotate(){
        let matrix = this.board;
        //console.log( matrix.join('\r\n').replace(/[,]/g, ''));
        matrix = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
        //console.log(matrix.join('\r\n').replace(/[,]/g, ''));
        this.board = matrix;
    }
}
