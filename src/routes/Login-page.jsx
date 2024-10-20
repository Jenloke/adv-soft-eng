import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/homepage-webslider-1.jpg'; // Your image path

// Container for the entire layout
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  width: '100vw',
  backgroundColor: "#ebebeb"
}));

// Left section with background image
const LeftSection = styled(Box)(({ theme }) => ({
    position: "relative",
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: -40,
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
}));

// Right section with form
const FormSection = styled(Box)(({ theme }) => ({
    flex: 1, // Occupies 1/3 of the screen width
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    padding: theme.spacing(4),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    zIndex: 2, // Ensure form is above background image
}));

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <StyledContainer maxWidth={false}>
      {/* Left side: Background Image */}
      <LeftSection />

      {/* Right side: Form */}
      <FormSection>
        <Box width="100%" maxWidth="400px">
          <Typography variant="h4" textAlign="center" gutterBottom>
            ICT SERVICES
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email ID"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box mt={2}>
              <Button variant="contained" type="submit" fullWidth>
                Sign in
              </Button>
            </Box>
            <Typography variant="body2" mt={2} textAlign="center">
              Forgot password?{' '}
              <a href="#">Click here</a>
            </Typography>
          </form>
        </Box>
      </FormSection>
    </StyledContainer>
  );
};

export default LoginForm;
