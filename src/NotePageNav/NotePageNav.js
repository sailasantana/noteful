import React from 'react'
// #todo import Add/Circle button component
//import './NotePageNav.css'
import NotefulContext from '../app/NotefulContext'

export default function NotePageNav() {
    return(
    <AppContext.Consumer>
        {( context ) => {
                    return (
                        <div className="NotePageNav">
                            <button 
                                role="link"
                                onClick={() => context.history.goBack()}
                                className="NotePageNav_back-btn"
                            >
                                Back
                            </button>
                            {props.folder && (
                                <h3 className="NotePageNav_folder-name">
                                    {context.folder.name}
                                </h3>
                            )}
                        </div>
            ) 
         }
     }
                       
    </AppContext.Consumer>
    )
}

//NotePageNav.defaultProps = {
   // history: {
        //goBack: () => {}
   // }
//}