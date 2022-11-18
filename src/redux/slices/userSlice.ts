import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserAuth, UserParsingBody } from "types/user";

const apiUrl = "https://fakestoreapi.com/auth/login";

export const userAuth = createAsyncThunk(
  "auth/login",
  async (userData: UserParsingBody) => {
    const response = (await fetch(apiUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    }).then((res) => res.json())) as { token: string };

    return { username: userData.username, token: response.token } as UserAuth;
  }
);

export const userAuthSlice = createSlice({
  name: "useAuth",
  initialState: { username: "", token: "" } as UserAuth,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        userAuth.fulfilled,
        (state, action) =>
          (state = {
            username: action.payload.username,
            token: action.payload.token,
          })
      )
      .addCase(userAuth.pending, (state, action) => console.log(action.payload))
      .addCase(userAuth.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default userAuthSlice.reducer;
