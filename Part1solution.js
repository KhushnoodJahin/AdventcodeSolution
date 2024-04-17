// Import the file system module
const fs = require('fs');

// Read the contents of the text file asynchronously
fs.readFile('number.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Split the data into an array of strings
    const entries = data.split('\n');

    // Variable to store the total calorie count
    let totalCalories = 0;

    // Variable to store the highest calorie count
    let highestCalorieCount = 0;

    // Iterate through each entry in the array
    for (let i = 0; i < entries.length; i++) {
        // Convert the entry to a number
        const calorieCount = parseInt(entries[i]);

        // If the calorie count is 0 or not a number, reset the total calorie count
        if (calorieCount === 0 || isNaN(calorieCount)) {
            if (totalCalories > highestCalorieCount) {
                highestCalorieCount = totalCalories;
            }
            totalCalories = 0;
        } else {
            // Add the calorie count to the total
            totalCalories += calorieCount;
        }
    }

    // Output the highest calorie count
    console.log("Highest Calorie Count:", highestCalorieCount);
});