const handleData = (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById('username'),
        number: document.getElementById('number'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        fee: document.getElementById('fee')
    };

    // Indian mobile number regex
    let regexNumber = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (regexNumber.test(user.number)) {
        user.number.classList.remove('invalid');
    } else {
        user.number.classList.add('invalid');
        return
    }

    // Email regex
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(user.email)) {
        user.email.classList.remove('invalid');
    } else {
        user.email.classList.add('invalid');
        return
    }

    // Password regex
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regexPassword.test(user.password)) {
        user.password.classList.remove('invalid');
    } else {
        user.password.classList.add('invalid');
        return
    }
};

document.getElementById('userData').addEventListener('submit', handleData);