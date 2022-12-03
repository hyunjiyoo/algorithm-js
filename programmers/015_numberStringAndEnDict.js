function solution(s) {
  const dict = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let str = s;
  dict.forEach((d, i) => {
    str = str.replaceAll(d, i);
  });

  return Number(str);
}
