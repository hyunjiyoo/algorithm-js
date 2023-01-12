function solution(brown, yellow) {
  for (let i = 1; i <= yellow; ++i) {
    if (yellow % i !== 0) continue;

    const w = yellow / i + 2;
    const h = i + 2;

    if (w * h - yellow === brown) return [w, h];
  }
}
