function connectWire(n, wires) {
  const w = Array.from(new Array(n), () => new Array());
  for (let i = 0; i < wires.length; ++i) {
      w[wires[i][0] - 1].push(wires[i][1]);
      w[wires[i][1] - 1].push(wires[i][0]);
  }
  
  return w;
}

function solution(n, wires) {
  let answer = 100;
  const w = connectWire(n, wires);
  
  function countTower(root, cutted) {
      let count = 0;
      const q = [root];
      const visited = [];
      visited[root] = true;
      
      while (q.length) {
          const cur = q.pop() - 1;
          
          w[cur].forEach((next) => {
              if (next === cutted || visited[next]) return;
              
              visited[next] = true;
              q.push(next);
          });
          
          count++;
      }
      
      return count;
  }
  
  wires.forEach((wire) => {
      const [a, b] = wire;
      const cnt = countTower(a, b);
      const diff = Math.abs(cnt - (n - cnt));
      answer = Math.min(answer, diff);
  });
  
  return answer;
}
