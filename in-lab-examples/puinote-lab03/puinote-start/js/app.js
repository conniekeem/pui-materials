console.log("start implementation");

function updateElement() {
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    // we want dynamically change it so we would do the object 
    // property of the notecard by doing notecard.element
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');
    
    noteImageElement.src=  notecard.noteImageURL;
    noteTitleElement.innerText= notecard.noteTitle;
    noteBodyElement.innerText= notecard.noteBody;

    // console.log(noteImageElement);
}

function submitNote(){
    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');

    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;

    // console.log(editorTitleElement);
    updateElement();
}

// updateElement();

let notecard = {
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-frog.png',
};

notecard.element = document.querySelector('#notecard-one');


const btnSubmit = document.querySelector('#btn-submit');
//when this event is triggered it is equal and does the function 

console.log(btnSubmit);
btnSubmit.onclick = submitNote;
