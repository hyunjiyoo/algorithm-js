function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);

  while (people.length) {
    const person = people.pop();
    if (limit - person >= people[0]) {
      people.shift();
    }

    ++answer;
  }

  return answer;
}
