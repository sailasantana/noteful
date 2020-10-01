import React from 'react';
import STORE from './dummy-store';
import './folder.css'

function Folder(){

    const folderItems = STORE.folders.map((folder) =>
    <li key={folder.id} className = "folder">
      {folder.name}
    
    </li>)
 
    return (
        <div className = "allFolders">
        <ul >
           {folderItems}  
        </ul>
        <button>Add A Folder</button>
        </div>
    )
 
}

export default Folder;