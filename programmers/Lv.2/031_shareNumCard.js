function isPossible(A, B, num) {
  for (let i = 0; i < A.length; ++i) {
    if (!(A[i] % num === 0 && B[i] % num !== 0)) return false;
  }
  return true;
}

function solution(arrayA, arrayB) {
  const start = Math.max(Math.min(arrayA[0]), Math.min(arrayB[0]));

  for (let i = start; i > 0; --i) {
    if (isPossible(arrayA, arrayB, i) || isPossible(arrayB, arrayA, i)) {
      return i;
    }
  }

  return 0;
}
