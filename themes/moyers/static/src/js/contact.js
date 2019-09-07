let forms = document.querySelectorAll('form');
let validateFields = document.querySelectorAll('[data-val]');

validateFields.forEach((field) => {
    field.addEventListener('blur', e => {
        validateField(e.target);
    })
});

forms.forEach((form) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        let fields = form.querySelectorAll('[data-val]');

        fields.forEach((field) => {
            validateField(field);
        });

        let errors = form.querySelectorAll('label.error').length;

        if(errors > 0) {
            console.log('throw errors');
        } else {
            submitForm(form);
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
    const fieldName = field.name;
    const label = field.parentNode.querySelector(`[for=${fieldName}]`);
    const errorElement = field.parentNode.querySelector('.form-error');
    const errorMessage = field.getAttribute('data-val');

    if(state == 'invalid') {
        field.classList.add('error');
        label.classList.add('error');
        errorElement.innerHTML = errorMessage;
        errorElement.classList.add('show');
        errorElement.setAttribute('aria-hidden', false);
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
            errorElement.setAttribute('aria-hidden', true);
        }
    }
}

function submitForm(form) {
    const formData = new FormData(form);
    const formResponse = form.querySelector('.form-response');
    const successMessage = formResponse.innerHTML;

    fetch(form.getAttribute('action'), {
        method: 'POST',
        headers: {
            'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        
        body: new URLSearchParams(formData).toString(),
    })
    .then(handleSubmitErrors)
    .then(res => {
        if (res) {
            
            formResponse.setAttribute('aria-hidden', 'false');
            formResponse.classList.remove('error');
            formResponse.classList.add('success');
            form.reset();
        }
    })
    .catch(error => {
        formResponse.innerHTML = `
            The following error has occurred while trying to submit your form:
            <div class="form-response_error">${error}</div>`;

        formResponse.classList.add('error');
    });
}
function handleSubmitErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response;
}