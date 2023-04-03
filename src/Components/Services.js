import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalCellularAlt from '@mui/icons-material/SignalCellularAlt';

function Services() {
  return (
    <div style={{backgroundColor:"#1f242d"}}>
        <Box sx={{flexGrow:1}}>
            <Container>
                <br/><br/>
                <Grid lg={12}  marginBottom={2} >
                        <Typography variant='h4'color="white">Our <span style={{color:"#00eeff"}}>Services</span></Typography>
                    </Grid>
                <Grid container spacing={2} style={{display:"flex" ,justifyContent:"space-evenly"}} >
                   
                    
                    <Grid lg={3}  rowSpacing={1} marginTop={2} xs={10}>
                    <Card sx={{ minWidth: 275 ,backgroundColor:"#323946" }} >
      <CardContent>
       <CodeIcon fontSize="large" style={{color:"#00eeff"}}/>
        <Typography variant="h5" component="div" color="white">
          Web Development
        </Typography>
       
        <Typography variant="body2" color="white">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size="medium" style={{backgroundColor:"#00eeff" ,color:"#000" ,borderRadius:"16px"}}>Learn More</Button>
      </CardActions>
      <br/>
    </Card>
                    </Grid>
                    <Grid lg={3} rowSpacing={1} marginTop={2} xs={10}>
                    <Card sx={{ minWidth: 275 ,backgroundColor:"#323946"  }}>
      <CardContent>
       <DesignServicesIcon fontSize="large" style={{color:"#00eeff"}}/>
        <Typography variant="h5" component="div" color="white">
          App Development
        </Typography>
       
        <Typography variant="body2" color="white">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size="medium"style={{backgroundColor:"#00eeff" ,color:"#000" ,borderRadius:"16px"}} >Learn More</Button>
      </CardActions>
      <br/>
    </Card>
                    </Grid>
                    <Grid lg={3} rowSpacing={1} marginTop={2} xs={10} >
                    <Card sx={{ minWidth: 275 ,backgroundColor:"#323946" }}>
      <CardContent>
       <SignalCellularAltIcon fontSize="large" style={{color:"#00eeff"}}/>
        <Typography variant="h5" component="div" color="white">
          Digital Marketing
        </Typography>
       
        <Typography variant="body2" color="white">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex" ,justifyContent:"center"}}>
        <Button size="medium"  variant='contained' style={{backgroundColor:"#00eeff" ,color:"#000" ,borderRadius:"16px"}}>Learn More</Button>
      </CardActions>
      <br/>
    </Card>
                        </Grid>
                </Grid>
            </Container>
            <br/><br/>
        </Box>

    </div>
  )
}

export default Services