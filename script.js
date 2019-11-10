/*1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let from = Number(+prompt('Enter from number',''));
let to = Number(+prompt('Enter to number',''));
let sum = 0;

while(from<= to){
    sum+=from;
    from++;
}

document.write(sum);*/

/*2.Запросить 2 числа и найти только наибольший общий делитель.

let str1,str2;
str1 = prompt("Введите первое число",'');
let num1 = parseInt(str1);
str2 = prompt("Введите второе число",'');
let num2 = parseInt(str2);
let delitel = 0, p, r;
if (num1 < num2){
    p=num2; num2=num1; num1=p;
}
do {
    if (num1%num2==0){
        delitel=num2;
    }
    else {
        r=num2;
        num2=num1%num2;
        num1=r;
        delitel = num2;
    }
}
while (num1%num2!=0);
if (delitel!=1) {
    document.write("Наибольшим общим делителем чисел" + str1 + " и " + str2 + " является число..." + delitel);
}
else {
    document.write("Общего делителя нет");
}*/

/*3.Запросить у пользователя число и вывести все делители этого числа.

let n = +prompt('Enter number','');

let i =1;
while (i<=n){
    i++
    if(n%i==0){
        document.write(`${i},`);
    }
}*/

/*4.Определить количество цифр в введенном числе.
let n = +prompt('Enter number','');

for(i=0;n>=1;++i){
    n/=10;

}
document.write(`${i}`);*/

/*5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
 отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
 Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10)
  для ввода чисел пользователем.

let values = [];
for(let i = 0; i < 10; i++) {
    values[i] = prompt("Введите число");
}

let statistic = {
    positive:0,
    negative:0,
    zeros:0,
    even:0,
    odd:0
}

for(let i2 = 0; i2<10;i2++) {
    if(values[i2] == "0") {
        statistic.zeros++;
    }
    if(values[i2] > 0) {
        statistic.positive++;
    }

    if(values[i2] < 0) {
        statistic.negative++;
    }
    if((values[i2] % 2) == 0) {
        statistic.even++;
    }
    if((values[i2] % 2) != 0) {
        statistic.odd++;
    }
}

alert("Положительных: " + statistic.positive);
alert("Отрицательных: " + statistic.negative);
alert("Нулей: " + statistic.zeros);
alert("Четных: " + statistic.even);
alert("Не четных: " + statistic.odd);*/


/*6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить
 пример, вывести результат и спросить, хочет ли он решить еще один пример.
  И так до тех пор, пока пользователь не откажется.

let calc;
let askAgain = true;

while (askAgain==true){
    calc = prompt("Enter your data for calculation",'');
    alert(`Answer of ${calc} is:${eval(calc)}`);

    let confirm = window.confirm("Would you like to go again?");

    if (confirm == true){
        askAgain = true;
    } else {
        askAgain = false;
    }
}*/

/*7.Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).

let str;
let move;
let end;
let start;
let askAgain = true;
while (askAgain==true){
    str = prompt("Enter number",'');
    move = +prompt("Enter how much move ",'');
    end = String(str).substr(move);
    start = String(str).substr(0, move);

    alert(`${end}${start}`);


    let confirm = window.confirm("Would you like to go again?");

    if (confirm == true){
        askAgain = true;
    } else {
        askAgain = false;
    }
}*/

/*8.Зациклить вывод дней недели таким образом: «День
недели. Хотите увидеть следующий день?» и так до тех
пор, пока пользователь нажимает OK.

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
}*/

/*9.Вывести таблицу умножения для всех чисел от 2 до 9.
 Каждое число необходимо умножить на числа от 1 до 10.

document.write('<table border="1">');
for (let j = 1; j <= 10; j++) {
    document.write("<tr>");
    for (let i = 1; i <= 9; i++)
        document.write("<td>" + i * j + "</td>");
    document.write("</tr>");
}
document.write("</table>");*/

/*Игра «Угадай число».
По условию как написано в ДЗ не сделала, но сделал другую "Угадай число".
Каждый раз промежуток угадывания уменьшается, на последок нужно угадать
 число от 50-60.Как только угадываешь игра заканчывается.

let num;
let rand;
do {
    num = +prompt("Введите число от 0 до 100", 0);
    rand = Math.floor(Math.random() * (100 - 0) + 0);
    alert(`Вы ввели: ${num}, НО случайно сгенерированное число: ${rand}`);

    if(num!==rand){
    num = +prompt("Ведите число от  20 до 80", 0);
    rand = Math.floor(Math.random() * (90 - 20) + 20);
    alert(`Вы ввели: ${num}, НО случайно сгенерированное число: ${rand}`);

    num = +prompt("Ведите число от 30 до 70", 0);
    rand = Math.floor(Math.random() * (80 - 30) + 30);
    alert(`Вы ввели: ${num}, НО случайно сгенерированное число: ${rand}`);

    num = +prompt("Ведите число от  40 до 60", 0);
    rand = Math.floor(Math.random() * (70 - 40) + 40);
    alert(`Вы ввели: ${num}, НО случайно сгенерированное число: ${rand}`);

    while (num!==rand){
    num = +prompt("Ведите число от  50 до 60", 0);
    rand = Math.floor(Math.random() * (60 - 50) + 50);
    alert(`Вы ввели: ${num}, случайно сгенерированное число: ${rand}`);
     }
     }else {
    alert(`you win!`);
    }
}while (num!==rand && num<=100);

alert(`YOU ARE COOL! YOU WIN!`);*/

























