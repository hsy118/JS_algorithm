function solution(answers) {
  var answer = [];
  const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const compare = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (A[i % 5] === answers[i]) {
      compare[0] += 1;
    }
    if (B[i % 8] === answers[i]) {
      compare[1] += 1;
    }
    if (C[i % 10] === answers[i]) {
      compare[2] += 1;
    }
  }
  let comValue = 0;
  for (let j = 0; j < compare.length; j++) {
    if (compare[j] > comValue) {
      answer.pop();
      answer.push(j + 1);
      comValue = compare[j];
    } else if (compare[j] < comValue) {
      continue;
    } else {
      answer.push(j + 1);
    }
  }
  return answer;
}
