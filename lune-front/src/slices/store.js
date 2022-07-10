import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tarifReducer from "./tarifSlice";
import poemeReducer from "./poemeSlice";
import commentaireReducer from "./commentaireSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    tarif: tarifReducer,
    poeme : poemeReducer,
    commentaire: commentaireReducer,
  },
});

export default store;
