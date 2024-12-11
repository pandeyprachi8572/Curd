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
// delete  action
export const deleteUser = createAsyncThunk("deleteUser" , async(id , {rejectWithValue})=> {
    const response =await fetch(`https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd/${id}`, {method}) ;
    try {
        const result = await response.json();
        return result
    }   catch (error) {
        return rejectWithValue(error);   
    }
    })
// update Action 
    export const  updateUser = createAsyncThunk("updateUser",
        async (data ,rejectWithValue) =>{
            console.log("updated data" , data);
        const response =  await fetch (
            `https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd/${data.id}` ,{
            method : "PUT ",
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



export const userDetail =createSlice({
    name :"userDetails",
    initialState: {
    users: [],
    loading :false ,
    error : null,
    },
    extraReducers :{
        // CREATE USER
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
        // SHOW USER 
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

    },
    // delete user 
    [deleteUser.pending ] :(state)=>{
        state.loading=true;

    },
    [deleteUser.fulfilled] :(state ,action )=>{
        state.loading=false;
        const {id} = action.payload;
if(id){
    state.users = state.users.filter((ele)=>ele.id!==id)
}

        console.log("delete action" , action.payload);
    },
    [deleteUser.rejected] :(state ,action )=>{
        state.loading=false;
        state.error=action.payload;

},
// UPDATE USER 
[updateUser.pending ] :(state)=>{
    state.loading=true;

},
[updateUser.fulfilled] :(state ,action )=>{
    state.loading=false;
    state.users=state.users.map((ele)=>
        ele.id=== action.payload.id ? action.payload : ele
    );

},
[updateUser.rejected] :(state ,action )=>{
    state.loading=false;
    state.error=action.payload.message;

},
   },
});
export default  userDetail.reducer