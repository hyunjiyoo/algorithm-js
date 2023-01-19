function combination(applicant, score, applicants, step) {
    const key = applicant.join('');

    !applicants[key] && (applicants[key] = []);    
    applicants[key].push(score);
    
    for (let i = step; i < 4; ++i) {
        const combiArr = [...applicant];
        combiArr[i] = '-';
        combination(combiArr, score, applicants, i + 1);
    }
}

function binarySearch(arr, score) {
    // 쿼리 결과가 없을경우 예외처리!
    if (!arr) return 0;
    
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] >= score)
            right = mid;
        else
            left = mid + 1;
    }
    
    return arr.length - left;
}

function getApplicants(infos, map) {    
    infos.forEach((info) => {
        const applicant = info.split(' ');
        const score = applicant.pop();
        combination(applicant, score, map, 0);
    });

    return map;
}

function sortByScore(applicants) {
    for (const score in applicants)
        applicants[score].sort((a, b) => a - b);       
    
    return applicants;
}

function solution(infos, query) {
    const applicants = sortByScore(getApplicants(infos, {}));   

    return query.map((q) => {
        let queryString = q.replaceAll(/ and /g, '').split(' '); 
        const queryScore = queryString.pop()*1;
        queryString = queryString.join('');
        
        return binarySearch(applicants[queryString], queryScore);
    });
}