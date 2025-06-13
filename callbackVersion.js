// callbackVersion.js

// Helper function to simulate randomness
function mightFallAsleep() {
  return Math.random() < 0.2; // 20% chance of falling asleep
}

// 1. Mow Yard
function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

// 2. Weed Eat
function weedEat(name, callback) {
  setTimeout(() => {
    if (mightFallAsleep()) {
      console.log(`${name} fell asleep after mowing the yard.`);
    } else {
      console.log(`${name} finished using the weed eater.`);
      callback();
    }
  }, 1500);
}

// 3. Trim Hedges
function trimHedges(name, callback) {
  setTimeout(() => {
    if (mightFallAsleep()) {
      console.log(`${name} fell asleep after weed eating the yard.`);
    } else {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    }
  }, 1000);
}

// 4. Collect Wood
function collectWood(name, callback) {
  setTimeout(() => {
    if (mightFallAsleep()) {
      console.log(`${name} fell asleep after trimming the hedges.`);
    } else {
      console.log(`${name} finished collecting wood.`);
      callback();
    }
  }, 2500);
}

// 5. Water Garden
function waterGarden(name, callback) {
  setTimeout(() => {
    if (mightFallAsleep()) {
      console.log(`${name} fell asleep after collecting wood.`);
    } else {
      console.log(`${name} finished watering the garden.`);
      callback();
    }
  }, 500);
}

// 6. doSummerChores - The Callback Hell
function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

// Run the chore routine for a person
doSummerChores("Jordan");
