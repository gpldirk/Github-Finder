import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

const Search = () => {
  const [input, setInput] = useState('')
  const githubCtx = useContext(GithubContext)
  const alertCtx = useContext(AlertContext)

  const { clearUsers, searchUsers, users } = githubCtx;
  const { setAlert }  = alertCtx;

  const inputChangeHandler = (event) => {
    setInput(event.target.value)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (input.trim() === '') {
      setAlert('Input cannot be empty!', 'primary');

    } else {
      searchUsers(input)
      setInput('')
    }
  }
  
  return (
    <div>
      <form className='form' onSubmit={formSubmitHandler}>
        <input type="text" name="text" placeholder="Search Users..." 
        value={input} onChange={inputChangeHandler}/>

        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>

      { users !== null && users.length > 0 &&
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
    </div>
  )
}


export default Search;
