#include <string>
#include <vector>
#include <sstream>
#include <map>

using namespace std;

vector<string> solution(vector<string> record) {
    vector<string> answer;
    
    vector<string> behavior(record.size(), "");
    vector<string> id(record.size(),"");
    vector<string> name(record.size(), "");
    
    for (int i = 0; i < record.size(); ++i) {
        istringstream ss(record[i]);
        string token;
        
        getline(ss, token, ' ');
        behavior[i] = token;
        
        getline(ss, token, ' ');
        id[i] = token;
        
        if (getline(ss, token, ' '))
            name[i] = token;
    }
    
    
    map<string, string> m;
    
    for (int j = (int)record.size() - 1; j >= 0; --j) {
        if (behavior[j] != "Leave" && (m.find(id[j]) == m.end()))
            m.insert(make_pair(id[j], name[j]));
    }
    
    for (int i = 0; i < record.size(); ++i)
        name[i] = m[id[i]];
    
    
    for (int i = 0; i < record.size(); ++i) {
        
        if (behavior[i] == "Enter")
            answer.push_back(name[i] + "님이 들어왔습니다.");

        else if (behavior[i] == "Leave")
            answer.push_back(name[i] + "님이 나갔습니다.");
        
    }
    
    printf("%s", name[0].c_str());
    
    return answer;
}