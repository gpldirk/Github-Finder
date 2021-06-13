import React, { useContext } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';

const Users = () => {
  const githubCtx = useContext(GithubContext)
  const { users, loading } = githubCtx

  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }
  
  if (loading) {
    return <Spinner />
  } else {

    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}


export default Users
