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
  },
  {
    q : 'Aku adalah buah yang seringnya dipakai untuk memasak sayuran. Warnaku ada yang merah dan hijau. Kandunganku sangat baik untuk mencegah penyakit kanker. Siapakah aku?',
    opsi : ['Tomat', 'Cabe'],
    a : 'Tomat'
  },
  {
    q : 'Aku adalah bunga yang sangat cantik. Warnaku bermacam-macam, ada yang merah, pink, dan putih. Aku memiliki wangi yang enak. Tapi kau harus berhati-hati dengan batangku karena ada durinya. Siapakah aku?',
    opsi : ['Mawar', 'Tulip'],
    a : 'Mawar'
  }];

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
          Quiz Siapakah Aku
        </Typography>
        <Typography
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
