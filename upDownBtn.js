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
    console.log('btn is disabled');
}
// Выключаем кнопку при загрузке страницы
if (position === 0) {
    disableBtn(btnUp);
}

// Включаем кнопку
function enableBtn(enabBtn) {
    enabBtn.classList.remove("disabled");
    enabBtn.classList.add("btn-success")
    console.log('btn is active')
}

//scroll-им по страничке 
var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
var offSet = 30;
window.addEventListener("scroll", function() {

    console.log(document.body.scrollTop);
    if (document.body.scrollTop <= winheight + offSet) {
        position = 0;
        enableBtn(btnDown);
        disableBtn(btnUp);
    } else if (document.body.scrollTop <= 2 * winheight + offSet) {
        position = 1;
        enableBtn(btnDown);
        enableBtn(btnUp);

    } else if (document.body.scrollTop <= 3 * winheight + offSet) {
        position = 2;
        enableBtn(btnDown);
        enableBtn(btnUp);
    } else {
        position = 3;
        disableBtn(btnDown);
        enableBtn(btnUp);
    }
});
