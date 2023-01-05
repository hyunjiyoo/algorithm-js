function solution(elements) {
  const set = new Set();
  const circular = elements.concat(elements);
  const sum = (arr) => arr.reduce((acc, a) => acc + a, 0);

  elements.forEach((_, length, elems) => {
    elems.forEach((_, j) => {
      set.add(sum(circular.slice(j, j + length)));
    });
  });

  return set.size;
}
