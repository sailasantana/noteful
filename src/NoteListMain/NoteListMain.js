import React from 'react';
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import NotefulContext from '../app/NotefulContext'
//import './NoteListMain.css'


export default function NoteListMain() {
    return(
        <AppContext.Consumer>
            {
                ( context ) => { 
                    return (
                        <section className="NoteListMain">
                            <ul>
                                {context.notes.map(note =>
                                <li key={note.id}>
                                    <Note 
                                        id={note.id}
                                        name={note.name}
                                        modified={note.modified}
                                    />
                                </li>  
                                )}
                            </ul>
                            <div className="NoteListMain_btn-container">
                                {/* make this it's own component */}
                                <button
                                    tag={Link}
                                    to="/add-note"
                                    className="NoteListMain__add-note-btn"
                                >
                                    Note
                                </button>
                            </div>
                        </section>
                    )
                }

            }   
        </AppContext.Consumer>
    )
    
}

//NoteListMain.defaultProps = {
    //notes: [],
//}