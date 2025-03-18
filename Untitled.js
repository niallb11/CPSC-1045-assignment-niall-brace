const canvas = document.getElementById("checkersCanvas");
        const ctx = canvas.getContext("2d");
        const squareSize = 100;

        // Step 2: Create the Board Array
        const board = [
            ["red", "", "red", "", "red", "", "red", ""],
            ["", "red", "", "red", "", "red", "", "red"],
            ["red", "", "red", "", "red", "", "red", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "gray", "", "gray", "", "gray", "", "gray"],
            ["gray", "", "gray", "", "gray", "", "gray", ""],
            ["", "gray", "", "gray", "", "gray", "", "gray"]
        ];

        // Step 3: Draw the Board
        function drawBoard() {
            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    ctx.fillStyle = (row + col) % 2 === 0 ? "white" : "black";
                    ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
                }
            }
        }

        // Step 4: Draw the Pieces
        function drawPieces() {
            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    if (board[row][col] !== "") {
                        ctx.beginPath();
                        ctx.arc(col * squareSize + squareSize / 2, row * squareSize + squareSize / 2, 35, 0, Math.PI * 2);
                        ctx.fillStyle = board[row][col];
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }
        }

        // Step 5: Load the board when the page loads
        window.onload = function() {
            drawBoard();
            drawPieces();
        };

        // Step 6: Handle Canvas Clicks
        canvas.addEventListener("click", function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const col = Math.floor(x / squareSize);
            const row = Math.floor(y / squareSize);

            console.log("Clicked on row:", row, "column:", col);
            alert(board[row][col]);
        });