function solution(s) {
    return s.match(/(\S+|\s)/g)
        .map(w => w === ' ' ? w : w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join('')
}