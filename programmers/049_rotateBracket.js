function solution(s) {
  let answer = 0;

  const isLeft = (s) => /[\[\{\(]/.test(s);
  const isPair = (l, r) => l + r === "[]" || l + r === "{}" || l + r === "()";

  for (let i = 0; i < s.length; ++i) {
    const str = s.slice(i, s.length) + s.slice(0, i);
    const stack = [];
    let flag = true;

    for (const s of str) {
      if (isLeft(s)) {
        stack.push(s);
      } else {
        const left = stack.pop() ?? "";
        if (!isPair(left, s)) {
          flag = false;
          break;
        }
      }
    }

    stack.length === 0 && flag && answer++;
  }

  return answer;
}
