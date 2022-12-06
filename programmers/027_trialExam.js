function solution(answers) {
  const scores = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  const len = [5, 8, 10];
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((ans, idx) => {
    persons.forEach((person, i) => {
      const index = idx % len[i];
      if (person[idx % len[i]] === ans) scores[i][1]++;
    });
  });

  const sorted = scores.sort((a, b) => b[1] - a[1]);
  const max = sorted[0][1];

  return sorted.filter((s) => s[1] !== 0 && s[1] === max).map((s) => s[0]);
}
