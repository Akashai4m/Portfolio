import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Project() {

  function web1link() {
    // Replace 'https://www.example.com' with the desired URL you want to redirect to
    var urlToRedirect = 'https://chatgpt-one-tau.vercel.app/';
    window.location.href = urlToRedirect;
}

function web2link() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://payment-method-ten.vercel.app/';
  window.location.href = urlToRedirect;
}

function web3link() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://sky260701.github.io/E-Commerce-Website/';
  window.location.href = urlToRedirect;
}

function web4link() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://restorant-webapp.vercel.app/';
  window.location.href = urlToRedirect;
}

function web5link() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://walldesign.vercel.app/';
  window.location.href = urlToRedirect;
}

function web6link() {
  // Replace 'https://www.example.com' with the desired URL you want to redirect to
  var urlToRedirect = 'https://sky260701.github.io/COFFEE-WEBSITE/';
  window.location.href = urlToRedirect;
}

  return (
    <div style={{backgroundColor:"#323946"}}>
         <Box sx={{flexGrow:1}}>
            <Container>
              <br/>  
                <Grid lg={12} marginBottom={4}  >
                        <Typography variant='h4'color="white">Latest <span style={{color:"#00eeff"}}>Projects</span></Typography>
                    </Grid>
                <Grid container spacing={2} sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around"}}   >

                     <Grid lg={3.5}  xs={5.5} colSpacing={2} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 ,backgroundColor:"#323946" }}
        image={require('../images/web1.png')}
        title="green iguana"
      />
      <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' onClick={web1link} sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
      
    </Card>
                        </Grid>  
                        <Grid lg={3.5}  xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/web2.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' onClick={web2link} sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
     
    </Card>
                        </Grid>  
                        <Grid lg={3.5}  xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/web3.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' onClick={web3link} sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
     
    </Card>
                        </Grid>  
                      
                      
                       
                
                     <Grid lg={3.5} xs={5.5} colSpacing={2} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/web4.png')}
        title="green iguana"
      />
        <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' onClick={web4link} sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
     
     
    </Card>
                        </Grid>  
                        <Grid lg={3.5} xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/web5.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' onClick={web5link} sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
      
    </Card>
                        </Grid>  
                        <Grid lg={3.5} xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/coffee.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' onClick={web6link} sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
    </Card>
                        </Grid>  
                      
                      
                       
                </Grid>
            </Container>
<br/><br/>
         </Box>
    </div>
  )
}

export default Project