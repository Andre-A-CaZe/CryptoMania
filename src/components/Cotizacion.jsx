import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    background-color: #fca311;
    margin-top: 5px;
    padding: 15px;
    padding-right: 40px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
`;

const Imagenes = styled.img`
    display: block;
    margin: 20px 0;
    max-width: 90px;
    @media (max-width: 992px) {
    form {
       display: flex;
       flex-direction: column;
       align-items: center;
     }
    }
`;

const ResultadoContainer = styled.div`
    background-color: #1a1a1a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
`;


const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 20px;
    span {
        font-weight:bold;
}
`;

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null

    console.log(resultado);

    return ( 
        <ResultadoContainer> 
            <ResultadoDiv>
            <Imagenes 
                    src={`https://www.cryptocompare.com/${resultado.IMAGEURL}`} 
                    alt="Imagen de la crypto" 
                />
                <div>
                <Precio>Precio Unitario de la Criptomoneda: <span>{resultado.PRICE}</span> </Precio>
                <Info>Precio Unitario más alto del día: <span>{resultado.HIGHDAY}</span> </Info>
                <Info>Precio Unitario más bajo del día: <span>{resultado.LOWDAY}</span> </Info>
                <Info>Variación del valor en las últimas 24 horas a sido de: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
                <Info>Última Actualización a la Informacion: <span>{resultado.LASTUPDATE}</span> </Info>
                </div>
            </ResultadoDiv>
        </ResultadoContainer>
     );
}
 
export default Cotizacion;