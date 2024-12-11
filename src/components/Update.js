import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom'
const Update = () => {
const {id} = useParams();
const dispatch = useDispatch();
const [updateData , setUpdateData] = useState();
const {users , loading} = useSelector((state)=>state.app.users);
useEffect(()=>{
    if(id){
        const singleUser =users.filter((ele)=> ele.id === id );
        setUpdateData(singleUser[0]);
    }
},[]);
const newData = (e)=> {
    setUpdateData({...updateData ,[e.target.name] : e.target.value })
    
}
console.log("updated data" , updateData);
const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateUser(updateData));
    Navigate('/read')
}
return (
    <div>
    <h1 className='my-2'> Edit the Data </h1>
    <form className=' w-50  mx-auto  my-5' onSubmit={handleUpdate} >
    <div className="mb-3">
    <label htmlFor="exampleInput">Name</label>
    <input type="text" className="htmlForm-control" name="name" 
    value={updateData  && updateData.name}
     onChange={newData}
     id="exampleInput"  placeholder="Enter name"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputemail">Email</label>
    <input type="email" className="htmlForm-control"  
     onChange={newData}
    value={updateData && updateData .email}
     name ="email" id="exampleInputEmail1" placeholder="Email"/>
    </div>
    <div className="mb-3">
    <label htmlFor="examplnumber">Age</label>
    <input type ="number" className='htmlForm-control' 
     value=  {updateData  && updateData.age}
     onChange={newData}
      name ="age" id="examplenumber" placeholder='age'/>
    </div>
    <div className="mb-3">
    <input className="htmlForm-check-input" type="radio" 
     onChange={newData}
       name="gender"   
       checked={updateData  && updateData.gender == 'Male'}
       value="Male"/>
    <label className="htmlForm-check-label" >
    Male
    </label>
    </div>
    <div className="mb-3">
    <input className="form-check-input" type="radio" 
    onChange={newData} 
    name="gender" value="Female"
    checked={updateData  && updateData.gender == 'FeMale'}
    />
    <label className="form-check-label" >
    Female
    </label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
export default Update
