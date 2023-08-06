/* eslint-disable no-restricted-globals */
import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import user from "../images/userimage.jpg";
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Theme from './Theme';


function Header() {

  function downloadPDF() {
    // event.preventDefault();
    const pdfUrl = require('../images/Akash Deshmukh-Software Developer.pdf');
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = pdfUrl.split('/').pop();
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  
  function instalink() {
    // Replace 'https://www.example.com' with the desired URL you want to redirect to
    var urlToRedirect = 'https://www.instagram.com/akashdeshmukh3030/';
    window.location.href = urlToRedirect;
}

function linkdlnlink() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://www.linkedin.com/in/akash-deshmukh-95a676229/';
  window.location.href = urlToRedirect;
}

function githublink() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://github.com/sky260701';
  window.location.href = urlToRedirect;
}


  return (
    <div style={{backgroundColor:"#1f242d"}}>
        
        <Box sx={{flexGrow:1}}>
            <Container>
            <br/><br/>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-between" ,alignItems:"center"}}>
                    <Grid xs={12} lg={4} sx={{display:"grid", justifyContent:"center"}} marginTop={2} >
                        <Typography color="white" variant='h5'>Hello, It's Me</Typography>
                        <Typography color="white" variant='h4'>Akash  Deshmukh</Typography>
                        <Typography color="white" variant='h5'>And,I'm a <span style={{color:"#00eeff"}}>Software Developer</span></Typography>
                        {/* <Typography color="white" variant='body-2'>fngjerggsgfghsdfgfdgjfdkbgkdsjbtrhjgkgtrgyueriehythuerigthfbgffngberhbgrehgweyuhfgurty44eufhgjnjgkfnd</Typography> */}
                        <Grid>
                          {/* <Typography color="white" variant='h9'>fgfnjnfghjhjmhxgjnhnjfdbhgnjdghnghmhjmnhgnjhmdgxhgsdgdhnfhmfhm</Typography> */}
                        </Grid>
                        <Grid>
                            <IconButton onClick={instalink} variant="outlined" sx={{color:"#00eeff"}}><Avatar variant='outlined' style={{color:"#00eeff" ,border:"2px #00eeff" ,backgroundColor:"transparent"}}><InstagramIcon/></Avatar></IconButton>
                            <IconButton onClick={linkdlnlink} sx={{color:"white"}}><Avatar variant='outlined' style={{color:"#00eeff" ,border:"2px #00eeff" ,backgroundColor:"transparent"}}><LinkedInIcon/></Avatar></IconButton>
                             <IconButton sx={{color:"white"}}><Avatar variant='outlined' style={{color:"#00eeff" ,border:"2px #00eeff" ,backgroundColor:"transparent"}}><FacebookIcon/></Avatar></IconButton>
                             <IconButton onClick={githublink} sx={{color:"white"}}><Avatar variant='outlined' style={{color:"#00eeff" ,border:"2px #00eeff" ,backgroundColor:"transparent"}}><GitHubIcon/></Avatar></IconButton>
                        </Grid>
                        <br/>
                        <Grid>
                            <Button variant='contained' onClick={downloadPDF} size='medium' sx={{backgroundColor:"#00eeff",color:"black",borderRadius:"16px"}}>Download CV</Button>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid xs={12} lg={6} sx={{display:'flex',justifyContent:'center'}} marginTop={2}>
                    {/* <Avatar
        alt="Remy Sharp"
        src={user}
        sx={{ width: 350, height: 350 }}
      /> */}
      <Theme/>
                    </Grid>

                </Grid>
            </Container>
        </Box>
<br/><br/>
    </div>
  )
}

export default Header

