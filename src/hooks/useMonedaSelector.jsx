import  React  ,{ Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
      color: white ;
      display: block;
      font-family: 'Lato', sans-serif;
      font-size: 24px;
      font-weight: 700;
      margin: 15px 0;
    `;

    const Select = styled.select`
      width: 100%;
      font-size: 18px;
      color: white;
      padding: 12px;
      border-radius: 10px;
      margin-bottom: 10px;
      background-color:#6061c9;
      text-transform: uppercase;
      transition: background-color .3s ease;
    
      &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
        }
    `;

const useMoneda = (label, stateInicial, opciones) => {

    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label> {label} </Label>
            <Select name="" id="" value={state} onChange={e => actualizarState(e.target.value)}>
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}> {opcion.nombre} </option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, Seleccionar, actualizarState];
}

export default useMoneda;