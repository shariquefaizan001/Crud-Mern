import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import Navbar from './Navbar'

// import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Registernavbar from './Registernavbar';
export default function Register() {

    const navigate = useNavigate();

    const [inpval, setINP] = useState({
        email: "",
        username: "",
        mobilenumber: "",
        age: "",
        adress: "",
        pass: "",
    })

    console.log(inpval)

    const setdata = (e) => {
        e.preventDefault();
        console.log(e.target.value)

        const { name, value } = e.target;
        console.log("setting", name, "to", value)
        setINP((preval) => {
            return {
                ...preval, [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();
        const { email,
            username,
            mobilenumber,
            age,
            adress,
            pass, } = inpval;


        const res = await fetch("/register",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    username,
                    mobilenumber,
                    age,
                    adress,
                    pass,
                })
            })


        if (res.status === 201) {
            navigate("/")
            alert(" Register success.....  Now login")
            // console.log("token")
        }else{
            alert("Already registered / Fill the the data ")
        }

        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            alert("error");
            console.log("error")
        }
        else {

        }

    }

    return (

        <div className='container'>
        
            <Registernavbar/>
        
            <form >
                <div className='row'>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={inpval.email} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>


                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputusername" className="form-label">User Name</label>
                        <input type="text" name='username' value={inpval.username} onChange={setdata} class="form-control" />
                    </div>

                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputmobilenumber" className="form-label">Mobile number </label>
                        <input type="Number" name='mobilenumber' value={inpval.mobilenumber} onChange={setdata} class="form-control" />
                    </div>

                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputge" className="form-label">Age</label>
                        <input type="Number " name='age' value={inpval.age} onChange={setdata} class="form-control" />
                    </div>


                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputadress" className="form-label">Adress</label>
                        <input type="text" name='adress' value={inpval.adress} onChange={setdata} class="form-control" />
                    </div>

                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputadress" className="form-label">Password</label>
                        <input type="password" name='pass' value={inpval.pass} onChange={setdata} class="form-control" />
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}
