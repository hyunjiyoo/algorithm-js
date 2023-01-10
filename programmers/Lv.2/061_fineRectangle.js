function divide(w, h) {
  let num = 1;
  for (let i = Math.min(w, h); i > 1; --i) {
    if (w % i === 0 && h % i === 0) {
      w /= i;
      h /= i;
      num = i;
      break;
    }
  }
  return [w, h, num];
}

function solution(w, h) {
  const area = w * h;
  if (w === 1) return area - h;
  if (h === 1) return area - w;

  const [W, H, num] = divide(w, h);

  return area - (W + H - 1) * num;
}
