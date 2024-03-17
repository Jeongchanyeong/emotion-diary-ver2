export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 날짜 -> YYYY-MM-DD 형식을 띄워야하기 때문에 0을 붙여주지 않으면 오류가 생겨 반영되지 않는다.
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
