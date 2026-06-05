// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str="hello";
// var undifine;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);


// var bigInt=123n;
//  var symbol=Symbol('li');

//  console.log(typeof bigInt);
//  console.log(typeof symbol);

//  var arr =[10,20,30,40];
//  console.log(typeof arr,arr);
//  var obj={
//     name:"surya",
//     dept:["AI&DS","CT"]
//  }
//  console.log(typeof obj,obj)


// var a = 20;
// var b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a % b);
// console.log(a / b);

// var a = true
// var b = false

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// a = 10;
// b = 20;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// a=10;
// b=20;
// a+=b;
// console.log(a);
// a-=b;
// console.log(a);
// a*=b;
// console.log(a);
// a%=b;
// console.log(a);
// a/=b;
// console.log(a)
// var a = 20
// console.log(a++);
// console.log(++a);
// var a =30;
// console.log(a--);
// console.log(--a);
// a=1;
// b=1;
// c=0;
// var result= a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result)

// var a=10
// var b=20

// if(true)
//     {
//     console.log("${a} + ${b} = ${a+b}")
// }

// var a = 10
// let b = 15
// if(true)
// {
//     console.log(a);
//     let b = 20
//     console.log(b)
// }
// console.log(a)
// console.log(b)
// var a=20
// if(a%2==0){
//     console.log(`${a} is even`)
// }
// else{
//     console.log(`${b} is odd`)
// }
// var mark = 90;
// if(mark>=90){
//     console.log("O grade")
// }
// else if(mark>=70){
//     console.log("A grade")
// }
// else if(mark >=35){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }
//terniary operator

// var a=5
// var result=a%2===0 ? "even" : "odd";
// console.log(result)

// mark=30;
// var result=(mark>=90)?"o grade":
//            (mark>=70)?"a A grade":
//            (mark>=35)?"pass":
//            "fail";
//            console.log(result)

// var day=5;
// switch(day){
//     case 1:
//     {
//          console.log("sunday")
//     break;

//     }
//     case 2:{
//          console.log("monday")
//     break;
//     }
//     case 3:{
//          console.log("tuesday")
//     break;
//     }
//     case 4:{
//          console.log("wednesday")
//     break;
//     }
//     case 5:{
//          console.log("thursday")
//     break;
//     }
//     case 6:{
//          console.log("friday")
//     break;
//     }
//     case 7:{
//          console.log("saturday")
//     break;
//     }
//     default:{
//          console.log("invalid")
//     break;
//     }
// }

// for(var i=0;i<=10;i++)
// {
//     console.log(i)
// }
//explanation for val/10: Iteration 1: 10246 / 10 = 1024.6. Flooring this gives 1024.Iteration 2: 1024 / 10 = 102.4. Flooring this gives 102.Iteration 3: 102 / 10 = 10.2. Flooring this gives 10.Iteration 4: 10 / 10 = 1. Flooring this gives 1.Iteration 5: 1 / 10 = 0.1. Flooring this gives 0 
// var val=10246
// var count=0;
// while(val>0){
//     count++;
//     val=Math.floor(val=val/10)
// }
// console.log(count)

// do{
//     console.log("Do...While")
// }while(false)

// for(let i=1;i<=10;i++){if(i%2===0){
//      continue;
// }
//     console.log(i);

// }
// function add()
// {
//     console.log(10+15)
// }
// add()

// function add(a,b)
// {
//     console.log(a+b)
// }
// add(10,5)
// arro function
// var demo= () => {
//     console.log(5+10);
// }
// demo();
// arro with parameter
// var demo=(a=1,b=2) => {
//     console.log(a+b)
// }
// demo(10,20)
// demo()
// demo(10)

// spread operator(...)
// var arr=[10,20,30]
// var arr2=[...arr,40,50]
// console.log(arr)
// console.log(arr2)
// destructuring operator

// var [m1,m2,m3,m4,m5]=[77,89,90,97,87]
// console.log(m1,m2,m3,m4,m5)
// destructuring in object

// var {name,mobile,dept,email,isActive}={
//     name:"surya",
//     mobile:1234567890,
//     dept:["AI&DS","CT"],
//     email:"surya@gmail.com",
//     isActive:"true"

// }
// console.log(name,mobile,dept,email,isActive)
// var arr=[10,20,40,70]
// for(let index in arr){
//     console.log(index)
// }
// for(let value of arr){
//     console.log(value)
// }
// var obj={
//     name:"surya",
//     dept:"AI&DS",
//     mobile:1234567890
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

// var arr=[1,2,3,4]
// var result=arr.map((val) => (val*2))
// console.log(result)
// console.log(arr)

// filter
// var arr=[1,2,3,4]
// var even=arr.filter((val) => (val%2===0))
// var sum=arr.reduce( (add,val) => (add+val),0)
// console.log(sum)
// console.log(even)
// console.log(arr)
// var username={
//     name:"surya",
//     dept:"AI&DS"
// }
// var user={
//     ...username,
//     password:123
// }
// console.log(user)