import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // Change baseURL to your APIC api endpoint
  const baseURL = "https://lfg-gw-gateway-ibm-common-services.apps.66ff8e739c3956c46a304ad9.ocp.techzone.ibm.com/lfg-life-insurance/prod/zen";

  function handleGetData() {
    axios.get(baseURL, {
      headers: {
        // replace your api key here
        'X-IBM-Client-ID': '433614e22d65b3cbb45185e58045036d'
      }
    })
    .then((response) => {
      let result = JSON.stringify(response);
      let parsedResult = JSON.parse(result);
      setData(parsedResult);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleGetData}>GET DATA</button>
      <div>{data && JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
