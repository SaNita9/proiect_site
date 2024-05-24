import React, {useState} from 'react'
import background from "./bg.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'


function Login(){
    const [values, setValues] = useState({
        text: '',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.text === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                } else {
                    alert("Nu exista acest cont!");            
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <form action ="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="text"><strong>Clasa</strong></label>
                            <input type="text" placeholder='Clasa (ex. 11B):' name='text' onChange={handleInput} className='form-control rounded-0'/>
                            {errors.text && <span className= 'text-danger'> {errors.text} </span>} 
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"><strong>Parola</strong></label>
                            <input type="password" placeholder='Parola primita de la diriginte:' name='password' onChange={handleInput} className='form-control rounded-0'/> 
                            {errors.password && <span className= 'text-danger'> {errors.password} </span>} 
                        
                        </div>
                        <button type='submit' className='btn btn-success w-100 '> Log in</button>
                        <Link to="/signup" className='btn btn-default border w-100 bg-light '> Create Account </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login