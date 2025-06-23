import { useRef } from 'react';
import Nav from './components/nav/Nav.jsx';
import Hero from './components/hero/Hero.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  const formRef = useRef(null); 

  
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Nav openModal={scrollToForm} /> 
      <Hero formRef={formRef} />       
      <Footer />
    </div>
  );
}

export default App;

