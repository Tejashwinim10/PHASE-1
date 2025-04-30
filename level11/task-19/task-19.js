function factorial(n) {
    if (n < 0) throw new Error("Negative number");
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  try {
    console.log("Factorial 5:", factorial(5));
    console.log("Factorial 0:", factorial(0));
    console.log("Factorial -2:", factorial(-2));
  } catch (error) {
    console.log("Error:", error.message);
  }
  