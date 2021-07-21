function solution(n) {
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 !== 0) {
    return -1;
  }
  return Math.pow(sqrt + 1, 2);
}
