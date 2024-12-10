import React from 'react'
const  Create = () => {
return (
 <div>
 <form>
 <div className="mb-3">
 <label for="exampleInput">Name</label>
 <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email"/>
 </div>
 <div className="mb-3">
 <label for="exampleInputemail">Email</label>
 <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Password"/>
 </div>
 <div className="mb-3">
 <label for="examplinput1">Age</label>
 <input type ="text" className='form-control' id="exampleInput" placeholder='age'/>
 </div>
 <button type="submit" className="btn btn-primary">Submit</button>
 </form>
 </div>
 )
}
export default Create
