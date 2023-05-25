var slider = document.getElementById("range");
var output = document.getElementById("procentValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

document.querySelector('.dropdown__button').addEventListener('click', function () {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_open');
    document.querySelector('.dropdown__button').classList.toggle('dropdown__button_open');
})

document.querySelectorAll('.dropdown__list-item').forEach(function (listItem) {
    listItem.addEventListener('click', function () {
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__input').value = this.dataset.value;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_open');
        document.querySelector('.dropdown__button').classList.remove('dropdown__button_open');
    })
})

document.querySelector('.open-menu').addEventListener('click', function () {
    document.querySelector(".nav-mobile").classList.toggle("nav-mobile_opened");
})
