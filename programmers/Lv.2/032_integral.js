function getAreaCollazNumber(k) {
  const areaList = [];
  while (k > 1) {
    const prev = k;
    k = k % 2 === 0 ? k / 2 : k * 3 + 1;
    areaList.push((prev + k) / 2);
  }

  return areaList;
}

function solution(k, ranges) {
  const areaList = getAreaCollazNumber(k);
  const len = areaList.length;

  return ranges.map(([start, end]) => {
    let e = end === 0 ? len : end + len;
    return start > e
      ? -1
      : areaList.slice(start, e).reduce((acc, area) => acc + area, 0);
  });
}
