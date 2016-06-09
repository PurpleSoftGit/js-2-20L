// 1

month = prompt("Какой сейчас месяц?");
if (month == "сентябрь") {
    alert("Ну конечно же сентябрь!");
} else {
    alert("Та ну ты что? сентябрь же!");
}

// 2

var nmbr=+prompt("Введите любое целое число");

if(nmbr>0){
    alert("чет много")
}
else if(nmbr<0){
    alert("чет мало")
}
else if(nmbr==0){
    alert("твое значение - полный ноль")
}

// 3

var x = 4, y = 6;
(x + y >= 9) ? alert("дак отож!"): alert("no");

// 4

q:
    do {
        nmbr = +prompt("Введи, больше 100");
        if (!nmbr) break q;
    } while (nmbr < 101);
// интересный момент, когда ставишь < 100, 100 тоже считает в качестве окончания для цикла. А нам нужно больше 100!

// 5

var a = +prompt('Enter a', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert('2,3');
        break;
    case 3:
        alert('2,3');
        break;
    default:
        alert('Leave this place');
}

// 6

x = prompt("Введите число");
n = prompt("Выберите степень");
function pow(x, n){
    j = 1;
    for(var i = 0; i < n; i++)
    {
        j = j * x;
    }
    return(j);
}
alert(pow(x, n));
