function solution(dartResult) {
  const numRegex = /[0-9]/;
  const nums = [];

  let num = 0;
  for (const dart of dartResult) {
    if (numRegex.test(dart))
      num = dart === "0" ? (num === 1 ? 10 : 0) : dart - 0;

    if (dart === "S") nums.push(num);
    if (dart === "D") nums.push(Math.pow(num, 2));
    if (dart === "T") nums.push(Math.pow(num, 3));

    const len = nums.length;
    if (dart === "*") {
      let j = len === 1 ? 0 : len - 2;
      for (; j < len; ) nums[j++] *= 2;
    }

    if (dart === "#") nums[len - 1] *= -1;
  }

  return nums.reduce((acc, num) => acc + num, 0);
}
