function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  if (s.length === 1) return 1;

  for (let cut = 1; cut <= s.length / 2; ++cut) {
    let compressedStr = "";

    let count = 1;
    let cuttedStr = s.slice(0, cut);
    for (let j = cut; j < s.length; j += cut) {
      const nextStr = s.slice(j, j + cut);

      if (cuttedStr === nextStr) {
        count++;
      } else {
        compressedStr += (count > 1 ? count : "") + cuttedStr;
        cuttedStr = nextStr;
        count = 1;
      }
    }

    compressedStr += (count > 1 ? count : "") + cuttedStr;
    answer = Math.min(answer, compressedStr.length);
  }

  return answer;
}
