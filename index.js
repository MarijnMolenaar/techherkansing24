// Vereiste modules importeren
const express = require('express');
const app = express(); // Express app creëren
const pug = require('pug');
app.use(express.static('public'));
module.exports = { connect };
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/autos';
const client = new MongoClient(url);

const { ObjectId } = require('mongodb');


app.use(bodyParser.urlencoded({ extended: true }));

const autoLijst = [{
    "_id": 1,
    "name": "Audi S3",
    "bouwjaar": "2005",
    "kilometerstand": "60000",
    "vraagprijs": "$6000",
    "bod": "$5000"
  },
  {
    "_id": 2,
    "name": "BMW X5",
    "bouwjaar": "2019",
    "kilometerstand": "14000",
    "vraagprijs": "$80000",
    "bod": "$79000"
  },
  {
    "_id": 3,
    "name": "Volvo D2",
    "bouwjaar": "2016",
    "kilometerstand": "80000",
    "vraagprijs": "$7000",
    "bod": "$5000"
  },
  {
    "_id": 4,
    "name": "VW Golf R32",
    "bouwjaar": "2020",
    "kilometerstand": "3000",
    "vraagprijs": "$70000",
    "bod": "$6000"
  },
  {
    "_id": 5,
    "name": "Nissan SKyline",
    "bouwjaar": "2005",
    "kilometerstand": "25000",
    "vraagprijs": "$125000",
    "bod": "$150000"
  },
  {
    "_id": 6,
    "name": "Nissan Juke",
    "bouwjaar": "2015",
    "kilometerstand": "100000",
    "vraagprijs": "$5",
    "bod": "$1"
  }];

app.set('view engine', 'pug');



// Vervang 'jouwDatabaseURL' met je daadwerkelijke MongoDB URL


async function connect() {
    try {
        await client.connect();
        console.log("Verbonden met de database!");
        const db = client.db('autos');
        return db.collection('autos');
    } catch (e) {
        console.error(e);
    }
}

//Database updaten
app.post('/autos/update', async (req, res) => {
    try {
        const { _id, vraagprijs } = req.body;
        const collection = await connect();
        await collection.updateOne({ _id: new ObjectId(_id) }, { $set: { vraagprijs: vraagprijs }});
        console.log('record succesvol aangepast');
        res.redirect('/autos');
    } catch (e) {
        console.error(e);
        res.status(500).send("Er is een fout opgetreden");
    }
});


app.get('/autos', async (req, res) => {
    const collection = await connect();
    const autos = await collection.find().toArray();
    res.render('index', { autos });
});


app.get('/', function(req, res) {

      res.render('index.pug', { autos: autoLijst });

    });


app.listen(3000) // De app laten luisteren op poort 3000

console.log("JS verbonden, fijne dag!") // Bericht in de console bij het starten van de app
