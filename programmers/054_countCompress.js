function solution(arr) {
  const arrLen = arr.length;
  const oneCount = arr.flat().filter((el) => el === 1).length;
  const zeroCount = arr.flat().filter((el) => el === 0).length;
  const answer = [zeroCount, oneCount];

  (function divide(s1, s2, e1, e2, len) {
    if (len === 1) {
      return;
    }

    const totalCount = len * len;
    let one = 0;
    let zero = 0;
    for (let i = s1; i < e1; ++i) {
      for (let j = s2; j < e2; ++j) {
        arr[i][j] === 1 && one++;
        arr[i][j] === 0 && zero++;
      }
    }

    if (one === totalCount) {
      answer[1] -= totalCount - 1;
      return;
    }

    if (zero === totalCount) {
      answer[0] -= totalCount - 1;
      return;
    }

    len /= 2;

    divide(s1, s2, e1 - len, e2 - len, len);
    divide(s1, s2 + len, e1 - len, e2, len);
    divide(s1 + len, s2, e1, e2 - len, len);
    divide(s1 + len, s2 + len, e1, e2, len);
  })(0, 0, arrLen, arrLen, arrLen);

  return answer;
}
