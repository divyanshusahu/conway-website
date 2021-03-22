import React, { Component } from 'react';
import Patterns from './pattern2';
import './Conway.css';
import getPlayer from './audio/get-player'


let colorMap = [
    { primary: "#CACACA", secondary: "#282828", grid: "#323232" },
    { primary: "#F4A300", secondary: "#660004", grid: "#4D0003" },
    {
        primary: "#5EB200",
        secondary: "#004366", grid: "#00324D"
    },
    { primary: "#43004C", secondary: "#E6FFD7", grid: "#B6FF8B" },
];
//main component
class Conway extends Component {
    constructor(props) {
        super(props);
        //initially the game board will be filled randomly
        // var board = this.getRandomArray(50, 30);
        var board = [];
        this.state = {
            //300 - "fast" speed
            speed: 300,
            color: 0,
            canvasSize: {
                width: 550,
                height: 330
            },
            player: null,
            isPlayerSet: false,
            canvas: null,
            context: null,
            playing: false,
            //generations counter
            step: 0,
            //2d array to store values of the cells
            //0 is dead, 1 is newborn, 2 is older one
            board: board,
            //should we run draw() ?			
            shouldDraw: true,
            //should we call draw() recursively?
            shouldLoop: true,
            //buttons state, if true - button has .enabled class
            buttons: {
                run: true,
                clear: false,
                pause: false
            },
            //select option values			
            sizes: ["50x30", "70x50", "100x80"],
            speeds: ["slow", "medium", "fast"],
            timeoutMax: 700,
            timeoutMin: 20,
            patterns: [
                "random", "glider",
                "glider gun", "pulsar",
                "spaceship", "R-pentomino",
                "diehard", "unnamed", "clear board"],
            //currently selected pattern		
            activePattern: "random"
        };
        this.buffer = [];
    }

    //generate array of random figures
    getRandomArray(width, height) {
        var result = [];
        for (var i = 0; i < height; i++) {
            var temp = [];
            for (var j = 0; j < width; j++) {
                //0 or 2
                var n = Math.random() > 0.5 ? 2 : 0;
                temp.push(n);
            }
            result.push(temp);
        }
        return result;
    }

    //get array filled with 0
    getCleanArray(board) {
        var array = [];
        for (var i = 0; i < board.length; i++) {
            var row = [];
            for (var j = 0; j < board[0].length; j++) {
                row.push(0);
            }
            array.push(row);
        }
        return array;
    }


    //setting canvas and context state
    componentDidMount() {
        var canvas = document.getElementById(this.props.id);
        var ctx = canvas.getContext("2d");
        let boardD = this.selectSize(this.props.gridSize);
        let speed = this.selectSpeed(this.props.speed);
        boardD.board = this.selectPattern(boardD.board);
        this.setState({
            canvas: canvas,
            context: ctx,
            color: this.props.color,
            speed, ...boardD,
            shouldDraw: true
        }, () => { this.draw(); });
    }


    //draw empty board. At this point all the cells are 'dead'
    drawBoard() {
        var ctx = this.state.context;
        //cleaning board  		
        let colorInd = this.state.color;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, this.state.canvasSize.width,
            this.state.canvasSize.height);
        ctx.fillStyle = "#eee";
        ctx.fillRect(25, 25, this.state.canvasSize.width - 50,
            this.state.canvasSize.height - 50);


