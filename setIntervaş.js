var sayi = 0;

var sayi_art = setInterval(function () {
    ++sayi;
    console.log(sayi);

    if (sayi == 5)
    {
        clearInterval(sayi_art);
    }
}, 1000);