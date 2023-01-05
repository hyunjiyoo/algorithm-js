function solution(id_list, report, k) {
  const LEN = id_list.length;
  const answer = Array(LEN).fill(0);
  const countList = Array(LEN).fill(0);
  const reportTable = Array(LEN)
    .fill(0)
    .map(() => Array(LEN).fill(0));

  report.forEach((r, i) => {
    const [reporter, criminal] = r.split(" ");
    const rnum = id_list.indexOf(reporter);
    const cnum = id_list.indexOf(criminal);

    if (!reportTable[rnum][cnum]) {
      countList[cnum]++;
      reportTable[rnum][cnum] = true;
    }
  });

  countList.forEach((count, idx) => {
    if (count < k) return;

    reportTable.forEach((report, i) => {
      if (report[idx]) answer[i]++;
    });
  });

  return answer;
}
