
const SideBar = ({
  notes, 
  addNote, 
  deleteNote, 
  activeNote, 
  setActiveNote,
 }) => {

  const sortedNotes = notes.sort((a,b) => b.date - a.date)

  return (

    <div className="sidebar">
      <div className="sidebar-header">
        <a href="/" className="logo">Notes</a>
        <button className="add-btn" onClick={addNote}>Add</button>
      </div>

      <div className="note-list">
        {sortedNotes.map((note) => {
          return (
            <div className={`note ${note.id === activeNote ? 'active' : ''}`} 
            id={ note.id } key={ note.id }
            onClick={() => setActiveNote(note.id)}
            >
              <div className="note-data">
                <h4 className="note-title">{ note.title }</h4>
                <small className="note-date">
                  Last Modified{' '}
                  {new Date(note.date).toLocaleString({
                    hour: '2-digit',
                    minute: '2 digit'
                  })}
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