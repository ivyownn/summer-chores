// promiseVersion.js

// Helper function for sleeping simulation
function mightFallAsleep() {
  return Math.random() < 0.2; // 20% chance
}

// 1. Mow Yard
function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve(name);
    }, 2000);
  });
}

// 2. Weed Eat
function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mightFallAsleep()) {
        reject(`${name} fell asleep after mowing the yard.`);
      } else {
        console.log(`${name} finished using the weed eater.`);
        resolve(name);
      }
    }, 1500);
  });
}

// 3. Trim Hedges
function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mightFallAsleep()) {
        reject(`${name} fell asleep after weed eating the yard.`);
      } else {
        console.log(`${name} finished trimming the hedges.`);
        resolve(name);
      }
    }, 1000);
  });
}

// 4. Collect Wood
function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mightFallAsleep()) {
        reject(`${name} fell asleep after trimming the hedges.`);
      } else {
        console.log(`${name} finished collecting wood.`);
        resolve(name);
      }
    }, 2500);
  });
}

// 5. Water Garden
function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mightFallAsleep()) {
        reject(`${name} fell asleep after collecting wood.`);
      } else {
        console.log(`${name} finished watering the garden.`);
        resolve(name);
      }
    }, 500);
  });
}

// 6. doSummerChores (Promise chaining)
function doSummerChores(name) {
  mowYard(name)
    .then(weedEat)
    .then(trimHedges)
    .then(collectWood)
    .then(waterGarden)
    .then(() => {
      console.log(`${name} finished all their chores!`);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Run the routine
doSummerChores("Jordan");
