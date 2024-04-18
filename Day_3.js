
function isPartNumber(char) {
    return !isNaN(parseInt(char));
}


function sumPartNumbers(engineSchematic) {
    let sum = 0;
    const rows = engineSchematic.length;
    const cols = engineSchematic[0].length;

    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
           
            if (isPartNumber(engineSchematic[i][j])) {
                sum += parseInt(engineSchematic[i][j]);

                
                for (const [dx, dy] of directions) {
                    const ni = i + dx;
                    const nj = j + dy;

                    
                    if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && isPartNumber(engineSchematic[ni][nj])) {
                        sum += parseInt(engineSchematic[ni][nj]);
                    }
                }
            }
        }
    }

    return sum;
}


const engineSchematic = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598.."
];


const result = sumPartNumbers(engineSchematic);
console.log("Sum of all part numbers:", result);
