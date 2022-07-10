import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 tarif:[],

};

export const tarifSlice = createSlice({
  name: "tarif",
  initialState,
  reducers: {
    setTarif: (state, action) => {
      state.tarif = action.payload; // update the state with the action commin in named "payload
    },
   
  },
});

export const { setTarif } = tarifSlice.actions;

// selectors
export const selectTarif = (state) => state.tarif.tarif;


export default tarifSlice.reducer;
