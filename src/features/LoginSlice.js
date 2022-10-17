import {createSlice} from '@reduxjs/toolkit'

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        user: {
            username: '',
            password: ''
        }
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { getUser } = LoginSlice.actions

export default LoginSlice.reducer


