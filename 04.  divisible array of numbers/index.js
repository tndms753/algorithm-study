// 답1
function solution1(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
      answer.sort((a, b) => a - b);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));

// 답2
function solution2(arr, divisor) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const fillter = arr[i] % divisor;

    if (fillter === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray.length === 0 ? [-1] : newArray.sort((a, b) => a - b);
}

// 답3
function solution3(arr, divisor) {
  var answer = [];
  arr.map((o) => {
    o % divisor === 0 && answer.push(o);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
