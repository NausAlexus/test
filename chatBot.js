document.addEventListener("DOMContentLoaded", () => {
    const chatbotContainer = document.getElementById("chatbotContainer");
    const chatbotToggle = document.getElementById("chatbotToggle");

    chatbotToggle.addEventListener("click", () => {
        if (chatbotContainer.style.right === "0px") {
            chatbotContainer.style.right = "-320px";
        } else {
            chatbotContainer.style.right = "0px";
        }
    });
});