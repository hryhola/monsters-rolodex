import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='searsh'
        placeholder={ placeholder }
        onChange={ handleChange }
    />
)