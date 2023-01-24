
function getElement(str) {
    const regex = /[a-z][a-z]/;
    const arr = [];
    
    for (let i = 1; i < str.length; ++i) {
        const s = str[i-1] + str[i];
        regex.test(s) && arr.push(s);
    }
    
    return arr;
}

function getIntersection(s1, s2) {
    const ss1 = [...s1];
    const ss2 = [...s2];
    const intersection = [];
    
    for (let i = 0; i < ss1.length; ++i) {
        const idx = ss2.indexOf(ss1[i]);
        if (ss2 && idx !== -1) {
            intersection.push(ss1[i]);
            ss2[idx] = ss1[i] = "";
        }
    }
    return intersection.filter(i => i !== '');
}

function getUnion(s1, s2, intersection) {
    const union = s1.concat(s2);
    
    for (let i = 0; i < intersection.length; ++i) {
        const index = union.indexOf(intersection[i]);
        if (index !== -1) union[index] = "";       
    }
    
    return union.filter(u=>u);
}

function solution(str1, str2) {
    const NUM = 65536;
    
    const s1 = getElement(str1.toLowerCase());
    const s2 = getElement(str2.toLowerCase());
    const intersection = getIntersection(s1, s2);
    const union = getUnion(s1, s2, intersection);
    
    const interLength = intersection.length;
    const hapLength = union.length;
    const isZeroSet = interLength + hapLength === 0;
    
    return isZeroSet ? NUM : Math.floor(interLength / hapLength * NUM);
}
