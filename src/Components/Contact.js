import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button,  Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  input: {
    color: 'red', // change this to the desired placeholder color
    '&::placeholder': {
      color: 'grey', // change this to the desired placeholder color
    },
  },
});

function Contact() {

  const classes = useStyles();

  return (
    <div style={{backgroundColor:"#1f242d"}}>
        <Box sx={{flexGrow:1}}>
            <Container>
            <br/>  
                <Grid lg={12} marginBottom={4} >
                        <Typography variant='h4'color="white">Contact <span style={{color:"#00eeff"}}>Me</span>!</Typography>
                    </Grid>
                    <Grid container spacing={2}>
       
        <Grid item xs={6}>
        <TextField  InputLabelProps={{
        style: {
          color: 'white', // change this to the desired label color
        },
      }} id="filled-basic" label=" Name" variant="filled"  sx={{ input: { color: 'white' } }}  style={{ width: "100%", margin: "5px",color:"white" }} />
        </Grid>
        <Grid item xs={6}>
        <TextField  InputLabelProps={{
        style: {
          color: 'white', // change this to the desired label color
        },
      }} id="filled-basic" label="SirName" variant="filled" sx={{ input: { color: 'white' } }} style={{ width: "100%", margin: "5px",color:"white" }} />
        </Grid>
        <Grid item xs={6}>
        <TextField  InputLabelProps={{
        style: {
          color: 'white', // change this to the desired label color
        },
      }} id="filled-basic" label="Email Id" variant="filled" sx={{ input: { color: 'white' } }} style={{ width: "100%", margin: "5px" ,color:"white" }} />
        </Grid>
        <Grid item xs={6}>
        <TextField  InputLabelProps={{
        style: {
          color: 'white', // change this to the desired label color
        },
      }} id="filled-basic" label="Phone No." variant="filled" sx={{ input: { color: 'white' } }} style={{ width: "100%", margin: "5px" ,color:"white" }} />
        </Grid>
        <Grid item xs={12}>
        <TextField  InputLabelProps={{
        style: {
          color: 'white', // change this to the desired label color
        },
      }} id="filled-basic" label="Message" variant="filled" sx={{ input: { color: 'white' } }} style={{ width: "100%", margin: "5px" ,color:"white" }} />
        </Grid>
        <Grid item xs={12} style={{display:"flex" ,justifyContent:"center" ,borderRadius:"16px"}}>
            <Button variant='contained' size='medium' style={{borderRadius:"16px" ,color:'black',backgroundColor:"#00eeff"}}> Submit </Button>
        </Grid>
      </Grid>
            </Container>
            <br/><br/>
        </Box>

    </div>
  )
}

export default Contact