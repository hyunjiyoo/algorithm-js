function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; ++i) {
    const wants = want.map((w, i) => [w, number[i]]);

    discount.slice(i, i + 10).forEach((ds) => {
      wants.map((w) => (w[0] === ds ? w[1]-- : w[1]));
    });

    answer += wants.every(([_, v]) => v === 0);
  }

  return answer;
}
