function solution(orders, course) {
  const answer = [];
  const alphabets = Array.from(
    new Set(orders.map((order) => order.split("")).flat())
  );
  const picked = Array(alphabets.length).fill(0);
  const map = new Map();

  function comb(start, step, courseCount) {
    if (step === courseCount) {
      const alphabet = picked.filter((v) => v).join("");
      const included = [];

      orders.forEach((order) => {
        let flag = true;
        for (let i = 0; i < courseCount; ++i) {
          if (flag === false) break;
          flag = order.includes(alphabet[i]);
        }

        flag && included.push(order);
      });

      const key = included.length;
      key >= 2 &&
        map.set(key, map.has(key) ? [...map.get(key), alphabet] : [alphabet]);
      return;
    }

    for (let i = start; i < alphabets.length; ++i) {
      if (picked[i]) continue;

      picked[i] = alphabets[i];
      comb(i, step + 1, courseCount);
      picked[i] = 0;
    }
  }

  course.forEach((c) => comb(0, 0, c));

  for (const value of map.values()) {
    const len = value[value.length - 1].length;
    answer.push(value.filter((v) => v.length === len));
  }

  const sortedAlphabet = answer.flat().map((ans) =>
    ans
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  );

  return sortedAlphabet.sort();
}
