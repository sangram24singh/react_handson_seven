import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./StudentDataSlice"
export default configureStore({
  reducer: {
    student: usersReducer,
  },
})