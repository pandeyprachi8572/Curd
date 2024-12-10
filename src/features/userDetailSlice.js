import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit" ;
 
//create action  
export const  createUser = createAsyncThunk("createUser" ,async (data ,rejectWithValue) =>{
const response =  await fetch ("https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd" ,{
    method : "POST ",
    headers:{
         "Content-Type" : "application/json",
},
body :JSON.stringify(data)
  });
try {
const result = await  Response.json();
return result 
} catch (error) {
    rejectWithValue(error)
}

})
export const userDetail =createSlice({
    name :"userDetails",
    initialState: {
    users: [],
    loading :false ,
    error : null,
    extraReducers :{
        [createUser.pending ] :(state)=>{
            state.loading=true;

        },
        [createUser.fulfilled] :(state ,action )=>{
            state.loading=false;
            state.users.push(action.payload)

        },
        [createUser.rejected] :(state ,action )=>{
            state.loading=false;
            state.users.push(action.payload)

        }
    }
   },
});
export default  userDetail.reducer