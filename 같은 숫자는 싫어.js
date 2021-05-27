function solution(arr) {
  const answer = [];
  answer.push(arr[0]);
  let curValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (curValue === arr[i]) {
      continue;
    } else {
      answer.push(arr[i]);
      curValue = arr[i];
    }
  }

  return answer;
}
