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

// Client-side API code
const autoData = [
  
    { _id: '65df0ed431dd7777cd9f759c', name: 'Audi S5', bouwjaar: '2015', kilometerstand: '34000', vraagprijs: '54000', bod: '$50000' },
    { _id: '21ae4edd3b8f8fe9daa1b19a', name: 'BMW M3', bouwjaar: '2018', kilometerstand: '22000', vraagprijs: '65000', bod: '$62000' },
    { _id: '58cb137c8d8e204ee8d2e334', name: 'Mercedes AMG GT', bouwjaar: '2019', kilometerstand: '12000', vraagprijs: '98000', bod: '$95000' },
    { _id: '9d3f5c8501fbd892358b273e', name: 'Tesla Model S', bouwjaar: '2020', kilometerstand: '5000', vraagprijs: '75000', bod: '$72000' },
    { _id: '3f45ba9f5e918f761d62e2ea', name: 'Volvo XC90', bouwjaar: '2017', kilometerstand: '45000', vraagprijs: '40000', bod: '$38000' },
    { _id: 'aefb8c47d3a80f18134131a3', name: 'Ford Mustang GT', bouwjaar: '2016', kilometerstand: '30000', vraagprijs: '32000', bod: '$31000' },
    { _id: '4ceda0b8b50eee4038e77e83', name: 'Porsche 911', bouwjaar: '2018', kilometerstand: '15000', vraagprijs: '112000', bod: '$110000' },
    { _id: '2f3ae3b8c13237b3d2e9c3b4', name: 'Honda Civic Type R', bouwjaar: '2019', kilometerstand: '10000', vraagprijs: '35000', bod: '$34000' },
    { _id: '6e5f8e9d2b9c5817f5d3e6ab', name: 'Nissan GT-R', bouwjaar: '2017', kilometerstand: '20000', vraagprijs: '90000', bod: '$88000' },
    { _id: '8d9f3b1c2a3b59127d3e7e92', name: 'Lamborghini Huracan', bouwjaar: '2020', kilometerstand: '8000', vraagprijs: '200000', bod: '$195000' }
  

];

app.get('/api/autos', async (req, res) => {
  const collection = await connect();
  const autos = await collection.find().toArray();
  res.json(autos);
});


// Route: Toon alle auto's op de indexpagina (bron: ChatGPT4)
app.get('/', async (req, res) => {
    const collection = await connect();
    const autos = await collection.find().toArray(); // Alle auto's ophalen
    res.render('index', { autos, autoData }); // Render de indexpagina met de auto's
});

app.get('/showroom', async (req, res) => {
    res.render('showroom'); // Render de showroom pagina
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
            return res.status(400).send('Nieuw bod moet hoger zijn dan het huidige bod.');
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
    console.log("Server draait op http://localhost:3000/ ");
});