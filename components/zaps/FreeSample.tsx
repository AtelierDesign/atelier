import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Heading } from '@design-system/heading';
import { Container } from '@design-system/container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { styled } from 'stitches.config';

const CoverBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

const theme = createTheme();

export function FreeSample() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container size="2">
        <CssBaseline />

        <CoverBox>
          <Heading
            size="2"
            css={{
              alignItems: 'center',
              textAlign: 'center',
              fontFamily: '$neuewide',
              textTransform: 'uppercase',
              fontWeight: '500',
              paddingTop: '35px',
              lineHeight: '10px',
              zIndex: '80',
            }}>
            <strong>FREE </strong>SAMPLE® PACK
          </Heading>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="email"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ bc: '#000', mt: 3, mb: 2 }}>
              Submit
            </Button>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Accept Terms"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Privacy Policy
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CoverBox>
      </Container>
    </ThemeProvider>
  );
}
