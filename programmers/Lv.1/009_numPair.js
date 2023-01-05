function solution(X, Y) {
  const chkX = Array(10).fill(0);
  const chkY = Array(10).fill(0);
  let answer = "";
  let onlyZero = true;
  let allZero = true;

  X.split("").forEach((item) => {
    chkX[Number(item)]++;
  });
  Y.split("").forEach((item) => {
    chkY[Number(item)]++;
  });

  const numberCountList = chkX.map(
    (_, i) => chkX[i] && chkY[i] && Math.min(chkX[i], chkY[i])
  );
  numberCountList.forEach((count, num) => {
    if (count) {
      allZero = count === 0 ? true : false;
      onlyZero = num === 0 ? true : false;
      answer += String(num).repeat(count);
    }
  });

  if (allZero) return "-1";
  if (onlyZero) return "0";

  return answer.split("").reverse().join("");
}
