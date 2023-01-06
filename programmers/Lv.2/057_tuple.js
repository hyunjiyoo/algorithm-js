function solution(str) {
  const convertStrToArr = (str) =>
    str.split("},").map((s) => s.replaceAll(/[{}\']/g, "").split(","));
  const convertNumber = (arr) => arr.map((str) => str.map((s) => +s));

  const arrNum = convertNumber(convertStrToArr(str)).sort(
    (a, b) => a.length - b.length
  );

  const answer = [arrNum[0][0]];
  for (let i = 0; i < arrNum.length - 1; ++i) {
    const uniqueNum = arrNum[i + 1].find((num) => !arrNum[i].includes(num));
    answer.push(uniqueNum);
  }

  return answer;
}
