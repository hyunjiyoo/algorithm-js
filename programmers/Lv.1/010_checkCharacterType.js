function solution(survey, choices) {
  let answer = "";

  const table = ["RT", "CF", "JM", "AN"];
  const indicator = { R: 0, T: 0, F: 0, C: 0, J: 0, M: 0, A: 0, N: 0 };

  choices.forEach((choice, idx) => {
    if (choice === 4) return;
    const character = choice < 4 ? survey[idx][0] : survey[idx][1];
    indicator[character] += Math.abs(choice - 4);
  });

  table.forEach((type, i) => {
    answer += indicator[type[0]] >= indicator[type[1]] ? type[0] : type[1];
  });

  return answer;
}
