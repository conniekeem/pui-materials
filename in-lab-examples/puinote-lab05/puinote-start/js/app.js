class Notecard{
    constructor(imageURL, title, body) {
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;

        this.element = null;
    }
}

//new set of adding the notecards into this
const notecardSet = new Set();

//function to adding a new note card
function addNewNote(imageURL, title, body) {
    const notecard = new Notecard(imageURL, title, body);
    notecardSet.add(notecard);
    return notecard;
}

//have to create NEW html element for the NEW notecard by creating a template
function createElement(notecard){
    //find the html element that can be the new template for this new notecards
    const template = document.querySelector('#notecard-template');
    const clone = template.content.cloneNode(true);

    notecard.element = clone.querySelector('.notecard');
    
    const btnDelete = notecard.element.querySelector('.icon-delete');
    btnDelete.addEventListener('click', () => {
        deleteNote(notecard);
    })

    const notecardListElement = document.querySelector('#notecard-list');
    notecardListElement.prepend(notecard.element);

    updateElement(notecard);
}

function updateElement(notecard) {
    //updating each element of the notecards
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
}

function deleteNote(notecard){
    // have to remove the notecard element AND the set
    notecard.element.remove();
    notecardSet.delete(notecard);
}

//implement two instances in creating new notecards
const notecardOne = addNewNote(
    "./assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
);
const notecardTwo = addNewNote(
    "./assets/warhol-frog.png",
    "The second note title",
    "The second note body"
);

//need to iterate all the objects in the set
for (const notecard of notecardSet) {
    createElement(notecard);
}