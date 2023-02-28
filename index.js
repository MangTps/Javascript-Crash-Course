const myName = 'Thanpisit';
let isMale = false;
let city = null;
let height = 180;
let bigNumber = 10n;
height = 172;

console.log(myName,height,isMale,city,bigNumber)

const person = {
    name: 'Thanpisit',
    height: 182,
    city: 'Bangkok'
};

console.log(person.name);

person.height = 185;

console.log(person);

person.weight = 96;

console.log(person);

const numbers = [5, 10, 15, 20];
console.log(numbers[2]);

numbers.push(25); //ใส่ค่าเข้าไป
console.log(numbers);
numbers.pop(); //ลบค่าหลังสุด 
console.log(numbers);
numbers.unshift(1); //เพิ่มค่าเข้ามาด้านหน้า
console.log(numbers);
numbers.shift(); //ลบค่าด้านหน้าออก
console.log(numbers);

let result = (10 + 5) * 2 / 2  ;
console.log(result);

let password = '';

if(password === '') {
    console.log('Password is required');
}
else if(password.length >= 8 && password.length <= 12){
    console.log("password is valid");
}
else{
    console.log("password is invalid");
}


function calculateVat(money, vat) {
    return money * vat / 100;
}

const totalVat = calculateVat(100,7);
console.log(totalVat);

const totalVat10 = calculateVat(100,10);
console.log(totalVat10);

for(let counter = 0; counter < 10; counter++) {
    // if(counter % 2 === 0){ //ปริ้นเฉพาะเลขคู่
    // console.log(counter);
    // }
    // if(counter % 2 !== 0){
    //     continue; //ให้กลับไปทำด้านบนต่อ
    // }
    // console.log(counter);
    if(counter === 5 ){
        break;
    }
    console.log(counter);
}

