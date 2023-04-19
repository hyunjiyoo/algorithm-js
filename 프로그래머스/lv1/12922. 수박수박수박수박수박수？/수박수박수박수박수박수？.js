function solution(n) {
    const str = "수박".repeat(Math.floor(n / 2));

	return (n % 2 === 1) ? str + "수" : str;
}