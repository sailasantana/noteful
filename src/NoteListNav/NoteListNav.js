import React from 'react'
import {NavLink} from 'react-router-dom'
// #todo import Add/Circle button component
// {count} from '../helper'
import NotefulContext from '../app/NotefulContext'

export default function NoteListNav() {
    return (
    <NotefulContext.Consumer>
    {
        ( context ) => {

            return (
                <div className="NoteListNav">
                    <ul className="NoteListNav_list">
                        {context.folders.map(folder =>
                            <li key={folder.id}>
                                <NavLink 
                                    className="NoteListNav_folder-link"
                                    to={`/folder/${folder.id}`}
                                >
                                    <span className="NoteListNav_num-notes">
                                        {/* {count(props.notes, folder.id)} */}
                                    </span>
                                    {folder.name}
                                </NavLink>
                            </li> 
                        )}
                    </ul>
                    <div>
                        <button
                            to="/add-folder"
                            className="NoteListNav_add-folder"
                        >
                            Folder
                        </button>
                    </div>
                </div>
            )
        }
    }
    </NotefulContext.Consumer>
    )
    }

NoteListNav.defaultProps = {
    folders: []
}