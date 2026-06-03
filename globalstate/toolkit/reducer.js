import {createSlice} from '@reduxjs/toolkit'

let slice= createSlice({
    name:"count",
    initialState:{value:100},
    reducers:{
        Inc:(state)=>{
            state.value+=1
        },
        Dec:(state)=>{
                 state.value-=1
        }
    }
}) 
export default slice.reducer
//export {Inc,Dec}
export const {Inc,Dec}=slice.actions