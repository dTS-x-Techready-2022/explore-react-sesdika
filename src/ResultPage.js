import * as React from 'react';
import { useSelector } from 'react-redux'
// mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// component
import Header from './components/Header.js';
import Answer from './features/answer/answer';

const theme = createTheme();

function ResultPage() {
  const answer = useSelector(state => state.answer)

  let nBenar = 0;
  answer.answer.map((opt, i) => (
    (answer.kunci.includes(opt)) ? nBenar+=1 : nBenar += 0
  ))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Typography
          variant="h6"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <Answer />
        </Typography>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Selamat, nilai Anda adalah {Math.ceil(nBenar/answer.answer.length*100)}!
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default ResultPage;
