var form = document.getElementById('contact-form');

if(typeof(form) != null && form != null) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if(!name) {
            console.log('Missing name');
        }

        if(!email) {
            console.log('Missing email');
        }

        if(!message) {
            console.log('Missing message');
        }
    });
}
