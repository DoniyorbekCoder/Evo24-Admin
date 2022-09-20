export function phoneNum(phone: string) {
   const country = phone.slice(0, 4);
   const code = phone.slice(4, 6);
   const num1 = phone.slice(6, 9);
   const num2 = phone.slice(9, 11);
   const num3 = phone.slice(11, 13);

   return `(${code}) ${num1}-${num2}-${num3}`
}