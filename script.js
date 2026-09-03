const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    button.textContent = "✨ Awesome!";

    button.style.background =
        "linear-gradient(135deg, #06b6d4, #3b82f6)";

    setTimeout(() => {
        button.textContent = "Get Started 🚀";

        button.style.background =
            "linear-gradient(135deg, #9333ea, #ec4899)";
    }, 2000);
});
