var stdEmail=localStorage.email;
var std=JSON.parse(window.localStorage.getItem(stdEmail));
var stdfname = std.fname;
var stdlname = std.lname;
var encode=localStorage.result;
var stdResult=atob(encode);

console.log(stdfname);
console.log(stdlname);
console.log(stdEmail);
console.log(stdResult);

var fnamelocation =document.getElementById("fnamelocation");
var lnamelocation =document.getElementById("lnamelocation");
var emaillocation =document.getElementById("emaillocation");
var resultlocation =document.getElementById("resultlocation");

fnamelocation.innerText=stdfname;
lnamelocation.innerText=stdlname;
emaillocation.innerText=stdEmail;
resultlocation.innerText=stdResult;






