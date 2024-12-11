// import { configureStore } from '@reduxjs/toolkit'
// import  userDetail  from '../features/userDetailSlice'
// export default configureStore({
// reducer: {
//     app : userDetail, // ye key h 
// }
// }
// )
import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../features/userDetailSlice";

export default configureStore({
  reducer: {
    app: userDetailReducer, // Correctly referenced reducer
  },
});
