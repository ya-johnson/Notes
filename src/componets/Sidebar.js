
const SideBar = ({
  notes, 
  addNote, 
  deleteNote, 
  activeNote, 
  setActiveNote,
 }) => {

  const sortedNotes = notes.sort((a,b) => b.date - a.date)

  const selectNote = (e) => {
    const note = e.target.closest('.note')

    if (!e.target.classList.contains('remove-btn')) {
      setActiveNote(note.id)
    }
  }

  return (

    <div className="sidebar">
      <div className="sidebar-header">
        <a href="/" className="logo">Notes</a>
        <button className="add-btn" onClick={addNote}>Add</button>
      </div>

      <div className="note-list">
        {sortedNotes.map((note) => {
          return (
            <div
             key={note.id}
             className={`note ${note.id === activeNote && 'active'}`} 
             id={note.id}
             onClick={selectNote}
            >
              <div className="note-data">
                <h4 className="note-title">{ note.title }</h4>
                <small className="note-date">
                  Updated:{' '}
                  {new Date(note.date).toLocaleString()}
                </small>
              </div>
              <button className="remove-btn" onClick={() => deleteNote(note.id)}>Remove</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default SideBar