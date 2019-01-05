const degerler = {
    deger1: "değer1",
    deger2: "değer2",
    deger3: {isim:"serdar"}
};

const {deger1, deger2, deger4 = "değer4", deger3: {isim}} = degerler;
console.log(deger1, deger2, deger4,isim);

const dizi = [
    1,2,3
]

const [dizi1,dizi2,dizi3] = dizi;

console.log(dizi1,dizi2,dizi3);