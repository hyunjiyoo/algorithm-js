function solution(record) {
    const nameList = [];
    const records = record.map((str) => {
        const [action, id, name] = str.split(' ');        
        name && (nameList[id] = name);
        
        switch (action) {
            case 'Enter':
                return `${id}+님이 들어왔습니다.`;
            case 'Leave':
                return `${id}+님이 나갔습니다.`;
            case 'Change':
                return '';
        }
    });
    
    return records.filter(r => r).map((s) => {
        const [id, action] = s.split('+');
        return nameList[id] + action;
    });
}
