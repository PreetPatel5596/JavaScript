function divide_Numbers(n1, n2) {
  if (n2 === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }
}

try {
  divide_Numbers(10, 0);
  //
} catch (e) {
  console.error(e);
}
