const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors=require('cors');
var jquery = require('jquery');
var nodemailer = require('nodemailer');
var path=require('path');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist/ridmed/'));
app.get('*/',(req,res)=>res.sendfile(path.join(__dirname)));
//app.set("views", "/locals/views");

var db;

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) return console.log(err);
    db = client.db('test'); // db name
    app.listen(3000, () => {
        console.log('listening on 3000');
        app.get('/sign_up', (req, res) => {
            db.collection('newtest').find().toArray()
            .then(results => {
                res.render(__dirname + '\\locals\\signup.ejs', { quotes: results });
            })
            .catch(/* ... */);

   
});  

app.get('/', (req, res) => {
    db.collection('newtest').find().toArray()
            .then(results => {
                res.render(__dirname + '\\locals\\index.ejs', { quotes: results });
            })
            .catch(/* ... */);
    });
    app.get('/', (req, res) => {
        db.collection('newtest').find().toArray()
                .then(results => {
                    res.render(__dirname + '\\locals\\index.html', { quotes: results });
                })
                .catch(/* ... */);
        });

});
        
});
    
              
   

     

   