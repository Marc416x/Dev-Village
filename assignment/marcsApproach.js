import * as fs from 'fs'

function cookBreakfast(eggs, bread, tea, callback) {
  
  if (!isValidQuantity(eggs) && !isValidQuantity(bread) && !isValidQuantity(tea)) {
    callback(new Error('Invalid input! Quantity should be a positive integer between 1 and 20.'));
    return;
  }

  const logStream = fs.createWriteStream('breakfast_logs.txt');

  logStream.write("Cooking breakfast...\n");

  cookEggs(eggs, logStream, function() {
    cookBread(bread, logStream, function() {
      brewTea(tea, logStream, function() {
        logStream.write("Breakfast is ready!\n");
        logStream.end();
        callback();
      });
    });
  });
}

function isValidQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0 && quantity <= 20;
}

function cookEggs(quantity, logStream, callback) {
  logStream.write("Cooking " + quantity + " eggs...\n");
  const startTime = new Date();

  setTimeout(function() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;
    logStream.write("Eggs are cooked! (Time: " + elapsedTime + " seconds)\n");
    callback();
  }, quantity * 3000);
}

function cookBread(quantity, logStream, callback) {
  logStream.write("Toasting " + quantity + " slices of bread...\n");
  const startTime = new Date();

  setTimeout(function() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;
    logStream.write("Bread is toasted! (Time: " + elapsedTime + " seconds)\n");
    callback();
  }, quantity * 2000);
}

function brewTea(quantity, logStream, callback) {
  logStream.write("Brewing " + quantity + " cups of tea...\n");
  const startTime = new Date();

  setTimeout(function() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;
    logStream.write("Tea is ready! (Time: " + elapsedTime + " seconds)\n");
    callback();
  }, quantity * 1000);
}

// Example usage
cookBreakfast(3, 0, 2, function(err) {
  if (err){
    console.log("error cooking breakfast: ", err)
  } else console.log("Enjoy your breakfast!");
});
