function solution(arr1, arr2) {
  const answer = new Array();

  for (let i = 0; i < arr1.length; ++i) {
    answer.push(new Array(arr1[0].length).fill(0));

    for (let j = 0; j < arr1[0].length; ++j)
      answer[i][j] = arr1[i][j] + arr2[i][j];
  }

  return answer;
}
