function solution(cards1, cards2, goal) {
    let answer = 'Yes';
	let idx1 = 0;
	let idx2 = 0;
    
	goal.forEach((card) => {
		if (cards1[idx1] === card) {
			idx1++;
			return;
        }
        
        if (cards2[idx2] === card) {
            idx2++;
            return;
        }

        answer = 'No';
	});

	
	return answer;
}