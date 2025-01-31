const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const yearString = year.toString();
const monthString = month.toString();
const dateString = date.toString();
const todayString = yearString+'年'+monthString+'月'+dateString+'日';
console.log(todayString);