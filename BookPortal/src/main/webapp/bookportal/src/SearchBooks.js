import React from 'react'
import * as BooksAPI from './BooksAPI'
class SearchBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ inputValue: "", books: [] })
        this.handleChange = this.handleChange.bind(this)
        this.showBook = this.showBook.bind(this)
    }
    handleChange(event) {
        var value = event.target.value
        var name = event.target.name
        this.setState({ [name]: value });
    }

    showBook(event) {
        BooksAPI.search(this.state.inputValue, 100).then((books) => {
            if (!books || books.hasOwnProperty('error')) {
                this.setState({ books: [] });
            } else {
                this.setState({ books: books });
            }
            console.log(books)
        });

        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="inputValue" onChange={this.handleChange} value={this.state.inputValue} placeholder="Which book do you want?" />
                        <input type="button" value="submit" onClick={this.showBook} />
                    </div>
                </form>
                <div>{this.state.books.map(function (book, i) {
                    return (
                        <div>
                            <img src={book.imageLinks.smallThumbnail} key={i} height="42" width="42" />

                        </div>
                    )
                })}</div>


            </div>
        )
    }
}
export default SearchBooks;