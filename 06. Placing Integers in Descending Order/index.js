// 답1
function solution1(n) {
  const ChangeNum = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(ChangeNum);
}

solution(118372);

// 답2
function solution2(n) {
  const ChangeNum = String(n)
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");

  return Number(ChangeNum);
}

solution(118372);
