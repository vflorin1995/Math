import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Nav from './Components/nav';
import Home from './Components/home';
import Quote from './Components/quote';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
