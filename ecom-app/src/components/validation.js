const validation = (values) => {
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length<5){
        errors.password="Password must be more than 5 characters"
    }
    if(!values.mobile){
        errors.mobile="Mobile number is required"
    }else if(values.mobile.length!=10){
        errors.mobile="Mobile number must contain 10 digits"
    }
    return errors;
}
export default validation;