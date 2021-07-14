import React from 'react';
import './package.css';
import { Codesdata } from './codesdata';

function Package() {
    const stylediv = {
        color: 'black',
        fontSize: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spaceAround',
        flexDirection: 'column',
        height: '80vh'
    };
    return (
        <div style={stylediv}>
            <p>Oops!</p>
            <h3>Page under maintenance</h3>
        </div>
    );
}

export default Package;
