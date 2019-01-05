const dizi = [1,2,3];
const dizi2 = [...dizi,4,5,6];

console.log(dizi2);

const dizi3 = [1,2,34,5,6,7,8,9,22,11];
const [deger1,deger2,deger3,...rest] = dizi3;

console.log(rest);