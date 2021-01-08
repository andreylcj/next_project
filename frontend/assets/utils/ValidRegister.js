const validRegister = (email, password) => {

    if (!email && !password)
        return {
            emailMessage: 'Por favor, preencha seu e-mail',
            passwordMessage: 'Por favor, preencha sua senha',
        }

    if (!email)
        return {
            emailMessage: 'Por favor, preencha seu e-mail',
            passwordMessage: '',
        }

    if (!password)
        return {
            emailMessage: '',
            passwordMessage: 'Por favor, preencha sua senha',
        }


    if (!validateEmail(email)) {
        return {
            emailMessage: 'Por favor preencha um email valido',
            passwordMessage: '',
        }
    }

    if (password.length < 6) {
        return {
            emailMessage: '',
            passwordMessage: 'A senha deve conter pelo menos 6 caracteres',
        }
    }

    return {
        emailMessage: '',
        passwordMessage: '',
    }


}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default validRegister