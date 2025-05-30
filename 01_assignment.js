//1ST - Primitive data type assignment
/* let firstName='Anand'
let companyName='TRC pvt ltd'
let phoneNumber=9965895625;
var username="null";
var pwd='nul';
var age='30';
console.log(typeof username);
console.log(typeof pwd,age);
console.log(typeof firstName);
console.log(typeof firstName);
console.log(typeof companyName);
console.log(typeof phoneNumber);
let isAustomation;
console.log(isAustomation);
console.log(typeof isAustomation);
let hasplaywirght = 'Y1.1.1.1.1.1'
console.log(hasplaywirght);
console.log(typeof hasplaywirght);
var username="null";
var pwd='nul';
var age='30';
console.log(username);
console.log(pwd,age);
console.log(age);
var accountNumber;
console.log(accountNumber);
console.log(typeof accountNumber);
var phoneNumber = null;
console.log(accountNumber);
console.log(typeof phoneNumber); */

 //2 -Number Type
/* let number = 1;
function checkNumber(num) {
    let result;
    if (num > 0) {
        result = "The number is positive";
    } else if (num < 0) {
        result = "The number is negative";
    } else {
        result = "The number is zero";
    }
    return result;
}
let result = checkNumber(number); 
console.log(result);
 */
//3rd-conditional statement
/* let browserVersion = "852.302.100"
let browser= "Blink";
let browser1 = "Edge";
let browserVersion1 = "852.302.101"
let browser2 = "firefox";
let browserVersion2 = "852.302.103"
function getbrowserName() {
    if (browser === 'Blink') {
        console.log(`the broswer is Chrome` + browserVersion);
    } else {
        console.log(`the broswer is not supported`+ browserVersion1);
    }
    if (browser1 === 'Edge') {
        console.log(`the broswer is Chrome` + browserVersion1);
    } else {
        console.log(`the broswer is not supported`+ browserVersion1);
    }
    if (browser2 === 'Firefox') {
        console.log(`the broswer is Chrome` + browserVersion2);
    } else {
        console.log(`the broswer is not supported`+ browserVersion1);
    }
}
    
getbrowserName()
console.log(browserVersion, browserVersion1, browserVersion2);
function runTests(testType) {
   switch (testType) {
      case 'smoke':
         Console.log(`the runtest is smoke` + browserVersion);
         break;
      case 'sanity':
         console.log(`the runtest is sanity` + browserVersion);
         break;
      case 'regression':
         console.log(`the runtest is regression` + browserVersion);
         break;
      default:
         console.log(`the broswer is not supported`);
   }
}
runTests()
 */
// 4th - grade /* 
/* function Grade(score) {
   let grade;
   switch (score) {
      case (score >= 85):
         grade = 'A'
         console.log('the grade is A');
         break;
      case (score <= 85 && score >=70):
         grade = 'B'
         console.log('the grade is B');
         break;
      case (score <= 69 && score >=55):
         grade = 'c'
         console.log('the grade is C');
         break;
      default:
         grade = 'D'
         console.log('the grade is D');
         break;
   }
}
let score = '90';
Grade(score);
 */

//5th assignment - js functions
/* function funName1(){

let a=10;
const b=20;
return a+b;
}
console.log(funName1())
let funName2 = function()
{
    console.log("Hello Team this is anonymous");
}
funName2()

let funName3 =() =>
    console.log("hello team it is arroww function");
funName3();

const funName4 = (a,b) => a+b;
console.log(funName4(5,5)); */