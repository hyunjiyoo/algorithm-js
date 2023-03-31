function getStartPosition(park) {
    for (let y = 0; y < park.length; ++y) {
        for (let x = 0; x < park[y].length; ++x) {
            if (park[y][x] === 'S')
                return [ y, x ];
        }
    }
}

function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    const direction = { 'W': [0, -1], 'N': [-1, 0], 'E': [0, 1], 'S': [1, 0] };
    const isOutOfRange = (y, x) => !(0 <= y && y < H) || !(0 <= x && x < W);
    
    function isObstacle({ y, x, ny, nx }) {
        const [startY, endY] = y < ny ? [y, ny] : [ny, y];
        const [startX, endX] = x < nx ? [x, nx] : [nx, x];

        for (let i = startY; i <= endY; ++i) {
            for (let j = startX; j <= endX; ++j) {
                if (park[i][j] === 'X')
                    return true;
            }
        }

        return false;
    }
    
    return routes.reduce(([y, x], route) => {
        const [op, n] = route.split(' ');
        const ny = y + direction[op][0] * n;
        const nx = x + direction[op][1] * n;

        if (isOutOfRange(ny, nx) || isObstacle({y, x, ny, nx})) 
            return [y, x];

        return [ny, nx];
        
    }, getStartPosition(park));
}