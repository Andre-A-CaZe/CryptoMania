import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import axios from 'axios';
import { monedas } from '../data/monedas';
import useCriptomoneda from '../hooks/useCriptoSelector';
import useMoneda from '../hooks/useMonedaSelector';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

    const [listacriptos, setCriptomonedas] = useState([]);
    const [error, setError] = useState(false);


    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', monedas);
    
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listacriptos);

    //ejecutar llamado a la api

    useEffect(() => {
        const consultarAPI = async ( ) => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD';
            const resultado = await axios.get(url);

            setCriptomonedas(resultado.data.Data);
        }

        consultarAPI();
    }, [])


    const cotizarMoneda = e => {
        e.preventDefault();

        if([moneda,criptomoneda].includes('')){
            console.log('ERROR 404');
            setError(true);
            return
          }

        //pasar los datos al componente principal
        setError(false);
        setMoneda(moneda)
        setCriptomoneda(criptomoneda)
    }

    return ( 
        <form onSubmit={cotizarMoneda}>

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null} 

            <SelectMonedas/>

            <SelectCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;