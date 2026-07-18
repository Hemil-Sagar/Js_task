const noteInput = document.querySelector("#noteInput") 
const saveBtn = document.querySelector("#saveBtn") 
const notesContainer = document.querySelector("#notes") 

let editingId = null 

let notes = JSON.parse(localStorage.getItem("notes")) || [] 

const saveLocalStorage = () => {

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    ) 

} 

const formatDate = () => {

    return new Date().toLocaleString() 

} 

const renderNotes = () => {

    notesContainer.innerHTML = "" 

    if (notes.length === 0) {

        notesContainer.innerHTML = "<h3>No Notes Found</h3>" 
        return 

    }

    notes.forEach((note) => {

        const card = document.createElement("div") 

        card.className = "note" 

        card.innerHTML = `

            <p>${note.text}</p>

            <small>
                ${note.date}
            </small>

            <div class="actions">

                <button
                    class="edit"
                    data-id="${note.id}">
                    Edit
                </button>

                <button
                    class="delete"
                    data-id="${note.id}">
                    Delete
                </button>

            </div>

        ` 

        notesContainer.appendChild(card) 

    }) 

} 

const addNote = () => {

    const text = noteInput.value.trim() 

    if (!text) {

        alert("Enter a note.") 
        return 

    }

    if (editingId) {

        notes = notes.map((note) => {

            if (note.id === editingId) {

                return {
                    ...note,
                    text,
                    date: formatDate()
                } 

            }

            return note 

        }) 

        editingId = null 

        saveBtn.textContent = "Save Note" 

    }

    else {

        notes.unshift({

            id: crypto.randomUUID(),

            text,

            date: formatDate()

        }) 

    }

    saveLocalStorage() 

    renderNotes() 

    noteInput.value = "" 

} 

const deleteNote = (id) => {

    notes = notes.filter((note) => {

        return note.id !== id 

    }) 

    saveLocalStorage() 

    renderNotes() 

} 

const editNote = (id) => {

    const note = notes.find((note) => {

        return note.id === id 

    }) 

    noteInput.value = note.text 

    editingId = id 

    saveBtn.textContent = "Update Note" 

} 

saveBtn.addEventListener("click", addNote) 

notesContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {

        deleteNote(event.target.dataset.id) 

    }

    if (event.target.classList.contains("edit")) {

        editNote(event.target.dataset.id) 

    }

}) 

renderNotes()