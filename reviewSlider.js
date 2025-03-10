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
function validateForm() {
    let phoneNumber = document.getElementById("phoneNumber");
    let privacyPolicy = document.getElementById("privacy-policy");

    if (phoneNumber.checkValidity() && privacyPolicy.checkValidity()) {
        alert("Registration/Login was successful");
    } else {
        phoneNumber.reportValidity();
        privacyPolicy.reportValidity();
    }
}

document.getElementById("registerButton").addEventListener("click", validateForm);
document.getElementById("loginButton").addEventListener("click", validateForm);