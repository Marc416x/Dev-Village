const fs = require('fs');
const logStream = fs.createWriteStream('breakfast_logs.txt');

async function cookBreakfast(numberOfEggs, numberOfBread, numberOfTea, callback) {
  
    if (!isValidQuantity(numberOfEggs) || !isValidQuantity(numberOfBread) || !isValidQuantity(numberOfTea)) {
      callback(new Error('You cannot order more than 20 items'));
      return;
    }

    if (numberOfEggs === 0 && numberOfBread === 0 && numberOfTea === 0) {
        callback(new Error('Must Command atleast one item'));
        return
    }
  
    logStream.write("Cooking breakfast...\n");

    await cookitems('Egg', 3000, numberOfEggs, logStream);
    await cookitems('Bread', 2000, numberOfBread, logStream);
    await cookitems('Tea', 2000, numberOfTea, logStream);
    callback();
}

function isValidQuantity(quantity) {
    return Number.isInteger(quantity) && quantity >= 0 && quantity <= 20;
}
  
async function cookitems(item, time, quantity, logStream) {
    if (quantity === 0) {
        return
    }
    return new Promise ((resolve, reject) => {
        logStream.write(`Cooking ${quantity} ${item}...\n`);
        const startTime = new Date();
        let totaltime = time * quantity;

        setTimeout(function() {
            const endTime = new Date();
            const elapsedTime = (endTime - startTime) / 1000;
            logStream.write(item + " are cooked! (Time: " + elapsedTime + " seconds)\n");
            resolve();
        }, totaltime);
    })
}
  
cookBreakfast(0, 0, 1, (err) => {
    if (err) {
        logStream.write(err.toString())
    }
    console.log('Done, check breakfast log');
})