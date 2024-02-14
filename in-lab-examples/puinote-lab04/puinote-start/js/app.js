class Notecard{
    noteTitle;
    noteBody;
    noteImageURL;

    constructor(imageURL, title, body, elementID){
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
        this.element = document.querySelector(elementID);

        const btnDelete = this.element.querySelector('.icon-delete');

        btnDelete.onclick = this.removeNote.bind(this);
        
        //this way we reduce the way we dup the objects
        this.updateElement();
    }

    updateElement(){
        const noteImageElement = this.element.querySelector('.notecard-thumbnail');
        //can update title and body the same way
        noteImageElement.src = this.noteImageURL;
    }

    removeNote() {
        this.element.remove();

    }
}

//making a new object we just type "new" and the class name of the object
//if we call the new object name into it output the name 
const notecardOne = new Notecard('assets/warhol-frog.png', "Frog", 
    "something about frog", "#notecard-two");