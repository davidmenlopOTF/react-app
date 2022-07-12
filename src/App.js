import React from 'react';
import './App.scss';
import SpinningLogo from './components/SpinningLogo';
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Card from './components/Card';
import reactLogo from './images/logo.svg';
import sprocketLogo from './images/sprocket.svg';
import axios from 'axios';
import { useState, useEffect } from "react";




function App({ moduleData }) {

    /* let [axiosData, setData] = useState([]);

  let { name, results } = axiosData;

  let api = `https://pokeapi.co/api/v2/pokemon/ditto`;

  useEffect(() => {
    (async function () {
      let data = await axios.get(api);
      let dav = data.data;
      setData(dav);
    })();
  }, [api]); */

  // eslint-disable-next-line no-console
  

  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  

  let componente;
  if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />
  }

 
  return (
    <>
      <Header titulo={moduleData.product_name} />
      <div className="container">
        <Formulario 
        cantidad={cantidad} 
        setCantidad={setCantidad} 
        plazo={plazo} 
        setPlazo={setPlazo} 
        setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
  );
}

export default App;

    /* 
    console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
    <div className="cms-react-boilerplate__container">
      <Header titulo="Cotizador de Prestamos" />
      <div className="spinning-logo__container">
      <Formulario/>
      </div>
      <p>
        Edit <code>src/App.js</code> and save to reload test. 
        {moduleData.form.message}, {moduleData.form.message}
      </p>
      <Card initialClickCount={moduleData.initial_count} />
    </div> */