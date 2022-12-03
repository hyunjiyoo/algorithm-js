function solution(numbers) {
  const chk = Array(10).fill(false);
  numbers.forEach((num) => {
    chk[num] = true;
  });

  return chk.reduce((acc, c, i) => (!c ? acc + i : acc), 0);
}
