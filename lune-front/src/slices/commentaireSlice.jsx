import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 commentaire:[],

};

export const commentaireSlice = createSlice({
  name: "commentaire",
  initialState,
  reducers: {
    setCommentaire: (state, action) => {
      state.commentaire = action.payload; // update the state with the action commin in named "payload
    },
   
  },
});

export const { setCommentaire } = commentaireSlice.actions;

// selectors
export const selectCommentaire = (state) => state.commentaire.commentaire;


export default commentaireSlice.reducer;
