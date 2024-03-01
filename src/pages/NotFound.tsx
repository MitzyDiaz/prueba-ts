import React from 'react';
import { Header } from "../components/Header";
import { Container, Typography, Box } from '@mui/material'

export const NotFound = () => {
    return <div style={{marginTop:'1rem'}}><Header/>
    <Typography variant='h2'>Page Not Found</Typography>
    </div>;
};