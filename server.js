const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"test"
})

app.get('/', (req, res)=>{
    const sql = "SELECT * FROM tab1";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO `tab1`(`NOM`, `AGE`, `NUMERO`) VALUES (?, ?, ?)';
    const val = [req.body.nom, req.body.age, req.body.numero];
  
    db.query(sql, val, (err, data) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json(err);
      }
  
      return res.json("created");
    });
  });

  app.delete('/delete/:id', (req, res)=>{
    const sql = 'DELETE FROM `tab1` WHERE id=?';

const val = [req.params.id];

db.query( sql, val, (err, data)=>{

    if(err){
        console.log(err); 
        return res.status(500).json(err);
    }
    return res.json("deleted");

} );

  } )


app.listen(4000, ()=>{
    console.log(" ECOUTE port 4000");
} )

 