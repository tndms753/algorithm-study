// 답1
function solution(a, b) {
  var answer = 0;
  const newArray = [];

  for (let i = 0; i < a.length; i++) {
    if (a) {
      const newValue = a[i] * b[i];
      answer = answer + newValue;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
