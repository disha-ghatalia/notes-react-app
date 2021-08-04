import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import AddNotes from "./components/AddNotes";
import ListNotes from "./components/ListNotes";
import SearchNote from "./components/searchNote";


function App() {
  const [notes, setNotes] = useState([]
  );
  const [activeNote, setActiveNote] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      content: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const handleSearch = (searchWord) => {
    const search = searchWord;
  setNotes(notes.filter((note)=> {
    note.content.toLowerCase().includes(search.toLowerCase())
  }))
  
   };
 

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };


  return (
    <div className="App">
       <h1>NotesApp</h1>

       <AddNotes activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />


       
      <ListNotes
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        handleSearch={handleSearch}
       
      />
     
    </div>
  );
}

export default App;