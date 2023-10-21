/**
 * (() => {

  // 15th of august
//  [1,1,1,2,2,3], [0,0,1,1,1,1,2,3,3]
  const log = console.log;
  const removeDuplicates = (nums) => {
    let j = 0;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[j++] = nums[i];
      }
    }

    log("no duplicates: ", nums.slice(0, j));

    return j;
  };

  removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
  //   log(removeDuplicates([1, 1, 1, 2, 2, 3]));

  const haveTwoDuplicates = (nums) => {
    let c = 0,
      n = nums.length;

    for (let i = 0; i < nums.length; i++) {
      if (i < n - 2 && nums[i] === nums[i + 2]) {
        continue;
      } else {
        nums[c++] = nums[i];
      }
    }

    log("two duplicates", nums.slice(0, c));

    return c;
  };

  haveTwoDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);

  //   atleast three duplicates are allowed

  const haveThreeDuplicates = (nums) => {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
      if (i < nums.length - 3 && nums[i] === nums[i + 3]) {
        continue;
      } else {
        nums[j++] = nums[i];
      }
    }

    log("three duplicates: ", nums.slice(0, j));

    return j;
  };

  haveThreeDuplicates([0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3]);
})();

 */

/**
 * (() => {
  class MaxHeap {
    constructor() {
      this.container = [];
    }

    insert(value) {
      this.container.push(value);
      let index = this.container.length - 1;
      let el = this.container[index];

      while (index > 0) {
        let parentI = Math.floor((index - 1) / 2);
        let parentEl = this.container[parentI];

        if (el < parentEl) {
          break;
        }

        // swap parent with currentEl
        this.container[parentI] = el;
        this.container[index] = parentEl;

        index = parentI;
      }
    }

    extractMax() {
      let max = this.container[0];
      let last = this.container.pop();
      this.container[0] = last;
      this.sinkDown();
      return max;
    }

    sinkDown() {
      let rootI = 0;
      let el = this.container[0];
      const n = this.container.length;

      while (true) {
        let li = 2 * rootI + 1;
        let ri = 2 * rootI + 2;
        let swapI = null;

        let lc, rc;
        if (li < n) {
          lc = this.container[li];
          if (lc > el) {
            swapI = li;
          }
        }

        if (ri < n) {
          rc = this.container[ri];
          if ((swapI === null && rc > el) || (swapI !== null && rc > lc)) {
            swapI = ri;
          }
        }

        if (swapI === null) {
          break;
        }

        this.container[rootI] = this.container[swapI];
        this.container[swapI] = el;
        rootI = swapI;
      }
    }
  }

  const max_heap = new MaxHeap();

  max_heap.insert(100);
  max_heap.insert(5);
  max_heap.insert(19);
  max_heap.insert(200);
  max_heap.insert(150);
  max_heap.insert(1000);
  max_heap.insert(21);

  console.log(max_heap.container);

  max_heap.extractMax();
  console.log(max_heap.container);

  max_heap.extractMax();
  console.log(max_heap.container);
})();

 */

/**
   * 
   * (() => {
 

  function productOfArrayExceptSelf(nums) {
    const leftProduct = Array(nums.length).fill(1);
    const rightProduct = Array(nums.length).fill(1);
    let n = nums.length;

    let left = 1;
    for (let i = 1; i < n; i++) {
      left *= nums[i - 1];
      leftProduct[i] = left;
    }

    let right = 1;
    for (let i = n - 2; i > -1; i--) {
      right *= nums[i + 1];
      rightProduct[i] = right;
    }

    const answer = [];
    for (let i = 0; i < n; i++) {
      let product = leftProduct[i] * rightProduct[i];
      answer[i] = product == "-0" ? 0 : product;
    }

    return answer;
  }

  console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
  console.log(productOfArrayExceptSelf([-1, 1, 0, -3, 3]));



})();
   */

/**
 * (() => {
  // Remove Duplicates from Sorted Array II
  function _(nums) {
    let j = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
      if (i < n - 1 && nums[i] === nums[i + 1]) {
        continue;
      } else {
        nums[j++] = nums[i];
      }
    }

    return nums.slice(0, j);
  }

  console.log(_([0, 0, 1, 1, 1, 1, 2, 3, 3]));
  console.log(_([1, 1, 1, 2, 2, 3]));
})();
 */

/**
 * (() => {
  // example A : s = 'abcd'
  // example B : s = 'aab',
  function stringPermutationNotUnique(s, r = [], uniqueSet = new Set()) {
    if (s.length === r.length) {
      console.log(r.join(""));
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (uniqueSet.has(s[i])) {
        continue;
      }

      r.push(s[i]);
      uniqueSet.add(s[i]);
      stringPermutationNotUnique(s, r, uniqueSet);
      r.pop();
      uniqueSet.delete(s[i]);
    }
  }

  stringPermutationNotUnique("abc");
})();

(() => {
  function stringPermutationUnique(s, r = [], uniqueSet = new Set()) {
    if (s.length === r.length) {
      console.log(r.join(""));
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (
        uniqueSet.has(i) ||
        (i > 0 && s[i] === s[i - 1] && !uniqueSet.has(i - 1))
      ) {
        continue;
      }

      r.push(s[i]);
      uniqueSet.add(i);
      stringPermutationUnique(s, r, uniqueSet);
      r.pop();
      uniqueSet.delete(i);
    }
  }

  stringPermutationUnique("aab");
})();
 */


