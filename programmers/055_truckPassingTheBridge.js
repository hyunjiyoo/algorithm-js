function solution(bridge_length, weight, truck_weights) {
  if (truck_weights[0] > weight) {
    return 0;
  }

  const queue = [[truck_weights[0], 1]];
  const sumWeight = (queue) => queue.reduce((acc, q) => acc + q[0], 0);
  let time = 2;

  for (let i = 1; i < truck_weights.length; ) {
    queue.forEach((s) => {
      s[1]++;
    });

    const moveDistance = queue[0][1];
    if (moveDistance > bridge_length) {
      queue.shift();
    }

    const nextTruck = truck_weights[i];
    const totalWeight = sumWeight(queue) + nextTruck;
    if (totalWeight <= weight && queue.length <= bridge_length) {
      queue.push([truck_weights[i++], 1]);
    }

    ++time;
  }

  // 마지막 트럭이 다리를 모두 지나기까지 남은 거리를 더해준다.
  time += bridge_length - queue[queue.length - 1][1];

  return time;
}
