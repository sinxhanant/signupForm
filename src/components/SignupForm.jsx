
import React, { useState, useEffect } from "react";
import './SignupForm.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignupForm() {
    const navigate = useNavigate()

    const [values, setValues ] = useState({
        email: "",
        name: "",
        country: "",
        age: "",
        password: "",
    });
    const [error, setError ] = useState({
        email: "",
        name: "",
        country: "",
        age: "",
        password: "",
    });

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };
    
    
    const handlenoError = (event) => {
        setError({...error, password: "", age: "", email: "", name: "", country: ""});
    };
    const handleValidations = (event) => {
        const { email, name, country, age, password} = values;
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            setError({ ...error, email: "Email is in an invalid format" });
            console.log(error.email);
            return false;
        }
        else if (name == "") {
            setError({ ...error, name: "Enter Name" });
            console.log(error.email);
            return false;
        }
        else if (country == "") {
            setError({ ...error, country: "Enter Country" });
            console.log(error.email);
            return false;
        }
       
        else if(age <= 0 || age > 120 || isNaN(age)){
            setError({...error, age: "Age should be in numbers & less than 120"});
            return false;
        }
        else if(password.length<8){
            setError({...error, password: "Password is less than 8 characters"});
            console.log(error.password)
            return false;
        }
       
       
       
        
        handlenoError()
        return true;
    }

    
const handleSubmit = async (event) => {
    event.preventDefault()
    if(handleValidations()){
        const {email, name, age, country, password } = values;

        await axios.post("http://localhost:3001/createUser", {name, email, age, country, password})
        .then(result => {
            navigate('/')
            console.log(result)})
        .catch(err => console.log(err))
    }
}

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
            <h1>Sign Up Form</h1>
        </div>
        Email:<input type="text" name="email"
         onChange={(e) => handleChange(e)}
        />
        <p>{error.email}</p><br></br>
        Name:<input type="text" name="name"
         onChange={(e) => handleChange(e)}
        />
        <p>{error.name}</p><br></br>
        Country:<input type="text" name="country"
         onChange={(e) => handleChange(e)}
        />
        <p>{error.country}</p><br></br>
        Age:<input type="text" name="age"
         onChange={(e) => handleChange(e)}
        />
        <p>{error.age}</p><br></br>
        Password:<input type="password" name="password"
         onChange={(e) => handleChange(e)}
        />
        <p>{error.password}</p><br></br>
        <button >Submit</button>
       
      </form>
    
     
    </div>
  )
}
