function solution(price, money, count) {
  let fee = 0;
  for (let i = 1; i <= count; ++i) {
    fee += price * i;
  }

  return fee > money ? fee - money : 0;
}
