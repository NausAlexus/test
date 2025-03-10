const burgerMenu = document.getElementById('burgerMenu');
const navList = document.getElementById('navList');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
    burgerMenu.classList.toggle('active');
});
document.getElementById("phoneNumber").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9+-]/g, ""); // Разрешает только цифры, + и -
});
