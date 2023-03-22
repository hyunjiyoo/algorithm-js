function solution(today, terms, privacies) {
    const answer = [];
    
    const strToday = today.replaceAll('.', '')*1;
    const termInfo = {};
    terms.map((t) => t.split(' '))
         .forEach(([type, expiration]) => { termInfo[type] = +expiration; });
    
    // console.log(strToday);
    
    privacies.map((p) => p.split(' ')).forEach(([date, term], i) => {
        const [year, month, day] = date.split('.').map(Number);
        
        let y, m, d;
        if (month + termInfo[term] > 12) {
            y = year + Math.floor((month + termInfo[term]) / 12);
            m = (month + termInfo[term]) % 12;
            // console.log(m)
            if (m === 0) {
                m = 12;
                y--;
            } 
            // m = m === 0 ? 12 : m;
            // console.log(m);
            if (day === 1) {
                d = 28;
                m--;
                if (m === 0) {
                    m = 12;
                    y++;
                }
            } else {
                d = day - 1;
            }
        } else {
            y = year;
            m = month + termInfo[term];
            if (day === 1) {
                d = 28;
                m--;
                if (m === 0) {
                    m = 12;
                    y++;
                }
                
            } else {
                d = day - 1;
            }
        }
        
        const strDate = y.toString() + m.toString().padStart(2, '0') + d.toString().padStart(2, '0');
        // console.log(strDate < strToday);
        // console.log(strToday)
        if (strDate*1 < strToday) {
            answer.push(i+1);
        }
    });
    
    return answer;
}

// "2022.12.08", ["A 6"], ["2022.06.08 A"], [1]
// "2021.12.08", ["A 18"], ["2020.06.08 A"], [1]