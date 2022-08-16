import React, { useState } from 'react'

export default function Search() {

    const [user, setuser] = useState("");


    const inputevent = (event) => {
        const data = event.target.value;
        setuser(data)
        console.log(user)
    }


    return (
        <div>

            <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search by emailid" aria-label="Search" value={user} onChange={inputevent} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
    )
}
