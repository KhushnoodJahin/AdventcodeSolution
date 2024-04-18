
function isPossibleGame(game, redCount, greenCount, blueCount) {
    
    const subsets = game.split('; ');
    
    let redCubes = 0, greenCubes = 0, blueCubes = 0;
    
 
    for (const subset of subsets) {
        
        const cubes = subset.split(', ');
        
        
        for (const cube of cubes) {
            
            const [count, color] = cube.split(' ');
            
          
            if (color === 'red') redCubes += parseInt(count) || 0;
            else if (color === 'green') greenCubes += parseInt(count) || 0;
            else if (color === 'blue') blueCubes += parseInt(count) || 0;
        }
    }
    
   
    return redCubes <= redCount && greenCubes <= greenCount && blueCubes <= blueCount;
}


function sumPossibleGames(input, redCount, greenCount, blueCount) {
    
    let sum = 0;
    
    
    const games = input.split('\n');
    
   
    for (const game of games) {
        
        const match = game.match(/\d+/);
        if (!match) continue;
        const gameId = parseInt(match[0]);
        
      )
        const gameData = game.slice(game.indexOf(':') + 2);
        
        
        if (isPossibleGame(gameData, redCount, greenCount, blueCount)) {
          
            sum += gameId;
        }
    }
    
    
    return sum;
}


const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;


const redCount = 12;
const greenCount = 13;
const blueCount = 14;


const result = sumPossibleGames(input, redCount, greenCount, blueCount);
console.log("Sum of IDs of possible games:", result);

