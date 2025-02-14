function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handles zero inputs for both a and b
  }

  return a / b; // Safe division
}