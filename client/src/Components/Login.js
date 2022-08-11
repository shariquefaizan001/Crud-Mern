import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import LoginNavbar from './LoginNavbar'
import { useNavigate } from 'react-router-dom'

export default function Login() {



    const navigate = useNavigate();

    const [inpval, setINP] = useState({
        email: "",
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

            pass, } = inpval;
        const res = await fetch("/login",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    pass,
                })
            })

        if (res.status === 200) {
            navigate("/home")
            alert(" Login success.....  Welcome to our App")
        } else {
            alert("Login fail  please enter registred email-id and password")
        }


        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            alert("error");
            console.log("error")
        }
        else {
            // console.log("login scss")
        }

    }

    return (

        <div className='container'>
            <LoginNavbar />
            {/* <NavLink to="/"> Home</NavLink> */}
            <form >
                <div className='row'>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={inpval.email} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>





                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputadress" className="form-label">Password</label>
                        <input type="text" name='pass' value={inpval.pass} onChange={setdata} class="form-control" />
                    </div>



                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}
