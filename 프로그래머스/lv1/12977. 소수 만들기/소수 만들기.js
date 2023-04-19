function isPrime(num) {
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    const chk = Array(nums.length).fill(0);

    (function combination (start = 0, count = 0) {
        if (count === 3) {
            const num = chk.filter((c) => c !== 0).reduce((acc, n) => acc + n, 0);
            isPrime(num) && answer++;
            return;
        }

        for (let i = start; i < nums.length; ++i) {
            if (chk[i]) continue;
            chk[i] = nums[i];
            combination(i + 1, count + 1);
            chk[i] = 0;
        }
    })();

    return answer;
}