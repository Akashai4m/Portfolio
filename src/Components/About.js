import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
import user from "../images/userimage.jpg";
import Avatar from '@mui/material/Avatar';
import Theme from './Theme';

function About() {
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
                        <Typography variant='h8' color="white">Writing objects: 100% (7/7), 566 bytes | 566.00 KiB/s, done.
                                        Total 7 (delta 6), reused 0 (delta 0), pack-reused 0
                                         remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
                                          To https://github.com/AI4M-Official/Prudent-Dashboard.git
                                               a3c27f9..dbb7a5e  Akash-testing Akash-testing
                                            branch 'Akash-testing' set up to track 'origin/Akash-testing'.
                                              PS C:\Users\akash\OneDrive\Desktop\Prudent-Dashboard\Prudent-Dashboard</Typography>
                                              <br/><br/>
                                              <Grid>
                                              <Button variant='contained' size='medium' sx={{backgroundColor:"#00eeff",color:"black",borderRadius:"16px"}}>Read More..</Button>
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