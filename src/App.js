import { useState, useEffect } from 'react';
import kanye from "./image/kanye.jpg"
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    novaFrase();
  }, []);

  const novaFrase = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => setQuote(data.quote))
      .catch(error => console.error('Erro:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className='kanyeImg' src={kanye} alt='imagem kanye'/>
        <h2>{quote}</h2>
        <button className='botaoGerar' onClick={novaFrase}>Gerar Nova Frase</button>
      </header>
    </div>
  );
}

export default App;
