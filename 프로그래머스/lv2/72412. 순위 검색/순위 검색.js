function sortByKey(map) {
    for (let key in map) {
        map[key].sort((a, b) => a - b);       
    }
    
    return map;
}

// 조합 만드는 함수
function combination(applicant, score, map, step) {
    // key는 만들수 잇는 문자열
    const key = applicant.join('');

    if (map[key]) {
        map[key].push(score);
    } else {
        map[key] = [score];
    }
    
    for (let i = step; i < 4; ++i) {
        const combiArr = [...applicant];
        // const combiArr = applicant.slice();
        combiArr[i] = '-';
        combination(combiArr, score, map, i + 1);
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

function solution(infos, query) {
    const map = {};    
    
    infos.forEach((info) => {
        const applicant = info.split(' ');
        const score = applicant.pop();
        combination(applicant, score, map, 0);
    });
    
    sortByKey(map);
    
    return query.map((q) => {
        let queryString = q.replaceAll(/ and /g, '').split(' '); 
        const queryScore = queryString.pop()*1;
        queryString = queryString.join('');
        
        return binarySearch(map[queryString], queryScore);
    });
}