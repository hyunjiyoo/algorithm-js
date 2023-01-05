function eatFood(food) {
  let eated = '';
  food.forEach((f, i) => {
      if (i === 0) return;
      eated += i.toString().repeat(f / 2);
  });
  return eated;
}

function solution(food) {
  const player1 = eatFood(food);
  const player2 = [...player1].reverse().join('');
  
  return player1 + '0' + player2;
}