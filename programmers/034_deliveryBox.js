function solution(order) {
  let answer = 0;
  const stack = Array(order[0])
    .fill(1)
    .map((s, i) => s + i);

  let i = 0;
  let num = order[0] + 1;

  while (true) {
    if (i >= order.length || num > order.length + 1) break;

    if (stack[stack.length - 1] === order[i]) {
      stack.pop();
      ++i;
      answer++;
      continue;
    }

    stack.push(num++);
  }

  return answer;
}
