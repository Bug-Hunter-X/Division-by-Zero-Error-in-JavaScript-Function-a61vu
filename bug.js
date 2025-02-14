function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Correctly handles zero inputs
  }

  return a / b; // Potential division by zero if b is zero
}