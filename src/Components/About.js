import React ,{useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import user from "../images/userimage.jpg";
import Avatar from '@mui/material/Avatar';
import Theme from './Theme';

function About() {

    const [open ,setopen] = useState(false)
    const [buttonname ,setbuttonname] = useState('Read More..')

    function readmore (){
      setopen(!open) ;
      setbuttonname('Close')
    }

  return (
    <div style={{backgroundColor:"#2e3542"}}>
         <Box sx={{flexGrow:1}}>
            <Container><br/><br/>
                <Grid container spacing={2} style={{display:"flex" ,alignItems:"center"}}>
                    <Grid lg={5} xs={12} marginTop={2} style={{display:'flex',justifyContent:"center"}}>
                    {/* <Avatar
        alt="Remy Sharp"
        src={user}
        sx={{ width: 300, height: 300 }}
      /> */}
      <Theme style={{ backgroundColor:"323946"}}/>
                    </Grid>
                    <Grid lg={5} marginTop={2}>
                        <Typography variant='h4' color="white">About  <span style={{color:"#00eeff"}}>Me</span> </Typography>
                        <Typography variant='h8' color="white">Hello! I'm Akash, a passionate and results-driven software developer actively seeking new opportunities to showcase my skills and expertise. With a primary focus on web development and app development, I thrive in creating engaging and cutting-edge digital experiences.</Typography><br/><br/>
                       {open && <Typography variant='h8' color="white">My ultimate goal as a software developer is to create impactful and forward-thinking solutions. I thrive in collaborative environments, where I can contribute my expertise and learn from others. I am eager to join teams that share the same drive to shape the future of technology.</Typography> }
                                              <br/><br/>
                                              <Grid>
                                              <Button variant='contained' onClick={readmore} size='medium' sx={{backgroundColor:"#00eeff",color:"black",borderRadius:"16px"}}>{buttonname}</Button>
                                              </Grid>

                    </Grid>
                </Grid>
            </Container>
            <br/><br/>
         </Box>
    </div>
  )
}

export default About