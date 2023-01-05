function countDigits(nums) {
  return nums.map((_, i, counts) => {
    let j = i;
    let multi = 1;
    while (j < counts.length - 1) multi *= counts[j++];

    return multi;
  });
}

function solution(n, k) {
  const answer = [];

  const nums = Array(n)
    .fill(0)
    .map((n, i) => i + 1);
  const reverseNums = Array(n)
    .fill(0)
    .map((c, i) => i)
    .reverse();
  const counts = countDigits(reverseNums);

  let i = 0;
  while (i < n) {
    let j = 0;
    while (k - counts[i] > 0) {
      k -= counts[i];
      ++j;
    }

    const num = nums.filter((num) => num)[j];
    answer.push(num);

    const idx = nums.indexOf(num);
    nums[idx] = 0;

    ++i;
  }

  return answer;
}
