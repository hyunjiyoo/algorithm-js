function solution(n) {
    const binary = n.toString(2);
    const oneCount = [...binary].filter((b) => b === '1').length;

    for (let i = n + 1; i <= 1_000_000; ++i) {
        const iBinary = i.toString(2);
        const len = [...iBinary].filter(b => b === '1').length
        if (len === oneCount)
            return i;
    }
}