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
        sx={{ height: 140 }}
        image={require('../images/blog01.png')}
        title="green iguana"
      />
      <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
      
    </Card>
                        </Grid>  
                        <Grid lg={3.5}  xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/blog02.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
     
    </Card>
                        </Grid>  
                        <Grid lg={3.5}  xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/blog03.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
     
    </Card>
                        </Grid>  
                      
                      
                       
                
                     <Grid lg={3.5} xs={5.5} colSpacing={2} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/blog04.png')}
        title="green iguana"
      />
        <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
      </CardActions>
     
     
    </Card>
                        </Grid>  
                        <Grid lg={3.5} xs={5.5} rowSpacing={1} marginTop={2}>
                     <Card sx={{ maxWidth: 345 ,backgroundColor:"#1f242d" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../images/blog05.png')}
        title="green iguana"
      />
       <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size='medium' sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
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
        <Button size='medium' sx={{color:"black" ,backgroundColor:"#00eeff" ,borderRadius:"16px"}}>Visit Site</Button>
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