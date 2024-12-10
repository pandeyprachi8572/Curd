import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
const  Create = () => { 
    const [users , setUsers] =useState({});
    const dispatch =useDispatch();
    const getUserData = (e) =>{
        setUsers ({...users ,[e.target.value]: e.target.value})
        console.log(users);
}
   const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createUser(users))
    console.log(users)

} 
 return (
 <div>
 <form className=' w-50  mx-auto  my-5' onSubmit={handleSubmit} >
 <div className="mb-3">
 <label for="exampleInput">Name</label>
 <input type="text" className="form-control" name="name" onChange={getUserData} id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email"/>
 </div>
 <div className="mb-3">
 <label for="exampleInputemail">Email</label>
 <input type="email" className="form-control"  onChange={getUserData} name ="email" id="exampleInputEmail1" placeholder="Password"/>
 </div>
 <div className="mb-3">
 <label for="examplinput1">Age</label>
 <input type ="text" className='form-control'   onChange={getUserData} name ="age" id="exampleInput" placeholder='age'/>
 </div>
 <div className="mb-3">
 <input className="form-check-input" type="radio"  onChange={getUserData}  name="gender"   value="Male"/>
 <label className="form-check-label" >
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
