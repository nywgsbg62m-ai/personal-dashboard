import { useState } from 'react'
import './QuickNotes.css'

function QuickNotes() {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState('')

  const saveNote = () => {
    if (input.trim()) {
      setNotes([{ id: Date.now(), text: input }, ...notes])
      setInput('')
    }
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveNote()
    }
  }

  return (
    <div className="quick-notes">
      <h2>Quick Notes</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-save" onClick={saveNote}>
          Save Note
        </button>
      </div>
      <div className="notes-list">
        {notes.map(note => (
          <div key={note.id} className="note-item">
            <p>{note.text}</p>
            <button 
              className="btn-delete" 
              onClick={() => deleteNote(note.id)}
            >
              ✕
            </button>
          </div>
        ))}
        {notes.length === 0 && <p className="empty-message">No notes yet. Add one!</p>}
      </div>
    </div>
  )
}

export default QuickNotes
