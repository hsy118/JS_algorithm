function solution(arr) {
  const totalSum = arr.reduce((sum, current) => {
    return sum + current;
  }, 0);
  var answer = totalSum / arr.length;

  return answer;
}
