function solution(numbers) {
  const len = numbers.length;
  let cntArr = new Array();
  cntArr.push(new Array(1801).fill(0));
  cntArr.push(new Array(1801).fill(0));

  cntArr[0][900 + numbers[0]] = 1;
  cntArr[0][900 - numbers[0]] = 1;

  for (let i = 1; i < len; i++) {
    let arrIdx = i % 2;
    cntArr[arrIdx] = new Array(1801).fill(0);

    for (let x = 0; x < 1801; x++) {
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
  return len % 2 ? cntArr[0][900] : cntArr[1][900];
}

solution([1, 1, 1, 1]);
