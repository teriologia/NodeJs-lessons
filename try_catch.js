try{
    var sayi1 = 5;
    var sayi2 = 0;
    var sonuc = sayi1 / sayi2;

    if(sayi2 == 0){
        throw error("sayı 0 olamaz");
    }
}catch (error) {
    console.log(error);
}finally {
    console.log("try-catch denemesi");
}