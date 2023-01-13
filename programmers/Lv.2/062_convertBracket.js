function isPair(s) {
  for (let i = s.length; i > 0; i -= 2) {
    s = s.replace(/\(\)/g, "");
  }

  return s === "";
}

function getBalancedString(str) {
  let left = 0;
  let right = 0;
  let i = 0;
  for (; i < str.length; ++i) {
    if (str[i] === "(") ++left;
    if (str[i] === ")") ++right;

    if (left === right) break;
  }

  return { u: str.slice(0, i + 1), v: str.slice(i + 1) };
}

function solution(p) {
  if (p === "") return "";

  const { u, v } = getBalancedString(p);

  if (isPair(u)) return u + solution(v);

  const slicedReverseU = p
    .slice(1, u.length - 1)
    .split("")
    .map((s) => (s === "(" ? ")" : "("))
    .join("");

  return "(" + solution(v) + ")" + slicedReverseU;
}
