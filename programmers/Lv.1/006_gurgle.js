function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, bab) => (!regexp1.test(bab) && regexp2.test(bab) ? ++ans : ans),
    0
  );
}
