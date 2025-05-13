let input = document.getElementById('input');
let subscribe = document.getElementById('subscribe');
let error = document.querySelector('.error');
let success = document.querySelector('.success');
let form = document.getElementById('form');
let container = document.querySelector('.container');
let mailbox = document.getElementById('mailbox');
let dismiss = document.getElementById('dismiss');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = input.value.trim();
    if (email === '') {
        input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.3)';
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.color = 'hsl(4, 100%, 67%)';
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        container.style.display = 'none';
        success.style.display = 'block';
        form.reset();
        mailbox.textContent = email;
    }
})
dismiss.addEventListener('click', function () {
    success.style.display = 'none';
    container.style.display = 'flex';
})