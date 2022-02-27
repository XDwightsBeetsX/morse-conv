

window.onload = () => {
    console.log("page loaded.");

    // 'Enter' key hit triggers conversion
    document.addEventListener('keypress', function(event) {
        if (event.key == "Enter") {
            event.preventDefault();
            document.getElementById(ID_ARROW).click();
        }
    });
}