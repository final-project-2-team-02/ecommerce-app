import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "redux/store";
// import { userAuth } from "redux/reducer/userReducer";
// import { UserAuth, UserParsingBody } from "types/user";

export default function Login() {
//   const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log(data.get("username"), data.get("password"));
    // await dispatch(
    //   userAuth({
    //     username: data.get("username"),
    //     password: data.get("password"),
    //   } as UserParsingBody)
    // );
    await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

//   const userData = useSelector<RootState>(
//     (state) => state.userAuth
//   ) as UserAuth;

//   console.log(userData);

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Typography align="center" variant="h3" fontWeight="600" mt={10}>
        Login
      </Typography>
      <Box
        component="form"
        noValidate={false}
        sx={{ mt: 1, maxWidth: "500px" }}
        mx="auto"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          size="small"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          size="small"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
