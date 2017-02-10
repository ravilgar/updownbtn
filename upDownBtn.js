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
    btnDown.disabled = false;
    btnDown.classList.add("btn-success")
    console.log('btnDown is active')
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
    btnUp.disabled = false;
    btnUp.classList.add("btn-success")
    console.log('btn is active')

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
    disBtn.disabled = true;
    disBtn.classList.remove("btn-success");
    console.log('btn is disabled');
}
// Выключаем кнопку при загрузке страницы
if (position === 0) {
    disableBtn(btnUp);
}



// Включаем кнопку
function enableBtn(enabBtn) {}


