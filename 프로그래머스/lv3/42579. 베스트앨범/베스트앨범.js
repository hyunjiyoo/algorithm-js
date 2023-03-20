function solution(genres, plays) {
    const map = new Map();
    const ans = new Map();
    const genreType = [...new Set([...genres])];
    
    genreType.forEach((genre) => {
        map.set(genre, 0);
        ans.set(genre, '');
    });
    
    genres.forEach((genre, i) => {
        map.set(genre, map.get(genre) + plays[i]);
    });
    
    // console.log(map);
    const sortedGenre = [...map].sort((a, b) => b[1] - a[1]).map((a) => a[0]);
    // console.log(sortedGenre);


    const m = new Map();
    genres.forEach((g, i) => {
       m.set(i, [ i, g, plays[i] ]); 
    });
    
    const musicInfos = [...m.values()].sort((a, b) => b[2] - a[2]).sort((a, b) => sortedGenre.indexOf(a[1]) - sortedGenre.indexOf(b[1]))
    .sort((a, b) => {
        if (a[2] === b[2]) return a[0] - b[0];
    });
    // console.log(musicInfos);
    
    musicInfos.forEach(([idx, genre]) => {
        if (ans.get(genre).length >= 4) return;
        ans.set(genre, ans.get(genre) + String(idx) + ' ') ;
    });
    // console.log(ans);
    
    return [...ans].sort((a, b) => sortedGenre.indexOf(a[0]) - sortedGenre.indexOf(b[0])).flatMap(a => a[1].trim().split(' ')).map(Number);
    
    
    
    
    // return answer;
}