let fruits = ["apple", "banana", "cherry"];

console.log("\nOriginal Array");
console.log("----------------");
console.log(fruits.toString());

fruits.push("Mango");
console.log("\nNew Array after push Mango at end of the Array");
console.log("------------------------------------------------");
console.log(fruits.toString());
 
fruits.shift();
console.log("\nNew Array after removing first fruit from the Array");
console.log("-----------------------------------------------------");
console.log(fruits.toString());

let nums = [10, 20, 30, 40, 50, 60],
  sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("\n\nArray of Numbers: ");
console.log("-----------------------");
console.log(nums.toString());
console.log("\nSum of Number Array: " + sum + "\n\n");
