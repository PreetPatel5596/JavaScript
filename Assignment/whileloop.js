let sum = 0,
  i = 1,
  str = "";

while (i <= 20) {
  if (i % 2 == 0) {
    sum += i;
  }
  i++;
}
console.log("\nSum of Even Numbers: " + sum+"\n");
