import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books =[
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the Light We Cannot See", author: "Anthony Doerr"},
            {title: "Jurassic Park", author: "Michael Critchton"},
        ];
        this.state = {
            bookNumber: 1
        };
    }

    render(){
        return (
            <div className = "container-fluid">
                <TitleBar />
                <div className="row">
                <div className="col-md-4"> 
                    {/* button here to move to the previous book viewed */}
                    </div>
                   
                <div className="col-md-4">
                     {/* display book with cover here */}
                     <h1>{this.books[this.state.bookNumber].title}</h1>
                     <h4>{this.books[this.state.bookNumber].author}</h4>
                    
                     </div>
                       
                <div className="col-md-4">
                     {/* button here to move to the next book to be viewed */}
                     </div>
                </div>
            </div>
        )
    }    
}

export default App;