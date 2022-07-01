
const Main = ({ activeNote, updateNote}) => {

  const editNote = (field, value) => {
    updateNote({
      ...activeNote,
      [field]: value,
      date: Date.now()
    })
  }

  if (!activeNote)  return <div className="no-notes"><h2>Add/Select Note</h2></div>

  return (

    <div className="main">
      <div className="edit">
        <input
          type="text"
          className="input"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => editNote('title', e.target.value)}
          autoFocus
          />
        <textarea 
          id="body"
          className="input textarea"
          placeholder="Write your Note here ..."
          value={activeNote.body}
          onChange={(e) => editNote('body', e.target.value)}
        >
        </textarea>
      </div>
      <div className="note-preview">
        <h2 className="preview-title">{activeNote.title}</h2>
        <p>{activeNote.body}</p>
      </div>
    </div>
  )
}

export default Main