import React,{Fragment,useState} from 'react';

export const Table = ({tabledata}) => {

// this table contents the data response from database
 
    return ( 
        
        <Fragment>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>LastName</th>
            <th>FirstName</th>
            <th>Email</th>
        
          </tr>
        </thead>

        <tbody>
     
        {tabledata.map((elemento, i)=>(
            <tr  key ={i}>
          
              <td   >{elemento.lastName}</td>
              <td >{elemento.firstName}</td>
             <td >{elemento.email}</td>

         
            </tr>
          ))
          }
        </tbody>

      </table>
      </Fragment>
     );
}
 
export default Table;