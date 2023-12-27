//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: 


// პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში გვაქვს ერთი მთავარი განსხვავება-
// პრიმიტიულ მონაცემთა ბაზას ვერ მივანიჭებთ ერთზე მეტ მნიშვნელობას,ხოლო არაპრიმიტიულს შეგვიძლია მივანიჭოთ იმდენი,რამდენიც გვინდა.




//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer:

//const არის ცვლადი,რომელსაც ენიჭება მხოლოდ ერთი მნიშვნელობა და წერის განმავლობაში გამოიყენება მხოლოდ ერთი მნიშვნელობით, 
// let ცვლადს კი შეგვიძლია მივანიჭოთ სხვადასხვა მნიშვნელობა სურვილისამბერ და წერის დროს გამოვიყენოთ სხვადასხვა,არაერთი მნიშვნელობით.




//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.


let age = 21; 
let names ='Mariam';
// let isStudent = false;
let Address;
let cities = null;


console.log(age);
console.log(names);
// console.log(isStudent);
console.log(Address);
console.log(cities);


let isStudent = (false);
console.log("before changes -->",isStudent)
isStudent = (true);
console.log("after changes -->",isStudent)

console.log(isStudent);

//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ

// Array არის მონაცემთა არაპრიმიტიული ტიპი,რომელსაც შეუძლია "დაიტიოს"
// არაერთი მონაცემი (value).



let User = [ 
    { 
    firstName: 'Mariam',
    lastName: 'Gagnidze',
    age: 21,
    email: 'mariamgagnidze77@gmail.com',
    address: 'Tbilisi',
    isStudent: true,
    }	
]




console.log(User);





