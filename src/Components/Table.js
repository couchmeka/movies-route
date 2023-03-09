import React, { Component } from 'react'
import {  useOutletContext } from "react-router-dom";





const TableHeader = () => {

    return (
      <thead>
        <tr>
          <th>Title</th>
            <th>Actors</th>
            <th>Plot</th>
            <th>imdbRating</th>
            <th>Director</th>
            <th>Year</th>
            <th>DateAdded</th>
            <th> Delete </th>
        </tr>
      </thead>
    );
  }


//table body simple component
const TableBody = () => {

const {movies} = useOutletContext()
const {removeMovie} = useOutletContext()
    
    //iterate over the character data and create a row for each entry of the data.
    //construct rows and use map to iterate over each row and wrapt it in an html table row
    //registered an onclick listener to remove a character

  
console.log(movies)
    const rows = movies.map((row, index) => {

     
    return (      
    <tr key ={index}>
    <td>{row.title}</td>
    <td>{row.actors}</td>
    <td>{row.plot}</td>
    <td>{row.imdbRating}</td>
    <td>{row.director}</td>
    <td>{row.year}</td>
    <td>{row.dateAdded}</td>
    <td><button onClick={() => removeMovie(index)}>Delete</button></td>
    
   
    
    
    </tr>
            )      

    })
    
    return <tbody>
      {rows}
    </tbody>

}

class Table extends Component {
    render() {
  
      //read props passed in from App.js
  
      return (
        <table>
     <TableHeader/>
     <TableBody/>
    
        </table>
      )
    }
  }

export default Table


