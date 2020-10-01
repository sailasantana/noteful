import React,{Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NoteListNav from '../NoteListNav/NoteListNav'
import NotePageNav from '../NotePageNav/NotePageNav'
import NoteListMain from '../NoteListMain/NoteListMain'
import NotePageMain from '../NotePageMain/NotePageMain'
import dummyStore from '../dummy-store'
import {getNotesForFolder, findNote, findFolder} from '../helper'
import NotefulContext from './NotefulContext'

import './App.css';
// import Folder from '../Folder';
// import Note from '../Note/Note';


class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    // fake data loading from api call
    setTimeout(() => this.setState(dummyStore), 600);
  }

  renderNavRoutes(){
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component= {NoteListNav}
            //routeProps are auto setn when you use component+context
            
              
            
          />
        ))}
        <Route 
          path="/note/:noteId" component={NotePageNav}
          //how do i move 46+47 this into NotefulContext?
          //render={routeProps => {
            //const {noteId} = routeProps.match.params;
            //const note = findNote(notes, noteId) || {};
            //const folder = findFolder(folders, note.folderId)
            //return <NotePageNav {...routeProps} folder={folder}/>
          //}}
        />
        <Route path="/add-folder" component={NotePageNav}/>
        <Route path="/add-note" component={NotePageNav}/>
      </>
    )
  }

  renderMainRoutes(){
    const {notes} = this.state;
    return (
      <>
      {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={NoteListMain}
            //render={routeProps => {
              //const {folderId} = routeProps.match.params;
              //const notesForFolder = getNotesForFolder(
                //notes,
                //folderId
              //)
              //return(
                //<NoteListMain
                  //{...routeProps}
                  //notes={notesForFolder}
                  />
              ))
            }
          
        )
        <Route 
          path="/note/:noteId"
          component={NotePageMain}
          //render={routeProps => {
            //const {noteId} = routeProps.match.params;
            //const note = findNote(notes, noteId);
            //return <NotePageMain {...routeProps} note={note}/>
          //}}
        />
      </>
    )
  }

  render(){
    const contextValues = {
      folders : this.state.folders,
      notes : this.state.notes
      //changeName : this.changeName
    };
    return (
      <NotefulContext.Provider value={ contextValues } >
        <div className="App">
        <nav className="App_nav">{this.renderNavRoutes()}</nav>
        <header className="App-header">
          <h1>
            <Link to="/">Noteful</Link>{' '}
          </h1>
        </header>
        <main className="App_main">{this.renderMainRoutes()}</main>
      </div>
      </NotefulContext.Provider>
      
    );
  }
}

export default App;
