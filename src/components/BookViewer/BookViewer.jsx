import React from 'react';
import Book from '../Book/Book';


const BookViewer = (props) => {
    return (<div className="row row-space">
        <div className="col-md-4"> 
        {/* button here to move to the previous book viewed */}
        <button onClick={props.previousBook}>Previous Book</button>
        </div>
       
        <div className="col-md-4">
         {/* display book with cover here */}
        <Book book={props.book} />
        
         </div>
           
        <div className="col-md-4">
         {/* button here to move to the next book to be viewed */}
         <button onClick={props.nextBook}>Next Book</button>
        </div>
    </div>  
    );
}
 
export default BookViewer;