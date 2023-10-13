import { useCallback, useMemo } from "react";
import { useState, createContext } from "react";
import { 
  getDifYear, 
  calcularMarca, 
  calcularPlan, 
  formatearDinero 
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  // useState
  const [error, setError] = useState('');
  const [resultado, serResultado] = useState(0);
  const [load, setLoad] = useState(false);

  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    // Valor base del seguro
    let result = 2000;

    // Obtener diferencia de años
    const dif = getDifYear(datos.year);

    // Resta de 3% por cada año 
    result -= ((dif * 3) * result) / 100;

    // Variación por marca
    result *= calcularMarca(+(datos.marca));

    // Variación por plan
    result *= calcularPlan(datos.plan);

    // Formatear precio
    result = formatearDinero(result);

    setLoad(true);

    setTimeout(() => {
      serResultado(result);
      setLoad(false);
    }, 3000)

  }

  return(
    <CotizadorContext.Provider
    value={{
      datos,
      handleChangeDatos,
      error,
      setError,
      cotizarSeguro,
      resultado,
      load
    }}>
      { children }
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;