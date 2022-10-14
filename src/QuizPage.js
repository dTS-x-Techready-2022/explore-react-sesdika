import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import iauction from 'iauction';

// mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

// component
import Header from './components/Header.js';
import Soal from './components/Soal.js';

const theme = createTheme();

const curTimestamp = Date.now();
console.log("curTimestamp",curTimestamp)

function QuizPage() {
  const soals = [{
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
  
  const navigate = useNavigate();
  const submitQuiz = (event) => {
    navigate('/result')
  };

  const [countdown, setCountdown] = useState("00:00")

  useEffect(() => {
    iauction({
      countdownInMin: 3,
      startDate: curTimestamp,
      endDate: curTimestamp + (4 * 60 * 1000),
      // startDate: "2022/10/14 08:13:30",
      // endDate: "2022/10/14 17:32:00",
      callback: (response) => setCountdown(response.time),
    });
  }, [])

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
        >{countdown}</Typography>
        <FormControl sx={{ py: 3 }}>
          {
            soals.map((soal, i) => (
              <Soal key={i} soal={{isisoal: soal, idx: i}}/>
            ))
          }
          <Button onClick={submitQuiz} sx={{ mt: 3 }} variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </Container>
    </ThemeProvider>
  );
}

export default QuizPage;
