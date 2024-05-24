function Validation(values){

    let error ={}
    const text_pattern = /^(([5-9]|(1[0-2]))[A-I])/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}/

    if(values.text === "") {
        error.text = "Clasa nu poate ramane necompletata!"
    }
    else if(!text_pattern.test(values.text)) {
        error.text = "Clasa introdusa nu exista!"
    }
    else {
        error.text = ""
    }

    if(values.password === "") {
        error.password = "Parola nu poate ramane necompletata!"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Parola introdusa nu corespunde!"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;