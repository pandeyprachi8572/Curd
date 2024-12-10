import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailSlice';
//import CustomModal from './CustomModal';
const Read = () => {
const dispatch = useDispatch();
const [id , setId] = useState();
const {users , loading} = useSelector((state)=>state.app)
useEffect(()=>{
    dispatch(showUser())
},[])

if(loading) {
    return (<h2> loading </h2>)
}
return (
<div>

  {/*<CustomModal/>*/}

      <h1> All Data </h1> 
      <div>
        { users && users.map((ele)=>(

        
      <div  key={ele.id} className="card w-50  mx-auto my-2">
<div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
    <p className="card-text">{ele.gender}</p>
    <a href="#" className="card-link" onClick={()=>setId(ele.id)} > View </a>
    <a href="#" className="card-link"> Edit </a>
    <a href="#" className="card-link"> Delete </a>
</div>
</div>
))}
</div>
</div>
  )
} 
export default Read
