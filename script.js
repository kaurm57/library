const myLibrary = []

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${hasRead ? 'read!' : 'not read yet!'}`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, true);

console.log(theHobbit.info());