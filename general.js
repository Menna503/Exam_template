function showError(element, message) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
}

function hideError(element) {
    const errorElement = element.nextElementSibling;
    errorElement.classList.add('hidden');
}

