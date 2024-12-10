import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit" ; 
import { retry } from "@reduxjs/toolkit/query";
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
});
//read action 
export const showUser = createAsyncThunk("showUser" , async({rejectWithValue})=> {
const response =await fetch("https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd", ) ;
try {
    const result = await response.json();
    return result
}   catch (error) {
    return rejectWithValue(error);   
}
})
export const userDetail =createSlice({
    name :"userDetails",
    initialState: {
    users: [],
    loading :false ,
    error : null,
    },
    extraReducers :{
        [createUser.pending ] :(state)=>{
            state.loading=true;

        },
        [createUser.fulfilled] :(state ,action )=>{
            state.loading=false;
            state.users.push(action.payload);

        },
        [createUser.rejected] :(state ,action )=>{
            state.loading=false;
            state.error=action.payload.message;

        },
        [showUser.pending ] :(state)=>{
            state.loading=true;

        },
        [showUser.fulfilled] :(state ,action )=>{
            state.loading=false;
            state.users = action.payload;

        },
        [showUser.rejected] :(state ,action )=>{
            state.loading=false;
            state.error=action.payload;

    }
   },
});
export default  userDetail.reducer