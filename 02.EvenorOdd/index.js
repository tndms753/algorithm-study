// 답 1
function solution1(num) {
  var answer = "";

  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
}
solution(5);

// 답 2

function solution2(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
solution(5);
