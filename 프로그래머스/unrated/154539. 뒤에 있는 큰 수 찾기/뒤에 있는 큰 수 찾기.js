function solution(numbers) {
    const ans = Array(numbers.length).fill(-1);
    const stack = [numbers.pop()];
    
    for (let i = numbers.length - 1; i >= 0; --i) {
        let ret = -1;
        while (stack.length > 0) {
            const max = stack[stack.length - 1];
            if (max > numbers[i]) {
                stack.push(numbers[i]);
                ret = max;
                break;
            }
            stack.pop()
        }
        
        ans[i] = ret;
        stack.push(numbers[i]);
    }
    
    return ans;
}