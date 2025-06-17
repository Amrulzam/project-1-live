import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isHome: true,
    isAbout:false,
    isContact:false,
}

export const checkSlice = createSlice({
    name:"check",
    initialState,
    reducers:{
        setHome: (state)=>{
            state.isHome=true;
            state.isAbout=false;
            state.isContact=false;
        },
        setAbout: (state)=>{
            state.isHome=false;
            state.isAbout=true;
            state.isContact=false;
        },
        setContact: (state)=>{
            state.isContact=true;
            state.isHome=false;
            state.isAbout=false;
        }
    }
})

export const { setAbout, setContact, setHome} = checkSlice.actions;
export default checkSlice.reducer;
