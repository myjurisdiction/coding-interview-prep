/**
 * 
 * -4 3 -9 0 4 1   arr = 

 */
function plusMinus(arr) {
  const n = arr.length;
  let map = new Map([
    ["positive", 0],
    ["negative", 0],
    ["zero", 0],
  ]);

  for (let num of arr) {
    if (num > 0) {
      map.set("positive", map.get("positive") + 1);
    } else if (num < 0) {
      map.set("negative", map.get("negative") + 1);
    } else {
      map.set("zero", map.get("zero") + 1);
    }
  }

  for (let value of map.values()) {
    let result = value / n;
    console.log(result.toFixed(5))

  }
}

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
