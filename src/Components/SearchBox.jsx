import React from 'react';

import './SearchBox.css'

export default function SearchBox({ searchChange }) {
    return (
        <div>
            <div className='search-container'>
                <input className='search-robo' onChange={searchChange} type='search' name='SearchBox' placeholder='search'></input>
            </div>
        </div>
    )
}