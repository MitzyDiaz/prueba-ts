import React from "react";
import { Grid, Avatar, TextField, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import img from '../img/logo-white-without.png';
import '@fontsource/roboto/400.css';

export const Login = () => {
    const navigate = useNavigate();
    const avatarStyle = { margin: '0 auto' }
    const boxstyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "35%",
        maxWidth: "35rem",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: '0.6rem',
    };
    const containerCstm = {
        height: '20rem',
        minHeight: '17rem'
    };

    function handleClick(){
        navigate("/Home");
    }

    const bgImg = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.77), rgba(5, 57, 112, 0.66)), url("https://desarrolloweb.senado.gob.mx/repo/bgImg.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        borderRadius: '0.6rem 0rem 0rem 0.6rem'
    }

    
    return <div style={ { backgroundImage: `url("https://desarrolloweb.senado.gob.mx/repo/bg-CP.png")`, backgroundSize: 'cover', backgroundPosition: 'center',height: '100vh' } }>
    <Container maxWidth="xl">
            <Box sx={boxstyle}>
                <Grid container sx={containerCstm}>
                    <Grid item xs={6} style={bgImg}>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Box
                                style={{
                                    color: '#ededed',
                                    textAlign: 'center', 
                                    position: 'absolute',
                                    top: '25%'
                                }}>
                                <Avatar style={avatarStyle} sx={{ width: 80, height: 80}} src={img} ></Avatar>
                                <div className="titleLogin">
                                <Typography variant="h1" sx={{fontSize: '18px', fontFamily: 'Roboto', textTransform: 'uppercase', marginTop:'16px'}}>
                                    Senado de la República
                                </Typography>
                                <Typography variant="subtitle2" sx={{marginTop:'10px'}}>
                                    Acceso al Sistema de Control Presupuestal
                                </Typography>
                                </div>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ margin: 'auto' }}>
                        <Container>
                            <Box component="form"
                                sx={{
                                    '& .MuiAvatar-root': { m: 1 },
                                    '& .MuiTextField-root': { m: 1 },
                                    '& .MuiButton-root': { m: 1 },
                                    textAlign: 'center',
                                    margin: 'auto'
                                }}
                                noValidate
                                autoComplete="off">
                                <Typography variant="subtitle1">
                                    Bienvenido
                                </Typography>
                                <Typography variant="body1">
                                    Inicia Sesión
                                </Typography>
                                <TextField label='Usuario' placeholder="Ingresa tu usuario" size="small" fullWidth required />
                                <TextField label='Password' type="password" placeholder="Ingresa tu contraseña" size="small" fullWidth required />
                                <Button type='submit' variant="contained" color='primary' fullWidth onClick={handleClick}>Entrar</Button>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Container></div>
        ;
};