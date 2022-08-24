
import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import Detailsnavbar from './Detailsnavbar';
// import { useNavigate } from "react-router-dom";


// edited

export default function Edit() {

const navigate = useNavigate();
    const [inpval, setINP] = useState({
        email: "",
        username: "",
        mobilenumber: "",
        age: "",
        adress: "",
        pass: ""
    })
    console.log(inpval)

    const setdata = (e) => {
        e.preventDefault();
        console.log(e.target.value)

        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval, [name]: value
            }
        })
    }

    const { id } = useParams("");
    console.log(id)


    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {

            console.log("error")
        }
        else {
            setINP(data)
            console.log(" Get data")
        }

    }
    useEffect(() => {
        getdata();
        // },[])
    }, [])

    const updateuser = async (e) => {
        e.preventDefault();


        const { email,
            username,
            mobilenumber,
            age,
            adress, pass } = inpval

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                username,
                mobilenumber,
                age,
                adress, pass
            }),
        })



        const data2 = await res2.json();
        console.log(data2)


        if (res2.status === 404 || !data2) {
            alert("fill the data")
            console.log("fill the dataa")
        } else {
            alert("Data added")
            // history.push("/")
            navigate(`/view/${id}`)
        }
    }

    return (

        <div className='container'>
            <Detailsnavbar />
            {/* <NavLink to="/"> home 222 /// Edit</NavLink> */}

            <form onSubmit={setdata}>
                <div className='row'>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={inpval.email} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>


                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputusername" className="form-label">User Name</label>
                        <input type="text" name='username' value={inpval.username} onChange={setdata} class="form-control" />
                    </div>

                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputmobilenumber" className="form-label">Mobile number </label>
                        <input type="number" name='mobilenumber' value={inpval.mobilenumber} onChange={setdata} class="form-control" />
                    </div>

                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputge" className="form-label">Age</label>
                        <input type="number" name='age' value={inpval.age} onChange={setdata} class="form-control" />
                    </div>


                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputadress" className="form-label">Adress</label>
                        <input type="text" name='adress' value={inpval.adress} onChange={setdata} class="form-control" />
                    </div>

                    <div class="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputadress" className="form-label">Password</label>
                        <input type="password" name='pass' value={inpval.pass} onChange={setdata} class="form-control" />
                    </div>

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
