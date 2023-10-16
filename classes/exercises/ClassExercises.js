// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
     this.Title = title;
     this.Author = author;
     this.copyright = copyright;
     this.isbn = isbn;
     this.Pages = pages;
     this.timesCheckedOut = timesCheckedOut;
     this.Discarded = discarded;
    }
    checkout(uses=1){
     return this.timesCheckedOut += uses;
    }
 
 }
 
 // Define your Manual and Novel classes here;
 class Manual extends Book{
     constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded){
         super(title,author,copyright,isbn,pages,timesCheckedOut,discarded);
     }
     dispose(currentYear){
         if(currentYear - this.copyright > 5){
            return this.discarded = "Yes";
         }
     }
 }
 
 class Novel extends Book{
     constructor (title, author, copyrigh, isbn, pages, timesCheckedOut, discarded){
         super(title,author,copyrigh,isbn,pages,timesCheckedOut,discarded);
     }
     dispose(){
         if(this.timesCheckedOut > 100){
             return this.discarded = "Yes"
         }
     }
 }
 // Declare the objects for exercises 2 and 3 here:
 
 let prideAndPrejudice = new Novel("pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
 let tSSBM = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0, 1147, 1, "No");
 
 // Code exercises 4 & 5 here:
 
 console.log(tSSBM.dispose(2023));
 
 console.log(prideAndPrejudice.checkout(5));