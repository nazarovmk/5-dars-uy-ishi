// k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
let k = 10; // k soni
let n = 7; // n marta chiqarish

for (let i = 0; i < n; i++) {
  console.log(k);
}

// Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
let kg = 4500;

for (let i = 1; i <= 10; i++) {
  let wrap = i / 10;
  let kool = kg * wrap;
  console.log(`${wrap} kg konfet narxi: ${kool.toFixed(2)} so'm`);
}

// n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
let en = 5;

let sum = 0;
for (let i = en; i <= 2 * en; i++) {
  sum += i * i;
}
console.log(`S = ${sum}`);

// N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
let N = 5;
let som = 0;

for (let i = 1; i <= N; i++) {
  som += i ** (N - i + 1);
}

console.log(`Yig'indi: ${som}`);

//A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.
let A = 3;
let B = 8;

for (let i = A; i <= B; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i);
  }
}

// Sonning bo’luvchilarini topish;
let number = 24;

console.log(`Sonning bo'luvchilari:`);
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
