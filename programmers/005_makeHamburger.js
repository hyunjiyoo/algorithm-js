function solution(ingredient) {
  let answer = 0;
  const stack = [];
  
  ingredient.forEach((ing, idx) => {
      stack.push(ing);

      if (stack.length >= 4) {
          const find = stack.slice(-4).join('')
          if (find === '1231') {
              stack.pop();
              stack.pop();
              stack.pop();
              stack.pop();
              ++answer;
          }
      }
  });
  
  return answer;
}