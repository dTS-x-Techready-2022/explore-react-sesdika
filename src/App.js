import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import HomePage from './HomePage.js';
import QuizPage from './QuizPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
