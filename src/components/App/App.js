import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import eLibraryService from "../../repository/eLibraryRepository";
import Header from "../Header/header";
import Books from "../Books/BookList/books";
import Authors from "../Authors/authors";
import Countries from "../Countries/countries";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            countries: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={'/countries'} exact
                                   element={<Countries countries={this.state.countries}/>}/>
                            <Route path={'/authors'} exact
                                   element={<Authors authors={this.state.authors}/>}/>
                            <Route path={'/books/edit/:id'} exact
                                   element={<BookEdit authors={this.state.authors}
                                                         categories={this.state.categories}
                                                         onEditBook={this.editBook}
                                                         selectedBook={this.state.selectedBook}/>}/>
                            <Route path={'/books/add'} exact
                                   element={<BookAdd authors={this.state.authors}
                                                        categories={this.state.categories}
                                                        onAddBook={this.addBook}/>}/>
                            <Route path={'/books'} exact
                                   element={<Books books={this.state.books}
                                                   onDelete={this.deleteBook}
                                                   onEdit={this.getBook}/>}/>
                            <Route path={'/'} element={<Navigate replace to='/books'/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        )
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCountries();
        this.loadCategories();
    }

    loadBooks = () => {
        eLibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            })
    }

    loadAuthors = () => {
        eLibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }

    loadCountries = () => {
        eLibraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            })
    }

    loadCategories = () => {
        eLibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    deleteBook = (id) => {
        eLibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }
    addBook = (name, author, category, availableCopies) => {
        eLibraryService.addBook(name, author, category, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }
    editBook = (id, name, author, category, availableCopies) => {
        eLibraryService.editBook(id, name, author, category, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }
    getBook = (id) => {
        eLibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }
}

export default App;
