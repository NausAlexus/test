function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Сделайте поп-ап видимым
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Скрыть поп-ап
}

window.onload = function() {
    // Проверка, был ли уже показан поп-ап
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
            showPopup(); // Показать поп-ап через 3 секунды
            sessionStorage.setItem('popupShown', 'true'); // Установить флажок, что поп-ап показан
        }, 3000);
    }
};

// Пример: добавление события для кнопки закрытия поп-апа
document.getElementById('closePopupButton').addEventListener('click', closePopup);