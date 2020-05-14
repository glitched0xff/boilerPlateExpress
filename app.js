/** 
 * @name App.js
 * @description entry point per il boilerplate Express + js con commenti
 * @version 1.0
 * @author Mauro Prandelli
 */

const express = require('express') // Importo il modulo express per la gestione del Routing e del server
const bodyParser = require('body-parser') // Importo body-parser per parsare le richieste derivanti da POST
const ejs = require('ejs') // Importo il motore di rendering
const app = express() // Istanzio l'app con express
const portaServer = 3000 //Assegno la porta del server
const helmet=require('helmet') // Modulo di sicurezza
// Importo le route di riferimento
const routePrincipale = require('./routes/index') 

// abilito il motore di rendering
app.set('view engine', 'ejs');

// Imposto helmet per l'app
app.use(helmet())

// Setto il body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Cartella statica /public
app.use(express.static(__dirname + '/public'))

// Abilito le routes
app.use('/', routePrincipale)

// Per avviare node app.js oppure nodemon app.js
app.listen(portaServer, () => {
    console.log('Server partito porta 3000')
})