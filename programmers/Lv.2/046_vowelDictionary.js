function solution(word) {
  let answer = 0;
  const DICT = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const count = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; ++i) {
    answer += count[i] * DICT[word[i]];
  }

  return answer + word.length;
}
