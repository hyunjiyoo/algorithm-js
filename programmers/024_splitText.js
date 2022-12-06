function solution(s) {
  let answer = 1;

  let str = s;
  for (let i = 0; i < s.length; ++i) {
    const x = str[0];
    let isX = 0;
    let isNotX = 0;

    for (let j = 0; j < str.length; ++j) {
      x === str[j] ? isX++ : isNotX++;

      if (isX === isNotX) {
        i += j - 1;
        str = str.slice(j + 1);
        if (str !== "") answer++;
        break;
      }
    }
  }

  return answer;
}
