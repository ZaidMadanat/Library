const myLibrary = [];

function Book(title, author, pages, isRead) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.read = function() { 
        if (this.isRead == false) { 
            return "not read";
        }
        else { 
            return "read";
        }
    }

    this.info = function() { 
        return this.title + " by " +  this.author + ", " + this.pages + " pages, " + this.read();
    }
}

function addBookToLibrary() { 
    
}