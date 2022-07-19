
window.onload = () => {
    // 'Enter' key hit triggers encode
    document.addEventListener('keypress', function(event) {
        if (event.key == "Enter") {
            event.preventDefault();
            document.getElementById(ID_ENCODE).click();
        }
    });
}
