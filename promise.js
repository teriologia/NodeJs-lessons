const fonksiyon  = (sayi) => {
    return new Promise((resolve,reject) => {
        if(sayi == 4)
            resolve("çalışıyor");
        else
            reject("çalışmıyor");
    });
};

fonksiyon(4)
    .then((data) => {console.log(data); return 2;})
    .then((data) => {console.log(data); return 5;})
    .then((data) => {console.log(data);})
    .catch((error) => {console.log(error)});