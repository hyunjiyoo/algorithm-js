function solution(expression) {
  let answer = 0;

  const operation = [...new Set(expression.match(/[*+-]/g))];
  const checked = Array(operation.length).fill("");
  const convertNumber = (strArr) =>
    strArr.map((arr) => arr.match(/(-?\d+)/g).map((str) => +str));
  const getMatchOperator = (exp, op) => {
    if (op === "-") return exp.match(/(\d+-\d+)/g);
    if (op === "+") return exp.match(/(\d+\+\d+)/g);
    if (op === "*") return exp.match(/(\d+\*-?\d+)/g);
  };

  (function combination(step) {
    if (step === operation.length) {
      let strExpression = expression;

      checked.forEach((operation) => {
        const matchedExpr = getMatchOperator(strExpression, operation);
        const numbers = convertNumber(matchedExpr).map(([n1, n2]) =>
          operation === "*" ? n1 * n2 : n1 + n2
        );

        matchedExpr.forEach((str, i) => {
          strExpression = strExpression.replace(str, numbers[i]);
          strExpression = strExpression.replaceAll("--", "+");
          strExpression = strExpression.replace(/^(--)/, "");
        });
      });

      answer = Math.max(Math.abs(eval(strExpression)), answer);
      return;
    }

    for (let i = 0; i < operation.length; ++i) {
      if (checked[i]) continue;

      checked[i] = operation[step];
      combination(step + 1);
      checked[i] = "";
    }
  })(0, 0);

  return answer;
}
