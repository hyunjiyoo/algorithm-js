function solution(files) {
    return files.sort((a, b) => {
        const heada = a.match(/^\D+/)[0].toLowerCase();
        const headb = b.match(/^\D+/)[0].toLowerCase();

        if (heada < headb) return -1;
        if (heada > headb) return 1;
        
        const numbera = +(a.match(/\d+/)[0]);
        const numberb = +(b.match(/\d+/)[0]);

        return numbera - numberb;
    });
}