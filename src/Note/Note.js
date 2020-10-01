import React from 'react';
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
//import './note.css'
import endpoint from '../endpoint'
import NotefulContext from '../app/NotefulContext'


class Note extends React.Component {

static contextType = NotefulContext;

handleClick = e => {
    //prevent default form behaviour
    e.preventDefault();
    //to delete the note we need to delete the ID
    const noteId = this.context.id //is this correct?


    //fetch call to endpoint in endpoint.js
    fetch(`${endpoint.ENDPOINT}/notes/${noteId}`,{
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
    })

    .then(response => {
        if (!response.ok)
          return response.json().then(e => Promise.reject(e))
        return response.json()
      })

    .then( ()=> {
        this.context.deleteNote(noteId)
     }
    )
    .catch(error =>{
        alert({error})
    })
}


  render () {
    return (
        <div className = "allNotes">
            <h3 className="Note_title">
                <Link to={`/note/${props.id}`}>
                    {this.context.name}
                </Link>
            </h3>
            <button className="Note_delete" type="button"
            onClick = {this.handleClick}>
                {' '}
                Remove
            </button>
            <div className="Note_dates">
                <div className="Note_dates-modified">
                    Modified
                    {' '}
                    <span className="Date">
                        {this.context.modified}
                        {/* {format(this.context.modified, 'Do MMM YYYY')} */}
                    </span>
                </div>
            </div>
        </div>
    )
  }
}
