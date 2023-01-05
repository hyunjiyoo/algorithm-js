function solution(orders, course) {
  const answer = [];
  const map = new Map();
  const menuMap = new Map();
  const visited = Array(11);

  function combination(start, count, course, order) {
    if (count === course) {
      const menus = visited
        .filter((v) => v)
        .sort()
        .join("");
      const count = map.has(menus) ? map.get(menus) + 1 : 1;

      map.set(menus, count);
      return;
    }

    for (let i = start; i < order.length; ++i) {
      if (visited[i]) continue;

      visited[i] = order[i];
      combination(i, count + 1, course, order);
      visited[i] = 0;
    }
  }

  orders.forEach((order) => {
    visited.fill(0);
    course.forEach((c) => {
      combination(0, 0, c, order);
    });
  });

  for (const [menu, orderCount] of map.entries()) {
    if (orderCount === 1) continue;
    const menus = menuMap.has(menu.length)
      ? [...menuMap.get(menu.length), [menu, orderCount]]
      : [[menu, orderCount]];
    menuMap.set(menu.length, menus);
  }

  for (const value of menuMap.values()) {
    const maxLen = value.sort((a, b) => b[1] - a[1])[0][1];
    const menu = value.filter((v) => v[1] === maxLen).map((v) => v[0]);
    answer.push(...menu);
  }

  return answer.sort();
}
