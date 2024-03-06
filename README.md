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

## Bijdragen

Wil je bijdragen? Volg deze stappen:

1. Maak een nieuwe branch voor je wijzigingen.
2. Implementeer en test je wijzigingen.
3. Commit en push je branch, en maak vervolgens een pull request.

Ik waardeer alle bijdragen, van bugfixes tot nieuwe features en documentatieverbeteringen.

Bedankt voor je interesse in AutoSwiper. Ik kijk uit naar je bijdragen!
