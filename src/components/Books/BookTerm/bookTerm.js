import React from "react";
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.book.name}</td>
            <td>{props.book.author.name}</td>
            <td>{props.book.category}</td>
            <td>{props.book.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.book.id)}>
                    Delete
                </a>
                <a title={"Edit"} className="btn btn-sm btn-primary ml-2"
                   href={`books/edit/${props.book.id}`}
                   onClick={() => props.onEdit(props.book.id)}>Edit</a>
                <a title={"Mark as taken"} className="btn btn-sm btn-primary ml-2"
                   href={`/books`}
                   onClick={() => props.book.setAvailableCopies(props.book.availableCopies - 1)}>Mark as taken</a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.book.id)}
                      to={`/products/edit/${props.book.id}`}>
                    Edit
                </Link>
                {/*<a title={"Taken"} className={"btn btn-danger"}*/}
                {/*   onClick={() => props.onTaken(props.book.id)}>*/}
                {/*    Mark as Taken*/}
                {/*</a>*/}
            </td>
        </tr>
    )
}

export default bookTerm;