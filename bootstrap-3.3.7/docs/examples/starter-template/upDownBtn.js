// Получаем переменные для кнопок
var btnUp = document.querySelector("#btnUp");
var btnDown = document.querySelector("#btnDown");
// Создаем переменную для класса секций 'jsElms'
var elements = document.getElementsByClassName('jsElms');

// Вешаем событие onclick на кнопки
btnUp.addEventListener('click', up);
btnDown.addEventListener('click', down);

var position = 0; // Создаем переменную позиция в массиве для переключения и присваем ей значение 0 (первый элемент в массиве)

function up() {
    btnDown.disabled = false;
    btnDown.classList.add("btn-success")
    console.log('btnDown is active')
    position -= 1; // Изменили позицию

    if (position <= 0) {
        //position перестает убывать и остается на первом элементе
        position = 0;
        btnUp.disabled = true;
        btnUp.classList.remove("btn-success")
        console.log('btnUp is disabled')
    }
    console.log(position);
    elements[position].scrollIntoView();
}

function down() {
    btnUp.disabled = false;
    btnUp.classList.add("btn-success")
    console.log('btnUp is active')

    position += 1; // Изменили позицию
    if (position >= elements.length - 1) {
        //position перестает расти и остается на последнем элементе
        position = elements.length - 1;
        btnDown.disabled = true;
        btnDown.classList.remove("btn-success")
        console.log('btnDown is disabled')

    }
    console.log(position);
    elements[position].scrollIntoView();
}
