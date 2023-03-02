function solution(str) {
    return [...str].map((s, idx) => {
        const sameIdx = str.slice(0, idx).lastIndexOf(s);
        return sameIdx === -1 ? sameIdx : idx - sameIdx;
    });
}