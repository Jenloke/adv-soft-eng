import { useState } from 'react'
import { TextField, Button, Typography, Box, IconButton, InputAdornment, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import backgroundImage from '../assets/homepage-webslider-1.jpg' // Your image path
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { useNavigate } from 'react-router-dom'
import supabase from '../utils/supabase'

// Container for the entire layout
// const StyledContainer = styled(Container)(({ theme }) => ({
const StyledContainer = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#e8f4fa',
  overflow: 'hidden'
}))

// Left section with background image
// const LeftSection = styled(Box)(({ theme }) => ({
const LeftSection = styled(Box)(({ theme })=> ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.7, // Adjust opacity here
    zIndex: 1,
  },
  flex: 2, // Occupies 2/3 of the screen width
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide on smaller screens
  },
}))

// Right section with form
const FormSection = styled(Box)(({ theme }) => ({
  flex: 1, // Occupies 1/3 of the screen width
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ebebeb',
  borderRadius: theme.shape.borderRadius,
  zIndex: 2, // Ensure form is above background image
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Full width for small screens
    margin: theme.spacing(1),
  },
}))

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Handle login logic here
    const { data, error } = await supabase.auth.signInWithPassword({
      // email: 'test@example.com',
      // password: '123456',
      email: email,
      password: password,
    })

    if (error) {
      console.log(error.message);
      setPasswordError(true);
      setPassword('');
    } else {
      setPasswordError(false); 
      console.log(data);
      navigate('/');
    }
  }

  return (
    <StyledContainer>
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        width="100%"
        height="100vh"
      >
        <LeftSection/>
        <FormSection>
          <Box width="100%" maxWidth="400px">
            <Typography variant="h4" textAlign="center" gutterBottom>
              ICT SERVICES
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                required
                label="Email ID"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                label="Password"
                fullWidth
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={passwordError ? 'Incorrect password. Please try again.' : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box mt={2}>
                <Button variant="contained" type="submit" fullWidth>
                  Sign in
                </Button>
              </Box>
            </form>
          </Box>
        </FormSection>
      </Box>
    </StyledContainer>
  )
}
