//hover effect
function navigateTo(theme) {
    const pageName = theme.replace(/\s+/g, '-') + ".html";
    window.location.href = Activities Page.html;
}

const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('.item');
const errorMessages = form.querySelectorAll('.error-txt');

function validateField(field) {
    const errorMessage = field.nextElement;

    if (field.value.trim() === "") {
        field.classList.add('invalid');
        errorMessage.style.display = "block";
    } else {
        field.classList.remove('invalid');
        errorMessage.style.display = "none";
    }
}

//Error Message pop up
function validateForm(event) {
    let isValid = true;

    inputs.forEach(input => {
        validateField(input);

        if (input.classList.contains('invalid')) {
            isValid = false;
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
}

inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
});

form.addEventListener('submit', validateForm);
