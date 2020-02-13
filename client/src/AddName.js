import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {APIContext} from './contexts/APIContext'

const AddName = () => {
  const [name, setName] = useState({name: ""})

  const {
    api,
    resetHandler
  } = useContext(APIContext)


  const changeHandler = (e) => {
    setName({...name, [e.target.name] : e.target.value})
  }

  //useEffect(()=>{console.log(name)},[name])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(api, name)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => {
        setName({name: ""})
        resetHandler()
      })
  }

  return (
    <form
      onSubmit={(e)=> submitHandler(e)}
    >
      <label>Name</label>
      <input 
        name="name"
        value={name.name}
        onChange={(e)=>changeHandler(e)}
      />
      <button type="submit">Add Name</button>
    </form>
  )
}

export default AddName