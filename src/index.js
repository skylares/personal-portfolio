import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Resume from './routes/Resume';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='Resume' element={<Resume />} />
      <Route path='*' element={<h1>404: Page Does Not Exist!</h1>} />
    </Routes>
  </BrowserRouter>
);