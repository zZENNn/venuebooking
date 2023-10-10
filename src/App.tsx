//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import { Style } from '@mui/icons-material';
import './App.css'
//import WebApp from '@twa-dev/sdk'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
//import WebApp from '@twa-dev/sdk'
//import { ThemeParams } from '@twa.js/sdk';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {
  
  // let bg_color = WebApp.themeParams.bg_color
  //console.log('tg color theme is:')
  //  const themeParams = await ThemeParams.synced();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <div id='root'>
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
            label="Имя"
            defaultValue="Введите имя"
            fullWidth
            color='secondary'
            style={{borderColor: '#FFFFFF'}}
          />
          <TextField
            required
            id="firstName"
            label="Фамилия"
            defaultValue="Введите фамилию"
            fullWidth
          />
          <DatePicker label="День приёма" />

        </Box>
        <p>Цвет:</p>
      
    </div>
    </LocalizationProvider>
   
  )
}

export default App
