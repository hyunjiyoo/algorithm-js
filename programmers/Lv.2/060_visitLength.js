function solution(dirs) {
  const offset = { U: [1, 0], D: [-1, 0], R: [0, 1], L: [0, -1] };
  const isOuter = (curr) => !(0 <= curr && curr <= 10);
  const set = new Set();

  let y = 5;
  let x = 5;
  for (const dir of dirs) {
    const [ny, nx] = offset[dir];
    if (isOuter(y + ny) || isOuter(x + nx)) continue;

    const reversePath = `${y + ny}${x + nx}${y}${x}`;
    !set.has(reversePath) && set.add(`${y}${x}${y + ny}${x + nx}`);

    y += ny;
    x += nx;
  }

  return set.size;
}
