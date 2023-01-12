function solution(expression) {
  let answer = Number.MIN_SAFE_INTEGER;

  const calculate = (a, b, op) => {
    if (op === "*") return a * b;
    if (op === "+") return a + b;
    if (op === "-") return a - b;
  };

  const combinations = [
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];

  combinations.forEach((ops) => {
    const operands = expression.match(/\d+/g).map(Number);
    const operators = expression.match(/[\+\*\-]/g);

    ops.forEach((op) => {
      let idx = operators.indexOf(op);
      while (idx !== -1) {
        operands[idx] = calculate(operands[idx], operands[idx + 1], op);
        operands.splice(idx + 1, 1);
        operators.splice(idx, 1);
        idx = operators.indexOf(op);
      }
    });
    answer = Math.max(Math.abs(operands[0]), answer);
  });

  return answer;
}
