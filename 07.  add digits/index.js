// 답1
function solution1(n) {
  var answer = 0;

  const aaa = String(n)
    .split("")
    .map((list) => Number(list));

  for (let i = 0; i < aaa.length; i++) {
    answer = answer + aaa[i];
  }

  return answer;
}

console.log(solution(123));

// 답2
function solution2(n) {
  const aaa = String(n)
    .split("")
    .map((list) => Number(list));

  return aaa.reduce((a, b) => a + b, 0);
}

console.log(solution(123));
