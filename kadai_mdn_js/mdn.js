const today = new Date();
const today2 = today.toString();
console.log(today2);
const year = today.getFullYear();
console.log(year);
const month = today.getMonth()+1;
console.log(month);
const date = today.getDate();
console.log(date);
console.log(year,month,date)
const yearString = year.toString();
const monthString = month.toString();
const dateString = date.toString();
const todayString = yearString+'年'+monthString+'月'+dateString+'日';
console.log(todayString);