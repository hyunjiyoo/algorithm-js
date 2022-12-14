function solution(queue1, queue2) {
  const length = queue1.length * 2 + 2;
  const sum = (queue) => queue.reduce((acc, q) => acc + q, 0);

  let answer = 0;
  let qsum1 = sum(queue1);
  let qsum2 = sum(queue2);
  let len1 = queue1.length;
  let len2 = queue2.length;
  let idx1 = 0;
  let idx2 = 0;

  while (true) {
    if (qsum1 === qsum2) return answer;

    if (len1 === 0 || len2 === 0 || answer >= length) return -1;

    if (qsum1 > qsum2) {
      const selected = queue1[idx1++];
      queue2.push(selected);
      qsum1 -= selected;
      qsum2 += selected;
      len1--;
      len2++;
    } else {
      const selected = queue2[idx2++];
      queue1.push(selected);
      qsum1 += selected;
      qsum2 -= selected;
      len1++;
      len2--;
    }

    answer++;
  }
}
