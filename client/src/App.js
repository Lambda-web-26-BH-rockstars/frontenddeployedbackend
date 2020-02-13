import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  const [api] = useState('https://zakmayfield-api3.herokuapp.com/api/users')
  const [getDb, setGetDb] = useState({})

  useEffect(()=>{
    axios.get(api)
      .then(res=>{
        console.log(res)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <header></header>
      <main>

      </main> 
    </>
  );
}

export default App;
