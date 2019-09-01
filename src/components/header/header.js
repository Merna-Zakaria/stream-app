import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <span><Link to='/list'>Streamy</Link></span>
            <span><Link to='/list'>Stream List</Link></span>
        </div>
    )
    
}

export default Header;