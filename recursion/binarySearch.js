function binarySearch(arr, value, s = 0, e = arr.length) {
  if (s <= e) {
    const middle = Math.floor((s + e) / 2);
    console.log(arr.slice(s, e), arr[middle], value);

    if (arr[middle] === value) {
      return middle;
    }

    if (value < arr[middle]) {
      return binarySearch(arr, value, s, middle - 1);
    } else {
      return binarySearch(arr, value, middle + 1, e);
    }
  }

  return -1;
}

const arr = [1, 100, 300, 301, 305, 900, 1200, 1203, 1350];

// console.log(binarySearch(arr, 100));
// console.log(binarySearch(arr, 301));
// console.log(binarySearch(arr, 1203));

// let make a twist to this algorithm, give me an index so that i decide where a certain element should go

function whereShouldIputValue(arr, value, s = 0, e = arr.length) {
  if (s <= e) {
    const middle = Math.floor((s + e) / 2);

    if (arr[middle] === value) {
      return middle;
    }

    if (value < arr[middle]) {
      return whereShouldIputValue(arr, value, s, middle - 1);
    } else {
      return whereShouldIputValue(arr, value, middle + 1, e);
    }
  }

  return s;
}

console.log(whereShouldIputValue(arr, 30));

console.log(whereShouldIputValue(arr, 901));
