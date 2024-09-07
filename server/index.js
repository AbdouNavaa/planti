const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.listen(3002, ()=>{
    console.log('Server runing on port 3003');
    
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Azerty2022',
    database: 'plantdb',
})

app.post('/register',(req,res) =>{
    // We need to get variables sent from the form
    const sentEmail = req.body.Email
    const sentUsername = req.body.Username
    const sentPassword = req.body.Password

    // lets create SQL statement to insert to the db table Users
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'

    // We are going to enter thes values through a variable
    const Values = [sentEmail, sentUsername, sentPassword]

    // Query to excute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if (err) {
            console.log(err)

            res.send(err)
        }
        else{
            console.log('User inserted!')
            res.send({message:'User added'})
            
        }
    })

})

app.post('/login',(req,res) =>{
    // We need to get variables sent from the form
    const sentLoginUsername = req.body.LoginUsername
    const sentLoginPassword = req.body.LoginPassword

    // lets create SQL statement to insert to the db table Users
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'

    // We are going to enter thes values through a variable
    const Values = [sentLoginUsername, sentLoginPassword]

    // Query to excute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if (err) {
            res.send({error: err})
        }  
        if (results.length > 0) {
            res.send(results)
        } else {
            res.send({message: `Credentials Dont't match!`})
        }
    })

})