# AutoSwiper

Welkom bij AutoSwiper, een webapplicatie ontwikkeld met Node.js, Express, MongoDB Compass, Pug, en Git. Dit document leidt je door de stappen om aan de slag te gaan met het project, inclusief installatie, configuratie, en bijdrage-instructies.

## Overzicht

AutoSwiper is ontworpen om een naadloze ervaring te bieden voor gebruikers die geïnteresseerd zijn in het bekijken en bieden op auto's. Met behulp van moderne technologieën streven we ernaar een robuuste, schaalbare en onderhoudsvriendelijke applicatie te bouwen die zowel ontwikkelaars als eindgebruikers aanspreekt.

## Vereisten

Zorg ervoor dat de volgende tools op je systeem zijn geïnstalleerd voordat je begint:
- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB Compass: [Download MongoDB Compass](https://www.mongodb.com/try/download/compass)
- Git: [Download Git](https://git-scm.com/)

## Installatie

### Stap 1: Clone het Git-repository

```bash
git clone [repository URL]
```

Vervang `[repository URL]` met de daadwerkelijke URL van het Git-repository.

### Stap 2: Installeer Node.js afhankelijkheden

Navigeer naar de projectmap en voer het volgende commando uit:

```bash
npm install
```

Dit installeert alle benodigde Node.js pakketten zoals gedefinieerd in `package.json`.

### Stap 3: Configuratie

Configureer MongoDB Compass om te verbinden met je lokale MongoDB-server. De configuratiedetails kunnen variëren, dus raadpleeg de documentatie specifiek voor jouw setup.

## Gebruik

Start de webapplicatie met het volgende commando:

```bash
npm start
```

Bezoek `http://localhost:[port]/` in je webbrowser om de applicatie te gebruiken, vervang `[port]` door het poortnummer gespecificeerd in je applicatieconfiguratie.

## Werken met Pug

Pug-bestanden zijn te vinden in de `views` map. Voor het toevoegen of bewerken van pagina's, pas je de `.pug` bestanden aan met behulp van Pug-syntax.

## Werken met MongoDB Compass

Gebruik MongoDB Compass voor het visualiseren en beheren van de MongoDB-database. Je kunt databases creëren, documenten bekijken/bewerken/verwijderen en queries uitvoeren.

## Maps API

Integratie van Google Maps Embed in je Project
De Google Maps Embed API stelt ontwikkelaars in staat om Google Maps naadloos in hun applicaties en websites te integreren, waardoor gebruikers direct toegang hebben tot kaarten en locatiegegevens. Hieronder vindt u een beknopte handleiding over hoe u deze functionaliteit in je project kunt opnemen.

Stap 1: Verkrijgen van een API-sleutel
Om gebruik te maken van de Google Maps Embed API, is het essentieel om een API-sleutel te verkrijgen. Deze sleutel identificeert je applicatie bij de Google API-services en zorgt voor toegang. Volg deze stappen om een sleutel te genereren:

Bezoek de Google Cloud Console en log in met je Google-account.
Maak een nieuw project of selecteer een bestaand project.
Navigeer naar de 'API's & Services' > 'Credentials' pagina.
Klik op 'Create Credentials' en kies 'API key'. De aangemaakte sleutel wordt getoond; noteer deze veilig.
Stap 2: De Embed Code Integreren
Nadat u je API-sleutel heeft verkregen, kunt u de Google Maps Embed API in je project integreren. Voeg de volgende HTML-code toe aan je website of applicatie op de plaats waar u de kaart wilt weergeven:

<iframe
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  src="https://www.google.com/maps/embed/v1/place?key=UW_API_SLEUTEL&q=PlaceName">
</iframe>
Vervang UW_API_SLEUTEL met je daadwerkelijke API-sleutel en PlaceName met de gewenste locatie.

Stap 3: Aanpassingen en Gebruik
De Embed API biedt verschillende mogelijkheden om de weergave en functies van de kaart aan te passen. U kunt de documentatie van de Google Maps Embed API raadplegen voor meer informatie over aanpassingsopties en geavanceerde functionaliteiten.

## Unsplash CAR API

Voor het integreren van het ophalen van willekeurige foto's via de Unsplash API in je project, moet je een API-sleutel hebben en het /photos/random endpoint gebruiken. Dit endpoint staat je toe om een of meerdere willekeurige foto's te ontvangen, met opties voor specificatie zoals thema's of zoekwoorden. Je kunt dit doen door een HTTP GET-verzoek te versturen, inclusief je API-sleutel in de header voor authenticatie. Voor details over het constructen van je verzoek en het verwerken van de respons, bekijk de Unsplash API documentatie; https://unsplash.com/documentation#get-a-random-photo

## Bijdragen

Wil je bijdragen? Volg deze stappen:

1. Maak een nieuwe branch voor je wijzigingen.
2. Implementeer en test je wijzigingen.
3. Commit en push je branch, en maak vervolgens een pull request.

Ik waardeer alle bijdragen, van bugfixes tot nieuwe features en documentatieverbeteringen.

Bedankt voor je interesse in AutoSwiper. Ik kijk uit naar je bijdragen!
