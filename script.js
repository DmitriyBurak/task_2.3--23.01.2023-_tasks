
// task 1
    let password = 'qwerty';
    let enter = prompt('Введите пароль');
    if (enter === password) {
        alert("Пароль введен верно");
    } else {
        alert("Пароль введен неправильно");
    }

// task 2
    let c = 13;
    if (c > 0 && c < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
    
// task 3
    let d = 12;
    let e = 101;
    if (d > 100 || e > 100) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
    
// task 4
    let a = '2';
    a = Number(a);    
    let b = '3';    
    b = Number(b);     
    alert(a + b);

// task 5
   let month = prompt ('Введите порядкое число месяца (от 1 до 12 включительно)');
   switch (month) {
    case '1':
        console.log('Значит зима...');
        break;
    case '2':
        console.log('Значит зима...');
        break;
    case '3':
        console.log('Ах, весна...');
        break;
    case '4':
        console.log('Ах, весна...');
        break;
    case '5':
        console.log('Ах, весна...');
        break;
    case '6':
        console.log('Лето!!!...');
        break;
    case '7':
        console.log('Лето!!!...');
        break;
    case '8':
        console.log('Лето!!!...');
        break;
    case '9':
        console.log('Получается осень...');
        break;
    case '10':
        console.log('Получается осень...');
        break;
    case '11':
        console.log('Получается осень...');
        break;
    case '12':
        console.log('Значит зима...');
        break;    
    default: console.log('Ну договаривались же вводить от 1 по 12, ну... ');
        break;
   }
    
// task 6
// макет
    
// task 7*
// 7.1
   let myNum = prompt('Пожалуйста, введите любое число');
    if (isNaN(myNum)){
        console.log('Введите число');
    } else if (myNum % 2 == 0){
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
      
// task 8*
  let clientOS = prompt('Ваша ОС: 0-iOS, 1-Android');
  if (clientOS === null || clientOS === ""){
    console.log('Нужно ввести число!');
  } else if (clientOS == 0) {
    console.log('Установите версию приложения для iOS по ссылке');
  } else if (clientOS == 1){
    console.log('Установите версию приложения для Android по ссылке')
    } else {
    console.log('Неверное число (0 или 1)')
  }

// task 9*
let clientOS = prompt('Ваша ОС: 0-iOS, 1-Android');
let year = prompt('Год выпуска Вашего устройства ');
let clientDeviceYear = 2015;
let message = (clientOS == 0 && year < clientDeviceYear) ? 'Установите облегченную версию приложения для iOS по ссылке' : (clientOS == 0 && year >= clientDeviceYear) ? 'Установите версию приложения для iOS по ссылке' : (clientOS == 1 && year < clientDeviceYear) ? 'Установите облегченную версию приложения для Android по ссылке' : 'Установите версию приложения для Android по ссылке'
console.log(message);