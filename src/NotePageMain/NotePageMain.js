import React from 'react';
import Note from '../Note/Note'
import NotefulContext from '../app/NotefulContext'
//import './NotePageMain.css'

class NotePageMain extends React.Component {
  
static contextType = NotefulContext;


   render(){
     return (
        <section className="NotePageMain">
            <Note 
                id={this.context.note.id}
                name={this.context.note.name}
                modified={this.context.note.modified}
            />
            <div className="NotePageMain_content">
                {this.context.note.content.split(/\n \r|\n/).map((para, foo) =>
                    <p key={foo}>{para}</p>
                )}
            </div>
        </section>
    )
   } 

}

NotePageMain.defaultProps = {
    note: {
        content: '',
    }
}