import React, {useState} from 'react';
import './signup.css';
import axios from 'axios';
import validation from './validation';

const Signup = ()  => {
    const[values, setValues] = useState({
        fullname:"",
        email:"",
        password:"",
        mobile:""
    })
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })

    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        axios.post('http://localhost:8080/saveUser', this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='signup'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'> Create Account</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                    <label className='label'>Full Name</label>
                    <input className='input' type="text" name='fullname' value={values.fullname} onChange={handleChange}/>
                    {errors.fullname && <p className='error'>{errors.fullname}</p>}
                    </div>
                    <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type="email" name='email' value={values.email} onChange={handleChange}/>
                    {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div className='mobile'>
                    <label className='label'>Mobile Number</label>
                    <input className='input' type="number" name='mobile' value={values.mobile} onChange={handleChange}/>
                    {errors.mobile && <p className='error'>{errors.mobile}</p>}
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;
