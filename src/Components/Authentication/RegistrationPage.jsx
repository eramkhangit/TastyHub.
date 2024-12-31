import React from 'react'
import { Container, TextField, Button } from '@mui/material'

function RegistrationPage() {
  return (
    <div className='mt-[70px] border-2 border-red-600'>

      <Container sx={{ border: '2px solid red', width: '100%' }}>

        <form className='border-[1px] border-green-600 my-[80px] flex flex-col justify-center items-center gap-8 w-full rounded bg-[#d0faeb] md:w-[40%] mx-auto py-8' >

          <TextField label="User Name" type='text' color="secondary" required />

          <TextField label="Mobile Number" type='text' color="secondary" required />

          <TextField label="Password" type='password' color="secondary" required />

          <div className='border-[1px] border-[#004225] rounded w-[44%] md:w-[26%]' >
            <Button sx={{
              padding: '10px 25px',
              '&:hover': {
                backgroundColor: '#004225', 
                color : 'white' // background color on hover
              },
            }} size="medium">Register</Button>
          </div>

        </form>

      </Container>

    </div>
  )
}

export default RegistrationPage