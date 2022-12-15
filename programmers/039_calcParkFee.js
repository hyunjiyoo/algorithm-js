function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const m = new Map();

  records.forEach((record) => {
    const [time, num] = record.split(" ");
    const times = m.has(num) ? [...m.get(num), time] : [time];
    m.set(num, times);
  });

  const getMinutes = (time) => {
    const [h, m] = time.split(":");
    return parseInt(h * 60) + parseInt(m);
  };

  const accumTime = [];
  for (const key of m.keys()) {
    if (m.get(key).length % 2 === 1) m.set(key, [...m.get(key), "23:59"]);

    const times = m.get(key);
    let sum = 0;
    for (let i = 0; i < times.length; i += 2)
      sum += getMinutes(times[i + 1]) - getMinutes(times[i]);

    accumTime.push([key, sum]);
  }

  return accumTime
    .sort((a, b) => a[0] - b[0])
    .map(([_, time]) =>
      time < basicTime
        ? basicFee
        : Math.ceil((time - basicTime) / unitTime) * unitFee + basicFee
    );
}
