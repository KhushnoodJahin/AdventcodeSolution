
function calculateTotalPoints(cards) {
    let totalPoints = 0;

   
    for (const card of cards) {
        const [winningNumbers, yourNumbers] = card.split(" | ");
        const winningNumbersSet = new Set(winningNumbers.split(" ").map(Number));
        const yourNumbersArray = yourNumbers.split(" ").map(Number);

        let points = 0;
        let seenNumbers = new Set();

        
        for (const number of yourNumbersArray) {
            
            if (winningNumbersSet.has(number) && !seenNumbers.has(number)) {
                points++;
                seenNumbers.add(number);
            }
        }

       
        totalPoints += Math.pow(2, points) - 1;
    }

    return totalPoints;
}

// Puzzle input: List of scratchcards
const cards = [
    "41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    " 1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "31 18 13 56 72 | 74 77 10 23 35 67 36 11"
];


const totalPoints = calculateTotalPoints(cards);
console.log("Total points of the scratchcards:", totalPoints);
