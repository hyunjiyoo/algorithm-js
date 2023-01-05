function solution(absolutes, signs) {
  return absolutes.reduce(
    (ans, absolute, i) => (ans += absolute * (signs[i] ? 1 : -1)),
    0
  );
}
