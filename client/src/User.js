import React, {useState, useContext} from 'react'
import {APIContext} from './contexts/APIContext'
import axios from 'axios'
import './user.scss'


const User = ({user}) => {
  const [name, setName] = useState({name: user.name})
  const [editing, setEditing] = useState(false)

  const {
    api,
    resetHandler
  } = useContext(APIContext)


  const changeHandler = (e) => {
    setName({...name, [e.target.name] : e.target.value})
  }

  const editHandler = (e) => {
    e.preventDefault()
    console.log(`${api}/${user.id}`, name)
    axios.put(`${api}/${user.id}`, name)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => {
        editToggle()
        resetHandler()
      })
  }

  const editToggle = ( ) => {
    setEditing(!editing)
  }

  const deleteHandler = () => {
    axios.delete(`${api}/${user.id}`)
      .then(res=> console.log(res))
      .catch(err => console.log(err))
      .finally(() => {
        resetHandler()
      })
  }

  return (
    <>
      <article>
        {editing?(
          <form
            onSubmit={(e)=> editHandler(e)}
          >
            <input 
              name="name"
              value={name.name}
              onChange={(e)=>changeHandler(e)}
            />
            <button type="submit">Submit Change</button>
            <button
            onClick={
              ()=> {
                editToggle()
              }
            }
          >
            Cancel Edit
          </button>
        </form>
        ):(
        <p>{user.name}

        </p>)}
        <button
            onClick={
              ()=> {
                editToggle()
              }
            }
          >
            Edit
          </button>
          <button
            onClick={
              ()=> {
                deleteHandler()
              }
            }
          >
            Delete
          </button>
      </article>
    </>
  )
}

export default User