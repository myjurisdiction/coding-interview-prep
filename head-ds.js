/** This is the Implementation of the max binary heap.
 *
 * Binary heap has insertion time complexity = O(log n) -> base 2
 * BH has removal time complexity = O(log n) -> base 2
 * BH has search of a node time complexity of O(n), (this data structure is not made up for searching)
 */

// 17-08-23
class MaxHeap {
  constructor() {
    this.container = [];
  }

  //   O(logn) - n  = size of the container
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

  //   O(logn) - n  = size of the container
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

/**
 * PRIORIT QUEUE is built on top of binary heap DS. compare the priority rather than the actual value
 */

//   starts here the old code
class MaxBinaryHeap {
  constructor() {
    Object.assign(this, { container: [] });
  }

  insert(value) {
    this.container.push(value);
    this.bubbleUp;
  }

  get bubbleUp() {
    let index = this.container.length - 1;
    let element = this.container[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.container[parentIndex];
      if (element <= parentElement) break;
      this.container[parentIndex] = element;
      this.container[index] = parentElement;
      index = parentIndex;
    }
  }

  swap(idx1, idx2) {
    [this.container[idx1], this.container[idx2]] = [
      this.container[idx2],
      this.container[idx1],
    ];
  }

  get extractMax() {
    let max = this.container[0];
    let end = this.container.pop();
    this.container[0] = end;
    this.sinkDown;
    return max;
  }

  get sinkDown() {
    let rootIdx = 0;
    let element = this.container[0];
    let length = this.container.length;

    while (true) {
      let leftIdx = 2 * rootIdx + 1;
      let rightIdx = 2 * rootIdx + 2;
      let swapIdx = null;

      let leftChild, rightChild;
      if (leftIdx < length) {
        leftChild = this.container[leftIdx];
        if (leftChild > element) {
          swapIdx = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.container[rightIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightIdx;
        }
      }
      if (swapIdx === null) break;
      this.container[rootIdx] = this.container[swapIdx];
      this.container[swapIdx] = element;
      rootIdx = swapIdx;
    }
  }
}

let bh = new MaxBinaryHeap();

bh.insert(22);
bh.insert(44);
bh.insert(100);
bh.insert(21);
bh.insert(23);
bh.insert(500);

console.log(bh);

console.log(bh);

console.log(bh.extractMax);

console.log(bh);

console.log(bh.extractMax);

console.log(bh, `\n`);

/** Implementation of min binary heap */

class MinBinaryHeap extends MaxBinaryHeap {
  constructor() {
    super();
    this.container = [];
  }

  insert(value) {
    this.container.push(value);
    this.bubbleUp;
  }

  get bubbleUp() {
    let index = this.container.length - 1;
    let element = this.container[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.container[parentIndex];
      if (parent <= element) break;
      this.container[parentIndex] = element;
      this.container[index] = parent;
      index = parentIndex;
    }
  }

  get extractMin() {
    let min = this.container[0];
    let end = this.container.pop();
    this.container[0] = end;
    this.sinkDown;
    return min;
  }

  get sinkDown() {
    let rootIndex = 0;
    let element = this.container[rootIndex];
    let length = this.container.length;
    while (true) {
      let leftChildIdx = 2 * rootIndex + 1;
      let rightChildIdx = 2 * rootIndex + 2;
      let swap = null;

      let leftChild, rightChild;
      if (leftChildIdx < length) {
        leftChild = this.container[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.container[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.container[rootIndex] = this.container[swap];
      this.container[swap] = element;
      rootIndex = swap;
    }
  }
}

const minBh = new MinBinaryHeap();
minBh.insert(22);
minBh.insert(44);
minBh.insert(100);
minBh.insert(21);
minBh.insert(23);
minBh.insert(5);

console.log(minBh);

console.log(minBh.extractMin);

console.log(minBh);

console.log(minBh.extractMin);

console.log(minBh, `\n`);

console.log(minBh.extractMin);

console.log(minBh, `\n`);

/**
    * 
    * const proto_object = {
      a1 : [1,2,0],
      a2 : [3,4,-1,1],
      a3 : [7,8,9,11,12]
  }
  
  function smallestInteger() {
      let min = Math.min(...this.a2);
      let max = Math.max(...this.a2);
  
      let rangeArray = Array.from({ length : max}, (a, b) => b + 1);
      let lowestRangeArray;
      if(min > 2) {
          lowestRangeArray = Array.from({ length : min }, (a, b) => b + 1);
      }
      if(lowestRangeArray) return Math.min(...lowestRangeArray);
      for(let value of rangeArray) {
          if(!this.a2.includes(value)) return value;
      }
      return max + 1;
  
  }
  
  const instance1 = smallestInteger.bind(proto_object);
  console.log(instance1());
    */

/**   
     *  -> MAX HEAP USING FUNCTION CONSTRUCTOR
     * 
     * 
     * function MaxHeap() {
    this.container = new Array();
  }
  
  MaxHeap.prototype.bubbleUp = function () {
    let index = this.container.length - 1;
    let element = this.container[index];
  
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parentEl = this.container[parentIdx];
      if (parentEl >= element) break;
      this.container[parentIdx] = element;
      this.container[index] = parentEl;
      index = parentIdx;
    }
  };
  
  MaxHeap.prototype.insert = function (value) {
    this.container.push(value);
    this.bubbleUp();
    return this.container;
  };
  
  MaxHeap.prototype.extractMax = function () {
    const max = this.container[0];
    const last = this.container.pop();
    this.container[0] = last;
    this.sinkDown();
    return max;
  };
  
  MaxHeap.prototype.sinkDown = function () {
    let rootIndex = 0;
    const element = this.container[0];
    const length = this.container.length;
  
    while (true) {
      let leftIdx = 2 * rootIndex + 1;
      let rightIdx = 2 * rootIndex + 2;
      let pointer = null;
  
      let leftChild, rightChild;
      if (leftIdx < length) {
        leftChild = this.container[leftIdx];
        if (leftChild > element) {
          pointer = leftIdx;
        }
      }
  
      if (rightIdx < length) {
        rightChild = this.container[rightIdx];
        if (
          (pointer === null && rightChild > element) ||
          (pointer !== null && rightChild > leftChild)
        ) {
          pointer = rightIdx;
        }
      }
  
      if (pointer === null) break;
      this.container[rootIndex] = this.container[pointer];
      this.container[pointer] = element;
      rootIndex = pointer;
    }
  };
  
  const m_heap = new MaxHeap();
  
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  
  console.log(arr);
  
  for (let el of arr) {
    m_heap.insert(el);
  }
  console.log(m_heap.container);
  
  m_heap.extractMax();
  
  console.log(m_heap.container);
     */
