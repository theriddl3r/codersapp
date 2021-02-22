import React ,{Fragment,useState, useEffect}from 'react';
import BasicService from "../services/BasicService";  //import my end points
import Table from "../components/Table";  //my table

export const Register = () => {
    //state to handle information 
    //const to save new data
    const [register, setRegister] = useState({
        lastname: '',
        firstname: '',
        email:'',
    
      });

      //array to save response from database
      const [find, setFind]=useState(
        [{
          lastname: '',
          firstname: '',
          email:'',
        }]
      );
//const to save parameters
      const [parameters,setParameters] = useState({
       lastnamefind:'',
       ascendingselected:true
      })
      //load the information
      useEffect(() => {   
  get('',true);
  },[]);

  //handle data insert
      const handleChange=e=>{
        const {name, value}=e.target;
        setRegister((prevState)=>({
          ...prevState,
          [name]: value
        }  
        )
        );
      }
      //handle find parameter
      const handleFind=e=>{
        const {name, value}=e.target;
        setParameters((prevState)=>({
          ...prevState,
          [name]: value
        }  
        )
 
        );
   
      }
      //insert new file
      const insert =()=>{
        BasicService.create(register)
        .then(response => {
          get('',true);
          alert("The process was:  "+response.data);
       
        })
        .catch(e => {
            alert("There was a error: "+e );
        });

     
      }

      //get data from database

      const  get = () => {
        const  {lastnamefind, ascendingselected}  = parameters;
         BasicService.get(lastnamefind,ascendingselected)
        .then(response => {
            setFind(response.data);
         
        })
      }
    
    return ( 
        <Fragment  >
     <div >
     <h2>Find Data</h2>
    <label >Find by lastname:  </label>
        <input
          type="text"
          className="form-control"
          onChange={handleFind}
          name="lastnamefind"
        />
          <br/> 
        <div>
        <select name="ascendingselected"  onChange={handleFind}>
  <option value="true">Ascending</option>
  <option value="false">Descending</option>
</select>
</div>
<br/> 
           <button onClick={get}  className="btn btn-success">
              Find
            </button>
     </div>  
     <br/> 
        <Table tabledata={find} />
        <div >
          <h2>New register</h2>
        <label >Last Name </label>
        <input
          type="text"
          className="form-control"
          name="lastname"
          onChange={handleChange}
        />
             </div>
           <div >
    <label >First Name </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="firstname"
        />
     </div>    

     <div >
    <label >Email  </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="email"
        />
     </div>   
     <div>
     <button onClick={insert}  className="btn btn-success">
              Submit
            </button>
            </div>
     </Fragment>

     );
}
 
export default Register;