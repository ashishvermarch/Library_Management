//Constructor
class Book {
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;
    }
}

class Display{
    add(book){
        // console.log("Adding to UI");
        let tableBody = document.getElementById("tableBody");
        let uiString = `
                        <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>
        `;
        tableBody.innerHTML += uiString; 
    }
    
         clear(){
        let libraryForm=document.getElementById("libraryForm");
        libraryForm.reset();
    }
    
        validate(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }else{
            return true;
        }
    }
         show(type,showMessage){
        let message = document.getElementById('message');
        message.innerHTML = `
        <div class="alert alert-${type} d-flex align-items-center" role="alert">
        <div>
        <strong>Message: </strong>
          ${showMessage}
        </div>
      </div>
        `    
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    }
}
  

//Add submit event listner to libraray form
let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){ 
    e.preventDefault(); 
    // console.log("You have submitted library form");
    let type;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    
    let fiction = document.getElementById("fiction");
    let programing = document.getElementById("CS");
    let biopic = document.getElementById("biopic");

    if(fiction.checked){
        type = fiction.value;
    }else if(programing.checked){
        type = programing.value;
    }else if(biopic.checked){
        type = biopic.value;
    }
    let book = new Book(name, author, type);
    // console.log(book);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been Successfully Added!');
    }else{
        display.show('warning', 'Sorry Cant add this book');
    }
}

//TO DO's :-
// 1. store all the data to the local Storage;
// 2. give another column as an option to delete the book;
// 3.add a scroll bar to the visualViewport;