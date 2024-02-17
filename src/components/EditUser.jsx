import React, {useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';



export default function EditUser() {
  const {id} = useParams()
  const [values, setValues ] = useState({
    email: "",
    name: "",
    country: "",
    age: "",
});

const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setValues({...values, age: result.data.age, email: result.data.email, name: result.data.name, country: result.data.country});
    })
    .catch(err => console.log(err))

  }, [])

 function Edit(e) {
    e.preventDefault();
    axios.put("http://localhost:3001/editUser/" + id, {
      email: values.email,
      age: values.age,
      country: values.country,
      password: values.password,
      name: values.name,
    })
      .then(result => {
        navigate('/');
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  return (
    
    <div>
       <br></br>
      <form onSubmit={Edit}>
        <div>
            <h1>Edit Profile Form</h1>
        </div>
        Email:<input  name="email" type="text" value={values.email} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
        /><span>{}</span><br></br>
        Name:<input  name="name" type="text" value={values.name} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
        /><br></br>
        Country:<input  name="country" type="text" value={values.country} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
        /><br></br>
        Age:<input  name="age" type="text" value={values.age} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
        /><br></br>
        Password:<input  name="password" type="password" value={values.password} onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
        /><br></br>
        <button type="submit">Submit</button>
      </form>
   
    </div>
  
  )
}
