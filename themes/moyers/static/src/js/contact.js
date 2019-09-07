var form = document.getElementById('contact-form');
var validateFields = document.querySelectorAll('[data-val]');

validateFields.forEach((field) => {
    field.addEventListener('blur', function() {
        validateField(this);
    })
});

if(form != null) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var fields = form.querySelectorAll('[data-val]');

        fields.forEach((field) => {
            validateField(field);
        });

        var errors = form.querySelectorAll('label.error').length;
        console.log(errors);
        if(errors > 0) {
            console.log('throw errors');
        } else {
            console.log('submit');
        }
    });
}


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
    var label = form.querySelector(`[for=${fieldName}]`);
    var errorElement = field.parentNode.querySelector('.form-error');
    var errorMessage = field.getAttribute('data-val');

    if(state == 'invalid') {
        field.classList.add('error');
        label.classList.add('error');
        errorElement.innerHTML = errorMessage;
        errorElement.classList.add('show');
    } else {
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