        //drawing grids
        ctx.fillStyle = colorMap[colorInd].grid;
        ctx.fillStyle = "#777";
        // ctx.strokeStyle = colorMap[colorInd].grid;
        ctx.fillRect(25, 5, this.state.canvasSize.width - 50, this.state.canvasSize.height - 10);
    }

    computeBuffer(buffer) {
        var nextBoard = [];
        for (var i = 0; i < buffer.length; i++)
            nextBoard.push(buffer[i].slice(0));
        let x = buffer.length, y = buffer[0].length;
        let canAddRow = buffer[buffer.length - 1].reduce((total, cur) => { return total || cur == 1 }, false);
        if (buffer.length - 2 >= 0)
            canAddRow = buffer[buffer.length - 2].reduce((total, cur) => { return total || cur == 1 }, canAddRow);
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                //analize neighbour cells
                var count = 0;
                if (buffer[i][j] == 1)
                    nextBoard[i][j] = 2;

                for (var m = i - 1; m <= i + 1; m++) {
                    for (var n = j - 1; n <= j + 1; n++) {
                        if (m === i && n === j) {
                            continue;
                        }

                        var row = m;
                        var col = n;
                        if ((0 <= row && row <= buffer.length - 1 &&
                            0 <= col && col <= buffer[0].length - 1) &&
                            buffer[row][col] > 0) {
                            count++;
                        } else if (row < 0 && col >= 0 && col <= buffer[0].length - 1) {
                            if (this.state.board[col][0] > 0) {
                                count++;
                            }

                        } else if (canAddRow && row > nextBoard.length - 1) {
                            nextBoard.push(Array(buffer[0].length));
                            nextBoard.push(Array(buffer[0].length));
                        }
                        // }
                    }
                }

                //the cell must die
                if (count < 2 || count > 3)
                    nextBoard[i][j] = 0;
                //if the cell is dead - make reincarnation!	          	
                else if (count == 3 && buffer[i][j] === 0) {
                    nextBoard[i][j] = 1;
                }
            }
        }
        return nextBoard;
    }
    //caller - string parameter - to identify where the function is called from
    draw(caller) {
        setTimeout(function () {
            let colorInd = this.state.color;
            //the game has stopped
            if (!this.state.shouldDraw)
                return;

            //draw the board
            this.drawBoard();

            var ctx = this.state.context;
            var board = this.state.board;

            //draw our cells 
            //0 - dead, 1 - 'yong', 2 - 'old'
            let _size = this.getXYSize.bind(this)()
            for (var i = 0; i < board.length; i++) {
                for (var j = 0; j < board[i].length; j++) {
                    var cell = board[i][j];
                    if (cell === 0) {
                        // continue;
                        ctx.fillStyle = colorMap[colorInd].secondary;
                    } else
                        ctx.fillStyle = colorMap[colorInd].primary;

                    ctx.fillRect(25.5 + j * _size.xs, 5.5 + i * _size.ys, _size.xs - 1, _size.ys - 1);
                    // var circle = new Path2D();
                    // circle.arc(25 + j * 10 + 5, 25 + i * 10 + 5, 4.5, 0, 2 * Math.PI);
                    // ctx.fill(circle);
                }
            }


            //in here we store next generation board
            var nextBoard = [];
            for (var i = 0; i < board.length; i++)
                nextBoard.push(board[i].slice(0));

            //how many 'alive' cells are in the board?
            let active = new Set();
            for (var i = 0; i < nextBoard.length; i++) {
                for (var j = 0; j < nextBoard[i].length; j++) {

                    // if (board[i][j] > 0)
                    //     aliveCells++;

                    //analize neighbour cells
                    var count = 0;
                    if (board[i][j] == 1)
                        nextBoard[i][j] = 2;

                    for (var m = i - 1; m <= i + 1; m++) {
                        for (var n = j - 1; n <= j + 1; n++) {
                            if (m === i && n === j) {
                                continue;
                            }

                            var row = m;
                            var col = n;
                            if (this.props.confined) {
                                if (m >= board.length)
                                    row = 0;
                                else if (m < 0)
                                    row = board.length - 1;

                                if (n >= board[0].length)
                                    col = 0;
                                else if (n < 0)
                                    col = board[0].length - 1;
                            }
                            if ((this.props.confined ||
                                (0 <= row && row <= board.length - 1 &&
                                    0 <= col && col <= board[0].length - 1)) &&
                                board[row][col] > 0) {
                                count++;
                            } else if (!this.props.confined && col < 0 &&
                                0 <= row && row <= board.length - 1) {
                                if (this.buffer.length == 0) {
                                    //no of rows of original board
                                    this.buffer.push(Array(board.length));
                                    this.buffer.push(Array(board.length));
                                }
                                if (this.buffer[0][row] > 0) {
                                    count++;
                                }

                            }
                            // }
                        }
                    }

                    //the cell must die
                    if (count < 2 || count > 3)
                        nextBoard[i][j] = 0;
                    //if the cell is dead - make reincarnation!	          	
                    else if (count == 3 && board[i][j] === 0) {
                        active.add(i * j);
                        // active.add((i / nextBoard[0].length) * (j / nextBoard.length));
                        nextBoard[i][j] = 1;
                    }
                }
            }
            // console.log(active)
            if (active.size > 0 && 0 < this.buffer.length && this.buffer.length < 50) {
                this.buffer = this.computeBuffer(this.buffer)
            }
            if (this.state.playing && this.state.player && active.size > 0) {
                // console.log(this.state.player)
                this.state.player(active, (this.state.speed / 1000) * 1.5)
            }


            //all the cells are 'dead', stop the game
            if (active.size == 0) {
                return;
            }

            //if the function called not from click handler - update state
            // only present when the shouldLoop is false
            if (caller != "handleCanvasClick")
                this.setState({ board: nextBoard, step: this.state.step + 1 });

            //should we run draw one more time?
            if (this.state.shouldLoop) {
                this.draw();
            }

        }.bind(this), this.state.speed);
        console.log(this.state.speed);

    }


    //select sizes onChange listener
    selectSize(size) {
        let _size = this.getXYSize.bind(this)()
        var width = _size.width;
        var height = _size.height;
        var rows = (height - 10) / _size.ys;
        var cols = (width - 50) / _size.xs;
        var board = [];
        for (var i = 0; i < rows; i++) {
            var temp = [];
            for (var j = 0; j < cols; j++) {
                temp.push(0);
            }
            board.push(temp);
        }
        return { board, canvasSize: { width, height } };

    }
    getXYSize() {
        let _size = this.props.xyNo.split('x')
        _size = _size.map((e) => parseInt(e));
        let dimensions = this.props.gridSize.split('x')
        dimensions = dimensions.map((e) => parseInt(e));
        let xs = (dimensions[0] * 10) / _size[0]
        let ys = (dimensions[1] * 10) / _size[1]
        var width = dimensions[0] * 10 + 50;
        var height = dimensions[1] * 10 + 10;
        return { xs, ys, width, height }
    }


    //select speed onChange listener
    selectSpeed(speed) {
        switch (speed) {
            case "fast":
                return 100;
            case "medium":
                return 300;
            case "slow":
                return 700;
        }
    }

    //select pattern onChange listener
    selectPattern(board) {
        //pause the game 
        this.setState({ shouldDraw: false, shouldLoop: false });
        var array = this.getCleanArray(board);;
        let r = [], temp = [];
        for (let i of this.props.pattern) {
            if (i == '.') {
                r.push(0);
            } else if (i == 'O') {
                r.push(1);
            } else {
                temp.push(r);
                r = [];
            }
        }
        var dRow = Math.floor((board.length - temp.length) / 2);
        var dCol = Math.floor((board[0].length - temp[0].length) / 2);
        for (var row = 0; row < temp.length; row++) {
            for (var col = 0; col < temp[0].length; col++) {
                // console.log(row + dRow, col + dCol, row, col)
                array[row + dRow][col + dCol] = temp[row][col];
            }
        }
        // }

        return array;
    }


    //run button onClick handler
    //start the game
    run() {
        this.setState({
            buttons: {
                run: true,
                clear: false,
                pause: false
            },
            shouldDraw: true,
            shouldLoop: true

        }, () => { this.draw(); });

    }

    //run button onClick handler
    //clear the board and reset the game
    clear() {
        let boardD = this.selectSize(this.props.gridSize);
        let initBoard = this.selectPattern(boardD.board);
        this.setState({
            step: 0,
            board: initBoard,
            buttons: {
                run: false,
                clear: true,
                pause: false
            },
            shouldDraw: true,
            shouldLoop: false,
            activePattern: "clear board"

        }, () => { this.draw() });
        this.buffer = [];
    }


    //pause button onClick handler
    pause() {
        this.setState({
            buttons: {
                run: false,
                clear: false,
                pause: true
            },
            shouldDraw: true,
            shouldLoop: false
        });
    }


    //to get mouse coordinates
    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect(), // abs. size of element
            scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
            scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

        return {
            x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
            y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
        }
    }


    handleCanvasClick(e) {
        //get mouse click coordinates
        var pos = this.getMousePos(this.state.canvas, e);
        let _size = this.getXYSize.bind(this)();
        var i = Math.floor((pos.y - 5) / _size.ys)
        var j = Math.floor((pos.x - 25) / _size.xs);
        //if the click event was on the board
        if ((j >= 0 && j < this.state.board[0].length) && (i >= 0 && i < this.state.board.length)) {
            //if the cell was 'dead' set the cell 'newborn' (0 to 1)
            if (!this.state.board[i][j]) {
                var newBoard = this.state.board.slice(0);
                newBoard[i][j] = 1;
                this.setState({ board: newBoard }, (() => {
                    if (!this.state.shouldLoop) this.draw("handleCanvasClick")
                }).bind(this));
            }
        }
    }
    handleChange(event) {
        let speed = this.state.timeoutMax - (event.target.value * (this.state.timeoutMax - this.state.timeoutMin)) / 100;
        this.setState({ speed });
    }
    setPlayer() {
        getPlayer().then(
            ((player) => this.setState({ player })).bind(this)
        )
    }
    motion() {
        if (this.state.shouldLoop) {
            this.pause()
        } else {
            this.run()
        }
        if (!this.state.isPlayerSet) {
            getPlayer().then(
                ((player) => this.setState({ player })).bind(this)
            )
            this.setState({ isPlayerSet: true })
        }
    }
    export() {
        let p = "";
        // console.log(this.state.board)
        for (let row of this.state.board) {
            let isNotEmpty = 0;
            let str_r = "";
            for (let c of row) {
                if (c > 0) {
                    str_r += 'O';
                    isNotEmpty += 1;
                } else if (c == 0) {
                    str_r += '.';
                }
            }
            if (isNotEmpty > 0)
                p += str_r + 'n';
        }
        console.log(p)
    }
    render() {
        var divWidth = { width: this.state.canvasSize.width + 2 + "px" };
        return (
            <div id="gameBox" style={divWidth} className="my-4  bg-white">
                <div style={{ padding: '5px 20px 10px', fontWeight: 'bold' }}>
                    <span style={{ color: '#777', fontWeight: 'bold' }}>Name: {this.props.name}</span>
                    <div style={{ float: 'right', marginRight: '3px' }}>
                        <button onClick={this.motion.bind(this)} style={{ padding: '2px' }}>
                            {this.state.shouldLoop ?

                                <i className="text-black fas fa-pause" /> :
                                <i className="text-black fas fa-play" />
                            }
                        </button>
                        <button style={{ padding: '2px' }}
                            onClick={(() => this.setState({ playing: !this.state.playing })).bind(this)}>
                            {this.state.playing ?

                                <i className="text-black fas fa-volume-up" /> :
                                <i className="text-black fas fa-volume-mute" />
                            }
                        </button>
                        <button style={{ padding: '2px' }}
                            onClick={this.clear.bind(this)}>
                            <i className="text-black fas fa-minus-circle" />
                        </button>

                    </div>
                </div>
                <canvas
                    id={this.props.id}
                    width={this.state.canvasSize.width}
                    height={this.state.canvasSize.height}
                    onClick={this.handleCanvasClick.bind(this)}
                >
                </canvas>
                <div style={{ padding: '5px 20px 10px', fontWeight: 'bold' }}>
                    <span style={{ color: '#777', fontWeight: 'bold' }}>Generation: {Math.max(this.state.step - 1, 0)}</span>
                    <div style={{ float: 'right', marginRight: '3px' }}>

                        <input type="range" min="1" max="100" value={((this.state.timeoutMax - this.state.speed) * 100) / (this.state.timeoutMax - this.state.timeoutMin)}
                            onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
                {/* <button onClick={this.export.bind(this)}>export</button> */}
            </div >
        );
    }
}



export default Conway;
