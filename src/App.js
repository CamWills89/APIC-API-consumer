import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // Change baseURL to your APIC api endpoint
  const baseURL = "<api-endpoint>";

  function handleGetData() {
    axios.get(baseURL, {
      headers: {
        // replace your api key here
        'X-IBM-Client-ID': '<api-key>'
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
