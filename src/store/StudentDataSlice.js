import { createSlice } from "@reduxjs/toolkit"
const student = [
  { Name: "Saleem", Age: 24, Course: "MERN", Batch: "October", id: "0" },
  { Name: "Sangram", Age: 25, Course: "MERN", Batch: "November", id: "1" },
  { Name: "Sachin", Age: 26, Course: "MERN", Batch: "September", id: "2" },
  { Name: "Mudasir", Age: 22, Course: "MERN", Batch: "September", id: "3" },
  { Name: "Altamash", Age: 23, Course: "MERN", Batch: "October", id: "4" },
  { Name: "Kishan", Age: 24, Course: "MERN", Batch: "November", id: "5" },
]
const usersSlice = createSlice({
  name: "users",
  initialState:student,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload)
    },
    userUpdated(state, action) {
      const { id, Name, Age, Course, Batch } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.Name = Name
        existingUser.Age = Age
        existingUser.Course = Course
        existingUser.Batch = Batch
      }
    },
  },
})
export const { userAdded, userUpdated } = usersSlice.actions
export default usersSlice.reducer