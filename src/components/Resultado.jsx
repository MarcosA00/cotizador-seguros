import useCotizador from '../hooks/useCotizador'
import { marcas, planes } from '../constants'
import { useMemo, useRef } from 'react';

function Resultado() {
  const { resultado, datos } = useCotizador();
  const { marca, plan , year } = datos;

  // useRef
  const yearRef = useRef(year);

  const [nombreMarca] = useMemo(() =>
    marcas.filter(m => m.id === +(marca)), 
    [resultado]
  );

  const [nombrePlan] = useMemo(() =>
    planes.filter(p => p.id === +(plan)), 
    [resultado]
  );

  if(resultado === 0) {
    return null;
  }
  
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
      <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>

      <p className='my-2'>
        <span className='font-bold'>Marca: </span>
        { nombreMarca.name }
      </p>
      
      <p className='my-2'>
        <span className='font-bold'>Plan: </span>
        { nombrePlan.name }
      </p>

      <p className='my-2'>
        <span className='font-bold'>Año del Auto: </span>
        { yearRef.current }
      </p>

      <p className='my-2 text-2xl'>
        <span className='font-bold'>Total Cotización: </span>
        { resultado }
      </p>
    </div>
  )
}

export default Resultado