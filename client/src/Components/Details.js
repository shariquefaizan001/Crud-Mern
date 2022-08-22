import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'


export default function Details() {

    const [getuserdata, setUserdata] = useState([]);

    const { id } = useParams("");

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
            setUserdata(data)

        }
    }
    useEffect(() => {
        getdata();
    });

    // delete user function 

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });
        
        const deletedata = await res2.json();
        console.log(deletedata);
        if (res2.status === 422 || !deletedata) {
            console.log("error")
        } else {
            console.log("user deleted")
            alert("user deleted")

        }
    }

    return (

        <div className='container mt-3'>
            <Navbar />
            <h3 style={{ fontWeigth: 350 }}> Welcome  {getuserdata.username} To our crud opration  </h3>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <div className='add_btn'>

                        <NavLink to={`/view/${id}`}>  <button class="btn btn-success"> Read</button>   </NavLink>
                        <NavLink to={`/edit/${id}`}>  <button class="btn btn-primary">Update</button>   </NavLink>
                        <button onClick={() => deleteuser(id)} class="btn btn-danger"> Delete</button>


                    </div>
                    <div className='left_view'>
                        <h3>Name: <span> {getuserdata.username} </span> </h3>
                        <h3>Age: <span>{getuserdata.age}</span> </h3>
                        <h3>Email: <span> {getuserdata.email}</span> </h3>

                    </div>
                    <div className='right_view'>
                        <h3>Mobile Number : <span> {getuserdata.mobilenumber}</span> </h3>
                        <h3>Adress: <span>{getuserdata.adress}</span> </h3>

                        <h3>Password : <span> {getuserdata.pass}</span> </h3>


                    </div>
                </CardContent>

            </Card >


        </div>
    )
}
