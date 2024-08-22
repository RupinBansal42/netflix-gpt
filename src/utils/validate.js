export const checkValidData = (email,password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    var isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"
    
}

