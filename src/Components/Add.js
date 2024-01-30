import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);
  const [numero, setNumero] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:4000/add", { nom, age, numero }).then( res=> navigate("/") );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "500px", alignItems: "center", justifyContent: "center" }}>
      <form style={{ display: "flex", flexDirection: "column",  borderStyle:"double", borderRadius:"10px" , textAlign:"center" }} onSubmit={handleSubmit}>
        <label style={{ margin: '20px', display: "flex", flexDirection: "column" }}>
          NOM
          <input
            type='text'
            value={nom}
            onChange={(e) => { setNom(e.target.value) }}
          />
        </label>
        <label style={{ margin: '20px' , display: "flex", flexDirection: "column" }}>
          NUMERO
          <input
            type='number'
            value={numero}
            onChange={(e) => { setNumero(e.target.value) }}
          />
        </label>
        <label style={{ margin: '20px', display: "flex", flexDirection: "column"  }}>
          AGE
          <input
            type='number'
            value={age}
            onChange={(e) => { setAge(e.target.value) }}
          />
        </label>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}
