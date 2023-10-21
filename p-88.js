// Merge Sorted Array

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let temp = [];

  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      temp.push(nums1[i]);
      i++;
    } else {
      temp.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    temp.push(nums1[i]);
    i++;
  }

  while (j < n) {
    temp.push(nums2[j]);
    j++;
  }

  for (let i = 0; i < temp.length; i++) {
    nums1[i] = temp[i];
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], (m = 3), (nums2 = [2, 5, 6]), (n = 3)));
