'use strict';
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];
console.log('dfd');


console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
function getAverageAge(users) {
   return (users.reduce((sum, item) => sum + item.age, 0) / users.length).toFixed(0);

}


/*
Поисковик по словам

let str = 'Безумству храбрых поём мы славу! В бою с врагами истёк ты кровью. Но будет время и капли крови твоей горячей, как искры вспыхнут во мраке жизни и тысячи смелых сердец зажгут... безуминой жаждой свободы света';

let value = prompt('Введите слово для поиска', '');
lookFor(value);

function lookFor(lokForWord){
   str += ' ';
   let newStr = '';
   let positionNumber = str.indexOf(lokForWord);

   for(;str[positionNumber] !== ' ';){
      newStr += str[positionNumber];
      positionNumber += 1;
   }
   console.log(`Слово \"${newStr}\" найдено!`);

}
*/
/*
//Глубинное копирование
let book = {
   title: 'название',
   author: 'автор',
   inPages: 0,
   price: 0,
   size: {height: 100, width: 50}
};

let lib = cloneDeepObj({}, book);
book.size.height = 0;
console.log(lib);

function cloneDeepObj(obj, dest){
   for (let key in obj){
      if(typeof obj[key] == 'object'){
         dest[key] = cloneDeepObj({}, obj[key]);
      } else {
         dest[key] = obj[key];
      }
   }
   return dest;
}
*/
/*
let id = Symbol('ass');

alert(id.toString());
alert(id.description);
*/
/*
let a, b, resultSum, resultMul
let calculator = {
  sum() {
   resultSum = a + b;
   return this;
  },

  mul() {
    resultMul = a * b;
    return this;
  },

  read() {
    a = +prompt('a?', 0);
    b = +prompt('b?', 0);
    return this;
  },
  show(){
       alert(resultSum);
       alert(resultMul);
       return this;
  }
};

calculator.read().sum().mul().show();
*/
/*
function makeUser() {
  return {
    name: "Джон",
    u: {name: '123'},
    ref() {
      return this;
    }
  };
};

let user = makeUser();

console.log( user.ref().u.name.uu );
//Если в объекте вложен другой объект или функция возвращает значение параметра, то бывают такие конструкции как на счтрочку выше: то есть, более одной точки

*/
/*
let ask = (question, yes, no) => (confirm(question)) ? yes() :
no();
ask(

*/
/*
   let second = 0;
   let minutes = 0;
function showTime(){
   if(second == 59){
      second = 0;
      minutes++;
   } else{
   second++;
}
   console.log(`Таймер: ${minutes}:${second}`);
   setTimeout(showTime, 1000);
}

setTimeout(showTime, 1000);
*/
/*
//Многосрочная функция-стрелка
let getMassage = (i, y) =>{
   let massage = i + ' ' + y + '!';
   return massage;
}
console.log(getMassage('Привет', 'Вася'))
*/
/*
let getMassage = (i, y) => i + ' ' + y + '!';

console.log(getMassage('Привет', 'Вася'));
*/

/*
//Рекурсия - когда ф-ия вызывает саму себя. В данном случае, рекурсию можно использовать вместо for и while
function calcSumm(one, two){
   if (two === 1){
      return one;
   } else {
      return one * calcSumm(one, two -1)
   }
}

console.log(calcSumm(2, 3));
*/

/*
function calcSumm(i, u){
   let result = i + u;
   return result; //возврат результата. Когда сама функция не выводит результат: не использует alert или console.log()
}

let funRezult = calcSumm(1, 2);

console.log(`Сумма: ${funRezult}`);
*/
/*
function answer(question, yes, no){
   if((prompt(question,)) == 'y'){
      yes();
   } else no();
}

answer('Вы гомосек?',
   function (){alert('Вы согласились');},
   function (){alert('Вы не согласны');}
   )
*/
/*
function answer(question, yes, no){
   let i = prompt(question, '');
   if(i == 'y'){
      yes()
   } else no();
}

function sayY(){
   alert('Вы сказали да');
}

function sayN(){
   alert('Вы сказали нет');
}
answer('Вы поритесь в жопу?', sayY, sayN);
*/
/*
let oneNumber;
let twoNumber;
oneNumber = +prompt('Введите первое число', '');
twoNumber = +prompt('Введите второе число', '');
function plus(i, y){
   return i + y;
}
alert(plus(oneNumber, twoNumber));
*/
/*
let x = prompt('Введите число пять', '');
switch(x){
   case '1':
   case '2':
   case '3':
   alert('Ты еблан блядь???!');
   break;

   case '4':
   alert('Лох! Пидор!');
   break;

   case '5':
   alert('Ну чё, угадал сука?! Чё, самый умный блядь. Ёпт!');
   break;

   default:
   alert('Ты чё, баран сука? Зеньки разуй, введи число. А то ща опущу на бутылка бля');

}

*/
/*
metka: for(let num = 0; num < 2; num++){
   for (let size = 0; size < 3; size++) {
      if (size == 2){
         break metka;
      }
      console.log(size);
   }
}

 Метка
*/

/*
let i = 100;
for(;i; i--){
   if (i == 50) break;
   console.log(i);
}

break останавливает весь цикл на определённом моменте
*/
/*
let zieg = 0;
for(;zieg < 5; zieg++){
   if (zieg == 2) continue;
   console.log(zieg);
}

continnue не проведит именнно данную итерацию, но не останавливает работу цикла
*/

/*
let valueOne = prompt('Введите первое значение', '');
let valueTwo = prompt('Введите второе значение', '');
let result = valueOne > valueTwo;
let massage = result == true? 'Привет, привет':
   'pppppp';
alert(massage);
*/

//alert(resyltOne);
/*
let userName = prompt ('Введите пожалуйста имя','');
let userNameAgree = confirm(`Ваше имя ${userName}`);
alert(userNameAgree);
*/

/*
Больше >
Меньше <
Больше или равно >=
Меньше или равно <=
Равно ==
Не равно !==
Строгое равно ===
Строгое не равно !=

   || - или 1 || 0 = 1;  1 + 0 = 1 хоть одна 1, то будет 1
   && и 1 && 0 = 0; 1 * 0 = 0 хоть один 0, то будет 0
   !true не, противоположное значение
   ?? возвращает первый аргумент, если он null/undefiend, иначе второй i = 7  i ?? 10 = 7,  i  i ?? 10 = 10
   +'22' преобразует строку в число

i +=2; i -=2; i *=2;  одновременно присваивает и добавляет (удаляет), умножает, делит и т. д.
дикремент/инкремент ++i/--i увеличивает/уменьшает на 1

Взятие корня
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

const bigInteger = 9999999999999999999999999999999999n;
console.log(bigInteger);
console.log(typeof bigInteger); выводит тип данных
*/