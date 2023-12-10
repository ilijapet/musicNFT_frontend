// import * as React from 'react';
import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { green } from '@mui/material/colors';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://nftsmusic.net/">  
        nftsmusic.net
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}


const defaultTheme = createTheme(
        {
            palette: {
                mode: "dark",
            primary: {
                main: green[500],
            },
            secondary: {
                main: green[500]
    }
    }}
);

export default function SignInSide() {
    const [refresh, setRefresh] = useState(null);
    const [access, setAccess] = useState(null);

    const handleSubmit = async (event) => {    
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

    
        await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify({
                email: data.get('email'),
                password: data.get('password')
            }),            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setAccess(data["access"]);
            setRefresh(data["refresh"]);
            console.log(data["refresh"], data["access"]);
        })
        .catch((error) => console.log(error));   
};

return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
            backgroundImage: 'url(https://source.unsplash.com/large-floating-skull-oni-demon-japanese-folklore-pink-blue-shuten-doji-3d-illustration-render-51pGGOkw3wg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
            sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
        </Grid>
    </Grid>
    </ThemeProvider>
);
}