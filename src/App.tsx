import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebApp from '@twa-dev/sdk'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  

  return (
    <>
      <h1>Запись на приём</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
        <TextField
          required
          id="firstName"
          label="Имя*"
          defaultValue="Hello World"
        />

    </Box>
    </>
  )
}

export default App
