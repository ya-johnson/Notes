import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import SideBar from './componets/Sidebar'
import Main from './componets/main'

const App = () => {

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  )
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: 'Write your Note here ...',
      date: Date.now()
    }

    setNotes([newNote, ...notes])
    setActiveNote(newNote.id)
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  const updateNote = (updated) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updated.id) {
        return updated
      }

      return note
    })
    setNotes(updatedNotesArr)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <div className="App">
      <div className="container">
        <SideBar
         notes={notes} 
         addNote={addNote}
         deleteNote={deleteNote}
         activeNote={activeNote}
         setActiveNote={setActiveNote}
         />
        <Main
         activeNote={getActiveNote()}
         updateNote={updateNote}
        />
      </div>
    </div>
  )
}

export default App