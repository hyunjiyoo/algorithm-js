function solution(participant, completion) {
  const map = new Map();

  participant.forEach((p) => {
    const count = map.has(p) ? map.get(p) + 1 : 1;
    map.set(p, count);
  });

  completion.forEach((c) => {
    map.set(c, map.get(c) - 1);
  });

  return participant.filter((p) => map.get(p) === 1)[0];
}
