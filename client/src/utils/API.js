import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};

/*
//API to get Books
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
*/