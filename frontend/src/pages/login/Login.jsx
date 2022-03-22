import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography, Container, Stack, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../../components/authentication/LoginForm";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container>
      <Grid item xs={4}>
        <Box
          className="login-bg"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            pt: 3,
            color: "#eaeef3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "100px",
                color: "#fff",
                marginBottom: "30px",
              }}
              icon={faHeartPulse}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ mb: 2, py: 2 }} variant="h4">
                Health Monitoring
              </Typography>
              <Typography sx={{ ml: 2, mb: 1 }} variant="body2">
                Powered by
              </Typography>
              <Box
                component="img"
                sx={{
                  height: { xs: 35, md: 50 },
                  width: { xs: 50, md: 100 },
                  alignSelf: "center",
                }}
                src="./images/ADI_Logo.png"
                alt="ADI Logo"
              />
            </Box>
          </Box>
          <Typography sx={{ mb: 1 }} variant="body2">
            Thanks for using Analog Devices
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Container maxWidth="sm">
            <ContentStyle>
              <Stack sx={{ mb: 5 }}>
                <Typography variant="h4" gutterBottom>
                  Sign in to Health Connect
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Enter your details below.
                </Typography>
              </Stack>

              <LoginForm />

              <Typography
                variant="body2"
                // align="center"
                sx={{
                  mt: 3,
                }}
              >
                Don’t have an account?&nbsp;
                <Link
                  variant="subtitle2"
                  component={RouterLink}
                  to="register"
                  underline="hover"
                >
                  Get started
                </Link>
              </Typography>
            </ContentStyle>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
