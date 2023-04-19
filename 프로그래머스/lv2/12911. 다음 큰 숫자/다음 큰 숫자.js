function solution(n) {
    const getOneCount = (arr) => arr.filter(b => b === '1').length;
    const oneCount = getOneCount([...n.toString(2)]);

    for (let i = n + 1; i <= 1_000_000; ++i) {
        if (getOneCount([...i.toString(2)]) === oneCount)
            return i;
    }
}