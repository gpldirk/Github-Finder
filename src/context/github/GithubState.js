import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types.js';


const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // search users
  const searchUsers = async (input) => {
    setLoading()
    const res = await axios.get(`https://api.github.com/search/users?q=${input}`)
    console.log(res.data.items)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,  // users list
    })
  }

  // get one user
  const getUser = async (username) => {
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${username}`)
    console.log(res.data)

    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  }

  // get repos for one user
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
    console.log(res.data)

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }

  // clear users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    })
  }

  // set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  }

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos,
    }}>

    {props.children}
  </GithubContext.Provider>
}

export default GithubState;