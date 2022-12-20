function getIntersection(l1, l2) {
  const [x1, y1, n1] = l1;
  const [x2, y2, n2] = l2;

  const x = (y1 * n2 - n1 * y2) / (x1 * y2 - y1 * x2);
  const y = (n1 * x2 - x1 * n2) / (x1 * y2 - y1 * x2);

  return [x, y];
}

function solution(line) {
  const chk = Array(line.length).fill(-1);
  const interPoint = [];

  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = 0;
  let maxY = 0;

  function pick(start, step) {
    if (step === 2) {
      const [idx1, idx2] = chk.filter((c) => c !== -1);
      const [x, y] = getIntersection(line[idx1], line[idx2]);

      if (Number.isInteger(x) && Number.isInteger(y)) {
        minX = minX > x ? x : minX;
        minY = minY > y ? y : minY;
        interPoint.push([x, y]);
      }
      return;
    }

    for (let i = start; i < line.length; ++i) {
      if (chk[i] !== -1) continue;

      chk[i] = i;
      pick(i + 1, step + 1);
      chk[i] = -1;
    }
  }

  pick(0, 0);

  const points = interPoint.map((p) => [p[0] - minX, p[1] - minY]);
  points.forEach(([x, y]) => {
    maxX = maxX < x ? x : maxX;
    maxY = maxY < y ? y : maxY;
  });

  const answer = Array.from(Array(maxY + 1), () =>
    new Array(maxX + 1).fill(".")
  );
  points.forEach(([x, y]) => (answer[y][x] = "*"));

  return answer.map((ans) => ans.join("")).reverse();
}
