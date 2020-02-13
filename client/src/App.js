import React, {useEffect, useState} from 'react';
import axios from 'axios'
import User from './User';
import AddName from './AddName';

import {APIContext} from './contexts/APIContext'

function App() {
  const [api] = useState('https://zakmayfield-api3.herokuapp.com/api/users')
  const [getDb, setGetDb] = useState([])
  const [reset, setReset] = useState(true)

  useEffect(()=>{
    axios.get(api)
      .then(res=>{
        console.log(res.data)
        setGetDb(res.data)
      })
      .catch(err => console.log(err))
  },[reset])

  const resetHandler = () => {
    setReset(!reset)
  }

  return (
    <APIContext.Provider value={{api:api, resetHandler:resetHandler}}>
    <>
      <header></header>
      <main>
        <section>
          <AddName />
        </section>
        <section>
          {getDb.map((user, i)=> <User key={i} user={user} /> )}
        </section>
      </main> 
    </>
    </APIContext.Provider>
  );
}

export default App;
