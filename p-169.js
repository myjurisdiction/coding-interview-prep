/**
 * @param {number[]} nums
 * @return {number}
 *
 *
 * nums = [2,2,1,1,1,2,2], nums = [3,2,3]
 */

(() => {
  const log = console.log;


    // basic and simple
  var majorityElement = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        let oldValue = map.get(nums[i]);
        map.set(nums[i], ++oldValue);
      } else {
        map.set(nums[i], 1);
      }
    }

    let maxF = 0,
      keyF = 0;

    for (let [key, value] of map.entries()) {
      if (value > maxF) {
        maxF = value;
        keyF = key;
      }
    }

    return keyF;
  };

  // approach smart in o(1) space complexity...

  var majorityElement2 = function (nums) {
      // let's think about it.
  };



  log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
})();
