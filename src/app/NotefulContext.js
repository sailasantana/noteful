import React from 'react';
import {getNotesForFolder, findNote, findFolder,getNotesForFolder} from '../helper'



export default React.createContext({
  folders : [],
  notes : [],
  note : findNote(notes, noteId) || {},
  folder : findFolder(folders, note.folderId),
  history: {
    goBack: () => {}},
  notesForFolder = getNotesForFolder(notes,folderID),
  deleteNote: () => {}
});