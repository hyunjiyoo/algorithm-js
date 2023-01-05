const offset = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function checkDistance(start, place) {
  const visited = Array.from(new Array(5), () => Array(5).fill(false));
  const queue = [start];

  while (queue.length) {
    const [x, y, depth] = queue.shift();

    if (visited[x][y]) continue;

    visited[x][y] = true;

    if (depth && place[x][y] === "P") return false;

    for (let i = 0; i < 4; ++i) {
      const nx = x + offset[i][0];
      const ny = y + offset[i][1];

      if (!(0 <= nx && nx < 5) || !(0 <= ny && ny < 5)) continue;

      if (depth < 2 && place[nx][ny] !== "X") queue.push([nx, ny, depth + 1]);
    }
  }

  return true;
}

function solution(places) {
  const answer = Array(places.length).fill(1);

  places.forEach((place, idx) => {
    outer: {
      for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < 5; ++j) {
          if (place[i][j] !== "P") continue;

          if (!checkDistance([i, j, 0], place)) {
            answer[idx] = 0;
            break outer;
          }
        }
      }
    }
  });

  return answer;
}
