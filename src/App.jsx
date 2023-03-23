import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import imagen from './assets/crypto.png'
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


const Imagen = styled.img`
    max-width: 500px;
    width: 100%;
    margin: 50px auto 0 auto;
    display: block;
    
  `;

  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }
  `;
 
  const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 35px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
  `;
function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    
    const cotizarCriptomoneda = async() => {
        //evitamos la ejecucion la primera vez
      if(moneda === '') return;

      //consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      //mostrar spinner
      setCargando(true);
      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        //cambiar el estado del cargando
        setCargando(false);
        //guardar cotizacion
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);

    }

    cotizarCriptomoneda();

  }, [moneda, criptomoneda])

  // MOstrar spinner o resultado

  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado = {resultado}/>

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="Imagen crypto"
        />
      </div>
      <div>
        <Heading>CryptoMania al instante</Heading>
          <Formulario
            setMoneda = {setMoneda}
            setCriptomoneda = {setCriptomoneda}
          />
          {componente}
      </div>
    </Contenedor>
  );
}

export default App;
