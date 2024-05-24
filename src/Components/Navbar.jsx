import { Button, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div >
      <Container sx={{ paddingTop: '30px' , display: 'flex' , alignItems:'center'}}>
        <Typography>SURESH </Typography>

       <Stack direction={'row'} ml={40} mr={5}>
           <ListItem>Home</ListItem>
           <ListItem>About</ListItem>
           <ListItem>services</ListItem>
           <ListItem>Testimonials</ListItem>
            <ListItem>contact </ListItem>
            
      </Stack>
      <Button variant='contained' color='success'>Download CV
            </Button>
      </Container>
      
    </div>
  )
}

export default Navbar
