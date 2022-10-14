import * as React from 'react';
// mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// component
import Header from './components/Header.js';
import Answer from './features/answer/answer';

const theme = createTheme();

function ResultPage(props) {
  const { hasil } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Selamat, hasil.nama
          <Answer />
          Nilai Anda adalah 100!
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default ResultPage;
