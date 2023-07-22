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
