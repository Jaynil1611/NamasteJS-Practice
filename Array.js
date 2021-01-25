const arr1 = ['a','b','c'];
const arr2 = ['b','a','c'];

console.log(
arr1.sort()===arr1,
arr2.sort()===arr2,
arr1.sort()===arr2.sort()
);
