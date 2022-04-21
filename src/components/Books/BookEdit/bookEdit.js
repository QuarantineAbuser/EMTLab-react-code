import React from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        author: 0,
        category: "NOVEL",
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.selectedBook.name;
        const author = formData.author !== 0 ? formData.author : props.selectedBook.author.id;
        const category = formData.category !== "NOVEL" ? formData.category : props.selectedBook.category;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.selectedBook.availableCopies;

        props.onEditBook(props.selectedBook.id, name, author, category, availableCopies);
        navigate("/books");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.selectedBook.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) => {
                                if(props.selectedBook.author !== undefined &&
                                    props.selectedBook.author.id === author.id)
                                    return <option selected={props.selectedBook.author.id} value={author.id}>{author.name}</option>
                                else
                                    return <option value={author.id}>{author.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category) => {
                                if(props.selectedBook.category !== undefined &&
                                    props.selectedBook.category === category)
                                    return <option selected={props.selectedBook.category} value={category}>{category}</option>
                                else
                                    return <option value={category}>{category}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.selectedBook.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;