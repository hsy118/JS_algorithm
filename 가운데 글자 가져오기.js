function solution(s) {
  var answer = "";
  // 5글자 0 1 2 3 4 = 2
  // 4글자 0 1 2 3 = 12
  // 홀수 면 2.5 3.5 니까 버림으로 그다음 정수형
  // 짝수 면 2, 3 니까 1,2 혹은 2,3 = 나눈수-1, 나눈수
  // if (s.length % 2 === 0) {
  //   // 짝수면
  //   const midNum = s.length / 2;
  //   answer = `${s[midNum - 1]}${s[midNum]}`;
  // } else {
  //   // 홀수면
  //   const midNum = Math.floor(s.length / 2);
  //   answer = `${s[midNum]}`;
  // }
  const midNum = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[midNum] : s[midNum - 1] + s[midNum];
}
