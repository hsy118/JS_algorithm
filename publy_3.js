function solution(numbers) {
  const len = numbers.length;

  let cntArr = new Array();
  // 1801 ->최악 -9 에서 9의 경우 -18, 18 이면 36+1 = 37
  const cntLen = len * 18 + 1;
  const zeroIdx = len * 9 + 1;
  cntArr.push(new Array(cntLen).fill(0));
  cntArr.push(new Array(cntLen).fill(0));

  cntArr[0][zeroIdx + numbers[0]] = 1;
  cntArr[0][zeroIdx - numbers[0]] = 1;

  for (let i = 1; i < len; i++) {
    let arrIdx = i % 2;
    cntArr[arrIdx] = new Array(cntLen).fill(0);

    for (let x = 0; x < cntLen; x++) {
      if (arrIdx) {
        if (cntArr[0][x]) {
          cntArr[arrIdx][x + numbers[i]] += cntArr[0][x];
          cntArr[arrIdx][x - numbers[i]] += cntArr[0][x];
        }
      } else {
        if (cntArr[1][x]) {
          cntArr[arrIdx][x + numbers[i]] += cntArr[1][x];
          cntArr[arrIdx][x - numbers[i]] += cntArr[1][x];
        }
      }
    }
  }
  return len % 2 ? cntArr[0][zeroIdx] % 100000 : cntArr[1][zeroIdx] % 100000;
}
