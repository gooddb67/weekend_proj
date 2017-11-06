import React from 'react'

class BookData extends React.Component {

  state = {
    pageCount: []
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.books.length === 0){
      this.setState({pageCount: 0})
    }else {
      this.setState({pageCount: nextProps })
      this.totalBooks(nextProps)
    }
  }

   totalBooks(props){
     let total = props.books.reduce(function(sum, book) {
      return sum += book.numberOfPages
    }, 0)
    this.setState({pageCount: total})
  }



  render(){
    return(
      <div>{this.state.pageCount}</div>

    );
  }
}

export default BookData
