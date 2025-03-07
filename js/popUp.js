function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Сделайте поп-ап видимым
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Скрыть поп-ап
}

window.onload = function() {
    setTimeout(showPopup, 3000); // Показать поп-ап через 3 секунды
};