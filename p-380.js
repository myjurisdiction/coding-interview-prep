var RandomizedSet = function () {
  this.hashMap = new Map();
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hashMap.has(val)) {
    return false;
  }

  this.list.push(val);
  this.hashMap.set(val, this.list.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.hashMap.has(val)) {
    return false;
  }

  const index = this.hashMap.get(val);

  if (index !== this.list.length - 1) {
    this.hashMap.set(this.list[this.list.length - 1], index);
    [this.list[index], this.list[this.list.length - 1]] = [
      this.list[this.list.length - 1],
      this.list[index],
    ];
  }

  this.hashMap.delete(val);
  this.list.pop();

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.list[Math.floor(Math.random() * this.list.length)];
};

//  Your RandomizedSet object will be instantiated and called as such:
var obj = new RandomizedSet();

console.log(obj.insert(100));
console.log("RANDOM", obj.getRandom());
console.log(obj.insert(700));
console.log(obj.insert(10));
console.log(obj.insert(70));
console.log("RANDOM", obj.getRandom());
console.log(obj.insert(80));
console.log(obj.insert(101));
// var param_1 = obj.insert(100);
// var param_4 = obj.insert(200);
// var param_2 = obj.remove(50);
// var param_3 = obj.getRandom();

// console.log(param_1, param_2, param_3, param_4);

console.log(obj);

console.log(obj.remove(70));
console.log(obj);

console.log("RANDOM", obj.getRandom());

console.log(obj.remove(80));
console.log(obj);
