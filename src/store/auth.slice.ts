import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../config";

const initialState = {
  isAuthenticating: true,
  authenticated: false,
  error: null,
  PrivateInfo: {
    username: "",
    id: 0,
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const user = action.payload;
      return {
        ...state,
        isAuthenticating: false,
        authenticated: true,
        PrivateInfo: user,
        error: null,
      };
    },
    signOut: (state, action) => {
      localStorage.removeItem(config.AUTH_USER_TOKEN_KEY);
      state.isAuthenticating = false;
      state.authenticated = false;
      state.PrivateInfo = initialState.PrivateInfo;
    },
  },
  extraReducers: {},
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
