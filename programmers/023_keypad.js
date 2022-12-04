function dist(pos, num) {
  const idx = Math.floor(num / 3);
  const table = {
    1: [1, 2, 3, 4],
    2: [0, 1, 2, 3],
    4: [2, 1, 2, 3],
    5: [1, 0, 1, 2],
    7: [3, 2, 1, 2],
    8: [2, 1, 0, 1],
    10: [4, 3, 2, 1],
    11: [3, 2, 1, 0],
  };

  return table[pos][idx];
}

function solution(numbers, hand) {
  let answer = "";

  const updatedNums = numbers.map((num) => (num === 0 ? 11 : num));

  let lpos = 10;
  let rpos = 10;
  for (const num of updatedNums) {
    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      lpos = num;
      continue;
    }

    if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      rpos = num - 2;
      continue;
    }

    const ldist = dist(lpos, num);
    const rdist = dist(rpos, num);

    if (ldist < rdist) {
      answer += "L";
      lpos = num;
      continue;
    }

    if (ldist > rdist) {
      answer += "R";
      rpos = num;
      continue;
    }

    if (hand === "right") {
      answer += "R";
      rpos = num;
    } else {
      answer += "L";
      lpos = num;
    }
  }

  return answer;
}
