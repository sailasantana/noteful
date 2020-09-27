import React from 'react';
import STORE from './dummy-store';

function folder(){
 
    return (
        <ul>
           <li>{STORE.folders[0].name}</li>
        </ul>
    )
 
}

export default folder;