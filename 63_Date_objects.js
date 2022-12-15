// The Date object is used to work with dates & times

let date = new Date();

/*
let date1 = new Date(0);
let date2 = new Date(2023, 0, 1, 2, 3, 4, 5) // 2023 is year, 0 is month, 1 is day, 2 is hour, 3 is minute, 4 is second, 5 is millisecond.
let date3 = new Date("January 1, 2023 00:00:00");
*/

/*
let year = date.getFullYear();
let month = date.getMonth(); // jan = 0
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let millisecond = date.getMilliseconds();
*/

/*
date.setFullYear(2024); // this changes the year (you can set the year of your choice)
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

// date = date.toLocaleString();
console.log(date);
// document.getElementById("myLabel").innerHTML = date;

/*
console.log(date1);
console.log(date2);
console.log(date3);
console.log(year);
console.log(month);
console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(hour);
console.log(minute);
console.log(second);
console.log(millisecond);
*/

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
}
// document.getElementById("myLabel").innerHTML = formatDate(date);

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';

    hours = (hours % 12) || 12;
    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
document.getElementById("myLabel").innerHTML = formatTime(date);

/*
<body>
    <label id="myLabel"></label>
    <script src="63_Date_objects.js"></script>
</body>
*/