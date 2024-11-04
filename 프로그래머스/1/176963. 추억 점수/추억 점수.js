function solution(name, yearning, photo) {
  const answer = [];

  const m = new Map();
  name.forEach((n, i) => {
    m.set(n, yearning[i]);
  });

  photo.forEach((ph) => {
    let sum = 0;
    ph.forEach(phName => {
      if(m.has(phName)) {
        sum += m.get(phName);
      }
    });

    answer.push(sum);
  });

  return answer;
}