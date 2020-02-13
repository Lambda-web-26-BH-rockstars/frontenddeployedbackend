import React, {useState, useContext} from 'react'
import {APIContext} from './contexts/APIContext'
import axios from 'axios'


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

  return (
    <>
      <article>
        {editing?(
          <form
            onSubmit={(e)=> editHandler(e)}
          >
            <label>Edit Name</label>
            <input 
              name="name"
              value={name.name}
              onChange={(e)=>changeHandler(e)}
            />
            <button type="submit">Edit Name</button>
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
            Edit Name
          </button>
          <button
            onClick={
              ()=> {
                console.log("delete", user.name, user.id)
              }
            }
          >
            Delete User
          </button>
      </article>
    </>
  )
}

export default User