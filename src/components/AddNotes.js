const AddNotes = ({ activeNote, onUpdateNote }) => {

  
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">Click on the Add button to add a new note</div>;

  return (
    <div className="add-note">
      <div className="edit-note">
      
        <textarea
          id="content"
          placeholder="Write your note here..."
          value={activeNote.content}
          onChange={(e) => onEditField("content", e.target.value)}
        />
      </div>
   
    </div>
  );
};

export default AddNotes;