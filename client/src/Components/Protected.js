import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let logined = localStorage.getItem('token');
        if (!logined)
            navigate('/')
    })

    return (
        <div>
            <Component />
        </div>
    )
}
