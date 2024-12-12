// import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit" ; 

// //create action  
// export const  createUser = createAsyncThunk("createUser" ,async (data ,rejectWithValue) =>{
// const response =  await fetch ("https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd" ,{
//     method : "POST ",
//     headers:{
//          "Content-Type" : "application/json",
// },
// body :JSON.stringify(data)
//   });
// try {
// const result = await  Response.json();
// return result 
// } catch (error) {
//     rejectWithValue(error)
// }
// });
// //read action 
// export const showUser = createAsyncThunk("showUser" , async({rejectWithValue})=> {
// const response =await fetch("https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd", ) ;
// try {
//     const result = await response.json();
//     return result
// }   catch (error) {
//     return rejectWithValue(error);   
// }
// })
// // delete  action
// export const deleteUser = createAsyncThunk("deleteUser" , async(id , {rejectWithValue})=> {
//     const response =await fetch(`https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd/${id}`,{method:"DELETE"}) ;
//     try {
//         const result = await response.json();
//         return result
//     }   catch (error) {
//         return rejectWithValue(error);   
//     }
//     })
// // update Action 
//     export const  updateUser = createAsyncThunk("updateUser",
//         async (data ,rejectWithValue) =>{
//             console.log("updated data" , data);
//         const response =  await fetch (
//             `https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd/${data.id}` ,{
//             method : "PUT ",
//             headers:{
//                  "Content-Type" : "application/json",
//         },
//         body :JSON.stringify(data)
//           });
//         try {
//         const result = await  Response.json();
//         return result 
//         } catch (error) {
//             rejectWithValue(error)
//         }
//         });
// export const userDetail =createSlice({
//     name :"userDetails",
//     initialState: {
//     users: [],
//     loading :false ,
//     error : null,
//     searchData :[], 
//     },
//     reducers : {
//     searchUser : (state , action)=>{
//         console.log(action.payload);
// state.searchData = action.payload;
// },
//   },
//     extraReducers :{
//         // CREATE USER
//         [createUser.pending ] :(state)=>{
//             state.loading=true;

//         },
//         [createUser.fulfilled] :(state ,action )=>{
//             state.loading=false;
//             state.users.push(action.payload);

//         },
//         [createUser.rejected] :(state ,action )=>{
//             state.loading=false;
//             state.error=action.payload.message;

//         },
//         // SHOW USER 
//         [showUser.pending ] :(state)=>{
//             state.loading=true;

//         },
//         [showUser.fulfilled] :(state ,action )=>{
//             state.loading=false;
//             state.users = action.payload;

//         },
//         [showUser.rejected] :(state ,action )=>{
//             state.loading=false;
//             state.error=action.payload;

//     },
//     // delete user 
//     [deleteUser.pending ] :(state)=>{
//         state.loading=true;

//     },
//     [deleteUser.fulfilled] :(state ,action )=>{
//         state.loading=false;
//         const {id} = action.payload;
// if(id){
//     state.users = state.users.filter((ele)=>ele.id!==id)
// }

//         console.log("delete action" , action.payload);
//     },
//     [deleteUser.rejected] :(state ,action )=>{
//         state.loading=false;
//         state.error=action.payload;

// },
// // UPDATE USER 
// [updateUser.pending ] :(state)=>{
//     state.loading=true;

// },
// [updateUser.fulfilled] :(state ,action )=>{
//     state.loading=false;
//     state.users=state.users.map((ele)=>
//         ele.id=== action.payload.id ? action.payload : ele
//     );

// },
// [updateUser.rejected] :(state ,action )=>{
//     state.loading=false;
//     state.error=action.payload.message;

// },
//    },
// });
// export default  userDetail.reducer
// export const {searchUser}=userDetail.actions; 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Read action
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd");
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd/${id}`,
        { method: "DELETE" }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6756c5fdc0a427baf94a53b8.mockapi.io/Curd/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // CREATE USER
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // SHOW USER
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE USER
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // UPDATE USER
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;
