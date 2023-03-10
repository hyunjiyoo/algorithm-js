function solution(skill, skill_trees) {
    const notSkillPattern = new RegExp(`[^${skill}]`, 'g');
    const skills = skill_trees.map((s) => s.replaceAll(notSkillPattern, ''));
    const patterns = [...skill].map((_, i, sk) => sk.slice(0, sk.length - i).join(''));

    return skills.reduce((acc, skill) => 
        acc  + (patterns.filter((p) => p === skill).length || skill === '')
    , 0);
}