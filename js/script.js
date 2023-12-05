function validateForm(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Пожалуйста, заполните все поля формы.');
        event.preventDefault();
    } else {
        showSuccessToast();
        hideContactModal();
    }
}

function showSuccessToast() {
    var toastEl = document.querySelector('.toast');
    var toast = new bootstrap.Toast(toastEl, { delay: 3000 });

    toast.show();
}

function hideContactModal() {
    var contactModalEl = document.getElementById('contactModal');
    var modal = new bootstrap.Modal(contactModalEl);

    modal.hide();
}
