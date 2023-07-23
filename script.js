function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

function sortArray() {
  var unsorted = [23, 45, 16, 37, 3, 99, 22];
  var sorted = quicksort(unsorted);

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Sorted array: " + sorted.join(", ");
}
// Add event listener to the anchor tag
document
  .getElementById("sortButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    sortArray(); // Call the sortArray function when the anchor tag is clicked
  });

// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function sortbub() {
  // This is our unsorted array
  var arr = [234, 43, 55, 63, 5, 6, 235, 547];

  // Now pass this array to the bblSort() function
  var bb = bblSort(arr);
  var result = document.getElementById("bsort");
  result.innerHTML = sorted.join(", ");
}
document
  .getElementById("sortbubble")
  .addEventListener("click", function (bubble) {
    bubble.preventDefault();
    sortbub();
  });
// play pause button
const player = document.querySelector(".fake-player");

function clickHandler() {
  const buttons = Array.from(this.children);
  buttons.forEach((button) => button.classList.toggle("hidden"));
}

player.addEventListener("click", clickHandler);
