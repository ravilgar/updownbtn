// Получаем переменные для кнопок
var btnUp = document.querySelector("#btnUp");
var btnDown = document.querySelector("#btnDown");
// Создаем переменную для класса секций 'jsElms'
var elements = document.getElementsByClassName('jsElms');

// Вешаем событие onclick на кнопки
btnUp.addEventListener('click', up);
btnDown.addEventListener('click', down);

var position = 0; // Создаем переменную позиция в массиве для переключения и присваем ей значение 0 (первый элемент в массиве)
console.log(position);


function up() {
    enableBtn(btnDown);
    position -= 1; // Изменили позицию

    if (position <= 0) {
        //position перестает убывать и остается на первом элементе
        position = 0;
        // выключаем кнопку
        disableBtn(btnUp);
    }
    console.log(position);
    elements[position].scrollIntoView();
}

function down() {
    enableBtn(btnUp);

    position += 1; // Изменили позицию
    if (position >= elements.length - 1) {
        //position перестает расти и остается на последнем элементе
        position = elements.length - 1;
        // выключаем кнопку
        disableBtn(btnDown);
    }
    console.log(position);
    elements[position].scrollIntoView();
}

// Выключаем кнопку
function disableBtn(disBtn) {
    disBtn.classList.add("disabled");
    disBtn.classList.remove("btn-success");
}
// Выключаем кнопку при загрузке страницы
if (position === 0) {
    disableBtn(btnUp);
}

// Включаем кнопку
function enableBtn(enabBtn) {
    enabBtn.classList.remove("disabled");
    enabBtn.classList.add("btn-success")
}

//scroll-им по страничке 
var elementHeight = [elements[0].clientHeight, elements[1].clientHeight, elements[2].clientHeight, elements[3].clientHeight];

for (var i = 0; i < elementHeight.length; i++) {
    console.log('elementHeight[' +
        i + '] = ' +
        elementHeight[i]);
}

var navbar = document.querySelector('.navbar').clientHeight;
console.log('navbar = ' +
    navbar);
var offSet = 0;


window.addEventListener("scroll", function() {


    if (document.body.scrollTop <= navbar + elementHeight[0] + offSet) {
        position = 0;
        enableBtn(btnDown);
        disableBtn(btnUp);
        console.log('scrollLevel = ' +
            navbar + elementHeight[0] + offSet);
    } else if (document.body.scrollTop <= navbar + elementHeight[0] + elementHeight[1] + offSet) {
        position = 1;
        enableBtn(btnDown);
        enableBtn(btnUp);
        console.log('scrollLevel = ' +
            navbar + elementHeight[0] + elementHeight[1] + offSet);

    } else if (document.body.scrollTop <= navbar + elementHeight[0] + elementHeight[1] + elementHeight[2] + offSet) {
        position = 2;
        enableBtn(btnDown);
        enableBtn(btnUp);
        console.log('scrollLevel = ' +
            navbar + elementHeight[0] + elementHeight[1] + elementHeight[2] + offSet);
    } else {
        position = 3;
        disableBtn(btnDown);
        enableBtn(btnUp);
        console.log('scrollLevel = ' +
            navbar + elementHeight[0] + elementHeight[1] + elementHeight[2]+ elementHeight[3] + offSet);
    }



    console.log('scrollTop = ' +
        document.body.scrollTop);

    console.log('position = ' +
        position);
});
