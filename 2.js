function solution(n) {
  let rest = (n % 15) + (n >= 15 && 15);
  const restArr = [
    0, -1, -1, 1, -1, 1, 2, -1, -1, 3, 2, 3, 4, 3, 4, 3, 4, 5, 4, 5, 4, 5, 6, 5,
    6, 5, 6, 7, 8, 7,
  ]; // 여기 홍덕이 다시 물어보기

  if (restArr[rest] === -1) {
    return -1;
  } else {
    return 3 * (parseInt(n / 15) - (n >= 15 && 1)) + restArr[rest];
  }
}
