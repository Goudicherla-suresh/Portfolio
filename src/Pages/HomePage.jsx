import { Box, Button, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Container sx={{marginTop:'150px' ,display: 'flex'}}>
        {/* box 1 */}
        <Box width={'50%'}> 
          <Typography sx={{fontWeight: 'bold',fontSize:'24px' }} align='left'> Hi I am</Typography>

          <Typography align='left' color={'#FF6300'} sx={{fontWeight: 'bold',fontSize:'32px' }}> SURESH GOUDICHERLA</Typography>

          <Typography variant='h1' fontSize={'80px'}  align='left'>UI & UX</Typography>

          <Typography variant='h1' fontSize={'80px'} align='center' >Designer</Typography>

          <Typography paragraph align='left'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</Typography>

          <Button variant='contained' align='left'> Hire Me</Button>

         </Box>
         {/*BOx 2  */}
        <Box width={'50%'}>
            
             </Box>
    </Container>
  )
}

export default HomePage
