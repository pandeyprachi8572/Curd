import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';
const  Create = () => { 
    const [users , setUsers] =useState({});

const navigate =useNavigate()

    const dispatch =useDispatch();
    const getUserData = (e) =>{
        setUsers ({...users ,[e.target.value]: e.target.value})
        console.log(users);
}
   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("users... ",users)
    dispatch(createUser(users))
    navigate("/read")    
} 
 return (
 <div>
 <h1 className='my-2' > Fill the Data </h1>
 <form className=' w-50  mx-auto  my-5' onSubmit={handleSubmit} >
 <div className="mb-3">
 <label htmlFor="exampleInput">Name</label>
 <input type="text" className="htmlForm-control" name="name" onChange={getUserData} id="exampleInput"  placeholder="Enter name"/>
 </div>
 <div className="mb-3">
 <label htmlFor="exampleInputemail">Email</label>
 <input type="email" className="htmlForm-control"  onChange={getUserData} name ="email" id="exampleInputEmail1" placeholder="Email"/>
 </div>
 <div className="mb-3">
 <label htmlFor="examplnumber">Age</label>
 <input type ="number" className='htmlForm-control'  onChange={getUserData} name ="age" id="examplenumber" placeholder='age'/>
 </div>
 <div className="mb-3">
 <input className="htmlForm-check-input" type="radio"  onChange={getUserData}  name="gender"   value="Male"/>
 <label className="htmlForm-check-label" >
 Male
 </label>
 </div>
 <div className="mb-3">
 <input className="form-check-input" type="radio" onChange={getUserData} name="gender" value="Female" />
 <label className="form-check-label" >
 Female
 </label>
 </div>
 <button type="submit" className="btn btn-primary">Submit</button>
 </form>
 </div>
 )
}
export default Create
