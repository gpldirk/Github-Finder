
import React from 'react'
import PropTypes from 'prop-types'
import Repo from './Repo'

const Repos = ({ repos }) => {
  return (
    repos.map(repo => (
      <Repo repo={repo} key={repo.id} />
    ))
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default Repos;
