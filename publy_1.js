function solution(office, k) {
  let maxV = 0;
  const N = office.length;
  for (let i = 0; i < N - k + 1; i++) {
    for (let j = 0; j < N - k + 1; j++) {
      // 1 개수 확인 4중.. 16만가지
      // 시간을 줄이기 위해
      let value = 0;
      for (let x = 0; x < k; x++) {
        for (let y = 0; y < k; y++) {
          let tartgetedCell = office[i + y][j + x];
          if (targetedCell) {
            value++;
          }
        }
      }
      if (value < maxV) {
        maxV = value;
      }
    }
  }
  return maxV;
}
