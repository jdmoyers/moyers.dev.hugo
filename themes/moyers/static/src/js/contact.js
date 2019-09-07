var forms = document.querySelectorAll('form');
var validateFields = document.querySelectorAll('[data-val]');

validateFields.forEach((field) => {
    field.addEventListener('blur', e => {
        validateField(e.target);
    })
});

forms.forEach((form) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        var fields = form.querySelectorAll('[data-val]');

        fields.forEach((field) => {
            validateField(field);
        });

        var errors = form.querySelectorAll('label.error').length;

        if(errors > 0) {
            console.log('throw errors');
        } else {
            const formData = new FormData(form);

            fetch(form.getAttribute('action'), {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                
                body: new URLSearchParams(formData).toString(),
            })
            .then(res => {
                if (res) {
                    console.log(res);
                }
            });
        }
    });
});

function validateField(field) {
    switch (field.type.toLowerCase()) {
        case 'text':
        case 'textarea':
            if(!field.value) {
                toggleValidation(field, 'invalid');
            } else {
                toggleValidation(field, 'valid');
            }
            break;
        
        case 'email':
            if(validateEmail(field.value)) {
                toggleValidation(field, 'valid');
            } else {
                toggleValidation(field, 'invalid');
            }
            break;
    }
}

function validateEmail (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toggleValidation(field, state) {
    var fieldName = field.name;
    var label = field.parentNode.querySelector(`[for=${fieldName}]`);
    var errorElement = field.parentNode.querySelector('.form-error');
    var errorMessage = field.getAttribute('data-val');

    if(state == 'invalid') {
        field.classList.add('error');
        label.classList.add('error');
        errorElement.innerHTML = errorMessage;
        errorElement.classList.add('show');
    } else {
        errorElement.innerHTML = '';

        if(field.classList.contains('error')) {
            field.classList.remove('error');
        }

        if(label.classList.contains('error')) {
            label.classList.remove('error');
        }

        if(errorElement.classList.contains('show')) {
            errorElement.classList.remove('show');
        }
    }
}