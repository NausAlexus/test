let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

document.getElementById("phoneNumber").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9+-]/g, ""); // Разрешает только цифры, + и -
});
document.getElementById("authForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    // Дополнительная логика отправки формы или проверки может быть здесь
    // Например, если форма проходит валидацию, отображаем успешный alert

    alert("Registration/Login was successful");
    
    // После алерта можно отправить форму или перенаправить пользователя на другую страницу
    this.submit(); // Если нужно отправить форму после отображения алерта
});