function solution(a, b, n) {
  let answer = 0;

  let cola = n;
  while (true) {
    if (cola < a) {
      break;
    }

    const reward = Math.floor(cola / a) * b;
    const rest = cola % a;

    answer += reward;
    cola = reward + rest;
  }

  return answer;
}
