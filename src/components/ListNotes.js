const ListNotes = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote, 
  
}) => {
 
 
  return (
    <div className="mainlist">
      <div>
       

        <div className="search-notes">
        <input id="search-bar" placeholder="search..."  />
      </div>


        <button onClick={onAddNote}>Add</button>
      </div>

    
      <div className="all-notes">

      

        {notes.map(({ id, content, lastModified }, i) => (
          <div  className={`single-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="note-delete">
           
              <button onClick={(e) => onDeleteNote(id)} className="delete-note">Delete</button>
            </div>

            <p>{content.length < 1 ? "Write your note here..." : content}</p>
            <small className="note-date">
              Last Modified{": "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNotes;