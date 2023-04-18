function solution(s, skip, index) {
    const regex = new RegExp(`[${skip}]`, 'g');
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.repeat(3);
    const filteredAlpha = alphabets.replaceAll(regex, '');

    return [...s].reduce((result, alpha) => {
        const position = filteredAlpha.indexOf(alpha) + index;
        return result + filteredAlpha[position];
    }, '');
}