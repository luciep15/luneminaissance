import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 poeme:[],

};

export const poemeSlice = createSlice({
  name: "poeme",
  initialState,
  reducers: {
    setPoeme: (state, action) => {
      state.poeme = action.payload; // update the state with the action commin in named "payload
    },
   
  },
});

export const { setPoeme } = poemeSlice.actions;

// selectors
export const selectPoeme = (state) => state.poeme.poeme;


export default poemeSlice.reducer;
