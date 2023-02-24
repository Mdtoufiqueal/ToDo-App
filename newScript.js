let noteList = [];

let view = "grid"; //default view is grid-view

function saveNote(event) {
  event.preventDefault();
  const title = document.getElementById("titleId").value;
  const description = document.getElementById("descriptionId").value;
  const color = document.getElementById("exampleColorInput").value;
  const randomNumber = Math.floor(Math.random() * 10) + 1;  //Math.floor() function is used to round
  const note = {
    id: randomNumber,
    title,
    description,
    color,
  };
  noteList.push(note);
   updateNoteData(note);
   alert("The Note You Have Added Is Saved Inside Me");
   clearFields();
}

function deleteNote() {
  const noteId = this.dataset.id; // dataset Property and id is the attribute 
  const noteIndex = noteList.findIndex((note) => note.id == noteId);
  if (noteIndex >= 0) {
    noteList.splice(noteIndex, 1);
    alert("Note With The " + noteId +" Is Deleted Successfully ");
    updateNoteData();
  }
}

function clearFields() {
  document.getElementById("titleId").value = "";
  document.getElementById("descriptionId").value = "";
  document.getElementById("exampleColorInput").value = "#563d7c";
}

function fetchNotes() {
  const notes = localStorage.getItem("noteList");
  if (notes) {
    noteList = JSON.parse(notes); // parse is used to convert the string to the json
    updateNoteData();
  }
}

function loadNoteData() {
  const noteContainer = document.getElementById("note-container");
  noteContainer.innerHTML = "";
  for (const note of noteList) {
    const noteCard = createNoteCard(note);
    noteContainer.appendChild(noteCard);
  }
}

function updateNoteData(note) {
 /* This line calls the loadNoteData() function which is responsible for loading the note data from localStorage and
    rendering it on the screen. So after saving the updated noteList to localStorage, this function is called to
    refresh the screen with the latest data. */
  localStorage.setItem("noteList", JSON.stringify(noteList));
  /* The localStorage object allows you to save key/value pairs in the browser. */
  loadNoteData();
}

function createNoteCard(note) {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");
  noteCard.style.backgroundColor = note.color;
  noteCard.style.marginRight = "50px";
  noteCard.style.width = "300px";
  noteCard.style.height = "200px";
  noteCard.style.textAlign = "center";
  noteCard.style.borderRadius = "11%";
  noteCard.style.fontFamily = "Impact,Charcoal,sans-serif";
  noteCard.style.color="#FFFFFF";
  noteCard.style.marginBottom = "20px";
  const noteHeader = document.createElement("div");
  noteHeader.classList.add("note-header");

  // createing the tittle of the card
  const noteTitle = document.createElement("h1");
  noteTitle.classList.add("note-title");
  noteTitle.style.paddingTop = "45px";
  noteTitle.innerText = note.title;
  noteHeader.appendChild(noteTitle);
  noteCard.appendChild(noteHeader);

  // creating the body of the card
  const noteBody = document.createElement("div");
  noteBody.classList.add("note-body");

  // creating the description of the card
  const noteDesc = document.createElement("p");
  noteDesc.classList.add("note-desc");
  noteDesc.innerText = note.description;
  noteBody.appendChild(noteDesc);
  noteCard.appendChild(noteBody);
    // creating the delete button of the card
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-outline-danger", "note-delete");
  deleteBtn.dataset.id = note.id;
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteNote);
  noteCard.appendChild(deleteBtn);
  return noteCard;
}
function toggleView() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// function toggleView() {
//   const noteContainer = document.getElementById("note-container");
//   if (view === "grid") {
//     noteContainer.classList.remove("note-container-grid");
//     noteContainer.classList.add("note-container-list");
//     view = "list";
//   } else {
//     noteContainer.classList.remove("note-container-list");
//     noteContainer.classList.add("note-container-grid");
//     view = "grid";
//   }
// }

// window.addEventListener("load", () => {
//   fetchNotes();
// });
function showNotes(){
    const showNotesBtn = document.getElementById("note-container");
    showNotesBtn.style.display = "flex";
  }
  
  function hideNotes(){
    const showNotesBtn = document.getElementById("note-container");
    showNotesBtn.style.display = "none";

  }

  function addNotesDisplay(){
    const addNotesBtn = document.getElementById( "note-container");
    addNotesBtn.style.display = "none";
  }  
