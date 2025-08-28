let n1 = 10, n2 = 20;

console.log(`Addition(${n1}+${n2}): `+(n1+n2));
console.log(`Subtraction(${n1}-${n2}): `+(n1-n2));
console.log(`Multiplication(${n1}*${n2}): `+(n1*n2));
console.log(`Division(${n1}/${n2}): `+(n1/n2));

if(n1==n2) console.log(`${n1} and ${n2} both are equals`);
else if(n1>n2) console.log(`${n1} is greater than ${n2}`);
else console.log(`${n2} is greater than ${n1}`);

if(n1<30 && n2<30) console.log(`${n1} and ${n2} both are less than 30`);
else if(n1>30 && n2>30) console.log(`${n1} and ${n2} both are greater than 30`);