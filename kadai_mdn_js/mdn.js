const date = new Date();
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
];

/* const today = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
}; */

console.log(year + '年' + month + '月' + day + '日');