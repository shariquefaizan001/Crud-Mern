// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// // import Navbar from './Navbar'
// import Homeopagenavbar from './Homepagenavbar';

// export default function Home() {
//     const [getuserdata, setUserdata] = useState([]);
//     // console.log(getuserdata)

//     const getdata = async (e) => {
//         const res = await fetch("/getdata",
//             {
//                 method: "GET",
//                 headers: {
//                     "content-type": "application/json"
//                 },
//             })
//         const data = await res.json();
//         // console.log(data);
//         if (res.status === 422 || !data) {

//             console.log("error")
//         }
//         else {
//             setUserdata(data)
//             // console.log(" Get data")
//         }
//     }
//     useEffect(() => {
//         getdata();
//     }, [])

//     // delete user function 

//     const deleteuser = async (id) => {

//         const res2 = await fetch(`/deleteuser/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "content-type": "application/json"
//             }
//         });
//         const deletedata = await res2.json();
//         console.log(deletedata);
//         if (res2.status === 422 || !deletedata) {
//             console.log("error")
//         } else {
//             console.log("user deleted")
//             alert("user deleted")
//             getdata();
//         }

//     }
//     return (
//         <div className='mt-5'>
//             <Homeopagenavbar />
//             <div className='container'>
//                 <div className='add_btn mt-2'>
//                 </div>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">User Name </th>
//                             <th scope="col">Email ID</th>
//                             <th scope="col"> Mobile no.</th>

//                             <th scope="col"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             getuserdata.map((element, id) => {
//                                 return (
//                                     <> <tr>
//                                         <th scope="row">{id + 1}</th>
//                                         <td>{element.username}</td>
//                                         <td>{element.email}</td>
//                                         <td>{element.mobilenumber}</td>
//                                         <td className='d-flex justify-content-between'>

//                                             <NavLink to={`/view/${element._id}`}>  <button class="btn btn-success"> Read</button>   </NavLink>
//                                             <NavLink to={`/edit/${element._id}`}>  <button class="btn btn-primary">Update</button>   </NavLink>
//                                             <button onClick={() => deleteuser(element._id)} class="btn btn-danger"> Delete</button>
//                                         </td>
//                                     </tr>
//                                     </>
//                                 )
//                             })
//                         }

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }


















































import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Navbar from './Navbar'
import Homeopagenavbar from './Homepagenavbar';

export default function Home() {
    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata)

    const getdata = async (e) => {
        const res = await fetch("/getdata",
            {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
        const data = await res.json();
        // console.log(data);
        if (res.status === 422 || !data) {

            console.log("error")
        }
        else {
            setUserdata(data)
            // console.log(" Get data")
        }
    }
    useEffect(() => {
        getdata();
    }, [])

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
            getdata();
        }

    }


    const searchHandle=async (event)=>{
    
        let key=event.target.value;
        console.log(key)
    
        if(key){
        let res2=await fetch(`/search/${key}`);  
        res2 = await res2.json();
       console.log(res2);
       if (res2) {
    
        setUserdata(res2)
       } else {
                   console.log("hol")
                  getdata();
       }
    }
    }

    return (
        <div className='mt-5'>
            <Homeopagenavbar />
            <div className='container'>
            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" onChange={searchHandle} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                <div className='add_btn mt-2'>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">User Name </th>
                            <th scope="col">Email ID</th>
                            <th scope="col"> Mobile no.</th>

                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <> <tr>
                                        <th scope="row">{id + 1}</th>
                                        <td>{element.username}</td>
                                        <td>{element.email}</td>
                                        <td>{element.mobilenumber}</td>
                                        <td className='d-flex justify-content-between'>

                                            <NavLink to={`/view/${element._id}`}>  <button class="btn btn-success"> Read</button>   </NavLink>
                                            <NavLink to={`/edit/${element._id}`}>  <button class="btn btn-primary">Update</button>   </NavLink>
                                            <button onClick={() => deleteuser(element._id)} class="btn btn-danger"> Delete</button>
                                        </td>
                                    </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
