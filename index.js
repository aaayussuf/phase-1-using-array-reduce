// reducer.js

// Sample array of battery counts
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Reducer function to calculate the total batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

module.exports = { totalBatteries };


