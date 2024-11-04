function solution(wallpaper) {
  let minX = 51;
  let minY = 51;
  let maxX = 0;
  let maxY = 0;

  wallpaper.forEach((wp, y) => {
    wp.split('').forEach((w, x) => {
      if (w === '#') {
        minY = Math.min(minY, y);
        minX = Math.min(minX, x);
        maxY = Math.max(maxY, y);
        maxX = Math.max(maxX, x);
      }
    });
  });

  return [minY, minX, maxY+1, maxX+1];
}