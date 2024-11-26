let arr = [];

while (true) {
    let num = prompt("Сан енгізіңіз (тек жұп сандар қабылданады):");

    if (isNaN(num)) {
        alert("Сан енгізуіңіз керек!");
        continue;
    }

    if (num % 2 == 0) {
        alert("Цикл тоқтатылды. Жазылған сандар:", arr);
        break;
    }

    arr.push(num);
}
