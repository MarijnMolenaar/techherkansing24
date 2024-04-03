// Vereiste modules importeren
require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Express app en middleware configuratie
const app = express();
app.use(express.static('public')); // Statische bestanden serveren vanuit de 'public' map
app.use(express.urlencoded({ extended: true })); // Voor het verwerken van URL-encoded data
app.use(express.json());

// Pug templating engine instellen
app.set('view engine', 'pug');

// Database configuratie
const client = new MongoClient(process.env.DB_URI);

// Functie om verbinding te maken met de database
async function connect() {
    try {
        await client.connect();
        console.log("Database verbonden");
        const db = client.db(process.env.DB_NAME); // Gebruikt DB_NAME uit .env
        return db.collection(process.env.COLLECTION_NAME);// Gebruikt DB_NAME uit .env
    } catch (e) {
        console.error(e);
    }
}



app.get('/api/autos', async (req, res) => {
  const collection = await connect();
  const autos = await collection.find().toArray();
  res.json(autos);
});


// Route: Toon alle auto's op de indexpagina (bron: ChatGPT4)
app.get('/', async (req, res) => {
    const collection = await connect();
    const autos = await collection.find().toArray(); // Alle auto's ophalen
    res.render('index', { autos }); // Render de indexpagina met de auto's
});

app.get('/showroom', async (req, res) => {
    res.render('showroom'); // Render de showroom pagina
});

app.get('/overons', async (req, res) => {
    res.render('overons'); // Render de showroom pagina
});



// Route: Update de vraagprijs van een auto (bron: ChatGPT4)
app.post('/update-auto', async (req, res) => {
    try {
        const db = client.db(process.env.DB_NAME); // Verzeker ervan dat je de juiste DB naam gebruikt
        const autosCollection = db.collection(process.env.COLLECTION_NAME); // En de collectie naam
        
        const autoId = req.body.id; // ID van de auto
        const nieuwBod = parseInt(req.body.nieuwBod, 10); // Het nieuwe bod, omgezet naar een integer

        const auto = await autosCollection.findOne({ _id: new ObjectId(autoId) });
        if (!auto) {
            return res.status(404).send('Auto niet gevonden');
        }

        // Veronderstelt dat 'bod' in de database al als een integer is opgeslagen
        if (nieuwBod <= auto.bod) {
            // Vervang 'alert' met een methode die werkt op de server, zoals het sturen van een foutmelding terug naar de client
            return res.status(400).send('Je bod moet hoger zijn dan het hoogste bod!');
        }

        await autosCollection.updateOne(
            { _id: new ObjectId(autoId) },
            { $set: { bod: nieuwBod } } // Update het bod
        );

        console.log("Bod succesvol geüpdatet");
        res.redirect('/'); // Redirect naar de homepage of een andere relevante pagina
    } catch (error) {
        console.error(error);
        res.status(500).send('Er is een fout opgetreden bij het plaatsen van het bod.');
    }
});


// Server starten
app.listen(3000, () => {
    console.log("Server draait op http://localhost:3000/");
});