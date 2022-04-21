import axios from "../custom-axios/axios";

const eLibraryService = {
    fetchBooks: () => {
        return axios.get('/books');
    },
    fetchAuthors: () => {
        return axios.get('/authors');
    },
    fetchCountries: () => {
        return axios.get('/countries');
    },
    fetchCategories: () => {
        return axios.get('books/categories');
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, author, category, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "author": author,
            "category": category,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, author, category, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "author": author,
            "category": category,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    }
}

export default eLibraryService;