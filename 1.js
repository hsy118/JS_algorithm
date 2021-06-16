function solution(paper) {
  let cntArr = new Array(10001).fill(0);
  let quoTotal = 0;
  let quoCnt = 0;

  for (const quotation of paper) {
    cntArr[quotation] += 1;
  }

  for (let i = 10001; i >= 0; i--) {
    while (cntArr[i]) {
      quoTotal += i;
      quoCnt += 1;
      cntArr[i] -= 1;
      if (quoTotal < quoCnt * quoCnt) {
        return quoCnt - 1;
      }
    }
  }
  return quoCnt;
}
