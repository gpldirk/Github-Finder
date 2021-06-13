
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'  // impt

const Navbar = (props) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={props.icon} /> {props.title}
                </Link>
            </h1>   
            
            <Link to='/about'>About</Link>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}


export default Navbar


