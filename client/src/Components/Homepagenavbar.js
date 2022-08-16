import React from 'react'
import '../Components/Common.css'
import { NavLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';


export default function Homeopagenavbar() {


    const navigate = useNavigate();
    const logoutusers = () => {
        localStorage.removeItem('token');
        navigate("/")
        alert(" Logout to our App")
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CRUD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

<h3>List of all users</h3>

                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                        </ul>
                        
                    </div>
                                <button className="btn btn-outline-danger" onClick={logoutusers} type="submit"> logout</button>
                </div>
            </nav>

        </>
    )
}
