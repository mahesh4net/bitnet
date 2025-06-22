import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    uuid: '',
    fullname: '',
    username: '',
    email: '',
    isAuthenticated: false
}


const userSlice = createSlice({
name: 'user',
initialState,
reducers: {
    setUserDetails: (state, action) => {
        console.log(action.payload)
        state.uuid = action.payload.uuid
        state.fullname = action.payload.fullname
        state.username = action.payload.username
        state.email = action.payload.email
        state.isAuthenticated = true
    },
    resetUserDetails: (state) => {
        state.uuid = ''
        state.fullname = ''
        state.username = ''
        state.email = ''
        state.isAuthenticated = false

    }
}
})


export const {setUserDetails, resetUserDetails} = userSlice.actions
export default userSlice.reducer