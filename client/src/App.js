import React, {useState} from 'react';

function App() {

  const [envfile] = useState(process.env.STORE)

  return (
    <>
      <div>{JSON.parse(envfile)}</div>
      <div></div>
    </>
  );
}

export default App;
