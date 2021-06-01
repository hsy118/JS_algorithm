function solution(a, b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let date = b;
  for (let i = 0; i < a - 1; i++) {
    date += month[i];
  }
  const idx = (date - 1) % 7;
  console.log(date);
  const answer = day[idx];
  console.log(answer);
  return answer;
}

function solution(a, b) {
  const month = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016-${a}-${b}`);
  const idx = date.getDay();
  console.log(idx);
  return month[idx];
}
