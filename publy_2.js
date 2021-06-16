function solution(estimates, k) {
  let maxEst = 0;

  for (let i = 0; i < k; i++) {
    maxEst += estimates[i];
  }
  let lastEst = maxEst;
  for (let i = k; i < estimates.length; i++) {
    let thisEst = lastEst;
    thisEst = thisEst + estimates[i] - estimates[i - k];

    if (thisEst > maxEst) {
      maxEst = thisEst;
    }
    lastEst = thisEst;
  }
  return maxEst;
}
