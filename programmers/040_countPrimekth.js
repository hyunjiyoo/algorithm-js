function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const num = n
    .toString(k)
    .split("0")
    .filter((n) => n !== "1")
    .filter((n) => n !== "");
  return num.reduce((acc, d) => (isPrime(parseInt(d)) ? acc + 1 : acc), 0);
}
