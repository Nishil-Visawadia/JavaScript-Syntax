// Useful string properties and methods

let userName = " User Name ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));

userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();

console.log(userName);

phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);