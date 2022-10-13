import './App.css';

// mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// component
import Header from './components/Header.js';
import Soal from './components/Soal.js';

const mainFeaturedPost = {
  title: 'Asah Otak',
  description:
    "Asah kemampuan berpikirmu dengan mengikuti quiz.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Ikuti quiz…',
};

const theme = createTheme();

function QuizPage() {
  const soal = [{
    q : 'Aku adalah hewan. Aku termasuk ke dalam serangga sehingga kakiku ada 6. Aku hidup berkelompok yang dipimpin oleh satu ratu. Aku dan teman-temanku selalu bekerja keras mengumpulkan makanan yang tergeletak agar kami bisa hidup. Siapakah aku?',
    opsi : ['Lebah', 'Semut'],
    a : 'Lebah'
  }];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Quiz Siapakah Aku
        </Typography>
        <Soal soal={soal}/>
      </Container>
    </ThemeProvider>
  );
}

export default QuizPage;
