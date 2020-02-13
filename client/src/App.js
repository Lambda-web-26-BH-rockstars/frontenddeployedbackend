import React, {useEffect, useState} from 'react';
import axios from 'axios'
import User from './User';

function App() {
  const [api] = useState('https://zakmayfield-api3.herokuapp.com/api/users')
  const [getDb, setGetDb] = useState([])

  useEffect(()=>{
    axios.get(api)
      .then(res=>{
        console.log(res.data)
        setGetDb(res.data)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <header></header>
      <main>
        {getDb.map((user, i)=> <User key={i} user={user} /> )}
      </main> 
    </>
  );
}

export default App;
