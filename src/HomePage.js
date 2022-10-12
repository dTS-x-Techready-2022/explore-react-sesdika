import './App.css';

// mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

// component
import Header from './components/Header.js';
import MainFeaturedPost from './components/MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Asah Otak',
  description:
    "Asah kemampuan berpikirmu dengan mengikuti quiz.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Ikuti quiz…',
};

const theme = createTheme();

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;
