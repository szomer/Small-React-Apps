import Header from '../Header/Header';
import { deafultNotes } from './notes';
import Notes from '../Notes/Notes';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

function App() {
  // Store notes and function for accessing notes
  var [notes, setNotes] = useState(deafultNotes);

  // Add note
  function addNote(e, newNote) {
    // Prevent default after button clicked
    e.preventDefault();

    // Set the ID
    newNote.id = notes.length - 1;

    // Add the new note to the list
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  // Delete note of given id
  function deleteNote(e, deleteNoteId) {
    // Prevent default after button clicked
    e.preventDefault();

    // Delete the note that equals the given note id
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== deleteNoteId;
      });
    });
  }

  return (
    <div className='App'>
      <Header />
      <TextInput onSubmitNote={addNote} />
      <Notes notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
