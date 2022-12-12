function solution(topping) {
  let answer = 0;
  const len = topping.length;

  function getToppingCount(start, end, direction) {
    const num = Array(len).fill(false);
    const acc = direction === "l" ? 1 : -1;
    const arr = [];
    let count = 0;

    for (let i = start; i !== end; i += acc) {
      if (!num[topping[i] - 1]) ++count;

      num[topping[i] - 1] = true;
      arr.push(count);
    }

    if (direction === "r") arr.reverse();

    return arr;
  }

  const left = getToppingCount(0, len, "l");
  const right = getToppingCount(len - 1, -1, "r");

  for (let i = 0; i < topping.length - 1; ++i) {
    if (left[i] === right[i + 1]) ++answer;
  }

  return answer;
}
