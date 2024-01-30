
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

   
    const data=[ { nom:"JOHN", age:10, numero:128 , id:1},
     { nom:"DOE", age:10, numero:123, id:2 },{ nom:"JOHN DOE", age:10, numero:123, id:3 } ];
    const navigate = useNavigate();


     const [mdb, setmdb]=useState([{}]);
useEffect( ()=>{

    axios.get("http://localhost:4000/").then( res => setmdb(res.data) )
    .catch(error=>{
        console.log(error)
    });



}, [])

  return (
    <div style={{ display: "flex", width: "100%", height: "500px", justifyContent: "center", alignItems: "center" }}>
    <table style={{ width: "80%", borderStyle:"double", borderRadius:"10px", 
padding:"20px" }}>
       
        <thead>
            <tr>
                <th>NOM</th>
                <th>AGE</th>
                <th>NUMERO</th>
            </tr>
        </thead>
        <tbody>
            { mdb.map( item => (
<tr key={item.id} >
    <td> {item.nom} </td>
    <td> {item.age} </td>
    <td> {item.numero} </td>
    <td>
  <button onClick={() => { axios.delete(`http://localhost:4000/delete/${item.id}`).then( res =>  window.location.reload() ) }}>DELETE</button>
</td>

   
   

</tr>

            ) ) }

            <Link to="/add" >
            <button  >ADD +</button>
            </Link>
             
        </tbody>
       
    </table>
</div>
  )
}
