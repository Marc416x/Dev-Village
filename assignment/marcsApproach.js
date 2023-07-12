const fs = require('fs');
const logStream = fs.createWriteStream('breakfast_log.txt')

function cookBreakfast(eggs, bread, tea, callback) {
    if (!isValidQuantity(eggs) || !isValidQuantity(bread) || !isValidQuantity(tea)) {
      callback(new Error('Invalid input! Quantity should be a positive integer between 0 and 20.'));
      return;
    }

    logStream.write("Cooking breakfast...\n");

    cookItem('eggs', 3000, eggs, logStream, function() {
      cookItem('bread', 2000, bread, logStream, function() {
        cookItem('tea', 2000, tea, logStream, function() {
          callback();
        });
      });
    });
}
  
function isValidQuantity(quantity) {
    return Number.isInteger(quantity) && quantity >= 1 && quantity <= 20;
}
  
function cookItem(item, time, quantity, logStream, callback) {
    logStream.write("Cooking " + quantity + " " + item + "...\n");
    let totaltime = quantity * time;
    const startTime = new Date();
  
    setTimeout(function() {
      const endTime = new Date();
      const elapsedTime = (endTime - startTime) / 1000;
      logStream.write(item.toUpperCase() + " is ready! (Time: " + elapsedTime + " seconds)\n");
      callback();
    }, totaltime);
}

cookBreakfast(5, 1, 3, (err)=> {
    if (err) {
        logStream.write(err.toString());
        console.log(err);
    } else { 
        console.log('Done, check breakfast log');
    }
});