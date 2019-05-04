import axios from "axios";

export default { 
    getSavedBooks(){
        return axios.get("/api/books");
    } ,
    getBookById(bookId){
        return axios.get("/api/books/" + bookId);
    } ,
    saveBook(bookId){
        return axios.post("/api/books/" + bookId);
    } , 
    deleteBook(bookId){
        return axios.delete("api/books/" + bookId);
    } , 
    searchGoogleBooks(bookQuery){
        return axios.get("https://www.googleapis.com/books/v1/volumes", { params: {q: bookQuery }})
    }
}