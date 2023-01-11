function isPair(str) {
  const pairBracket = /(\(\))/g;

  for (let i = str.length; i > 0; i -= 2) {
    str = str.replace(pairBracket, "");
  }

  return str === "";
}

function convertPairString(str) {
  if (isPair(str)) return str;

  const updatedStr = str
    .slice(1, str.length - 1)
    .split("")
    .map((s) => (s === ")" ? "(" : ")"))
    .join("");

  return "(" + convertPairString(updatedStr) + ")";
}

function solution(p) {
  let answer = "";

  let left = 0;
  let right = 0;
  let start = 0;
  for (let i = 0; i < p.length; ++i) {
    left += p[i] === "(";
    right += p[i] === ")";

    if (left === right) {
      answer += convertPairString(p.slice(start, i + 1));
      start = i + 1;
      left = right = 0;
    }
  }

  return answer;
}
