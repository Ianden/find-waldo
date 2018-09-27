// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((e, i) => {
    if (e === "Waldo") found(i)
  });
}

function actionWhenFound(pos) {
  console.log(`Found Waldo at position ${pos}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);