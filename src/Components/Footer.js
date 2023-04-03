import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function Footer() {
  return (
    <div style={{backgroundColor:"#323946"}}>
        <Box sx={{flexGrow:1}}>
            <Container>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-evenly"}}>
                    <Typography variant='h6'color="white"> Copyrights and all rights are reserved </Typography>
                    <LogoutIcon fontSize='large'/>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Footer