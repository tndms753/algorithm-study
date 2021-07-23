// 답1
function solution(n) {
  return String(n)
    .split("")
    .reverse(n)
    .map((list) => Number(list));
}

solution(12345);
