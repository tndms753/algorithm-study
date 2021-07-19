// 답 1
function solution1(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  sum = sum / arr.length;

  return sum;
}

solution1([1, 2, 3, 4]);

// 답 2
function solution2(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
solution2([1, 2, 3, 4]);