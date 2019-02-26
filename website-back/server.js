const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var { mongoose } = require('./data/mongoose');
var { Salle } = require('./models/salle');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//configuration middleware(le retour de l'appel de cette fonction),
// est un middleware que l'on donne à express
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   })

app.use('/api', require('./api/index'));

//configuration de la route
app.post('/salles', (req, res) => {
    var salle = new Salle({
        id: req.body.id,
        name: req.body.name,
        price: req.body.tarif_de_location_de_la_salle_vide,
        photo: req.body.photo,
        parking: req.body.parking,
        capacite: req.body.capacite,
        superficie: req.body.superficie,
        accessible_aux_handicape: req.body.accessible_aux_handicape,
        connection_wifi: req.body.connection_wifi,
        activite_sur_place:req.body.activite_sur_place,
        adresse: req.body.adresse,
        tarif_par_personne_compris_location_monu_decoration: req.body.tarif_par_personne_compris_location_monu_decoration
    });

    app.update('./salles',(req, res)=> {

        salle.findByIdAndUpdate(
            request.body._id,
            {
                id: req.body.id,
                name: req.body.name,
                price: req.body.tarif_de_location_de_la_salle_vide,
                photo: req.body.photo,
                parking: req.body.parking,
                capacite: req.body.capacite,
                superficie: req.body.superficie,
                accessible_aux_handicape: req.body.accessible_aux_handicape,
                connection_wifi: req.body.connection_wifi,
                activite_sur_place:req.body.activite_sur_place,
                adresse: req.body.adresse,
                tarif_par_personne_compris_location_monu_decoration: req.body.tarif_par_personne_compris_location_monu_decoration
            },
            function (error, result) {
                if (error) {
                    throw error;
                } else {
                    response.status(200).json(result);
                }
            }
        );
    });

    app.delete('./salles', (req, res)=> {

        salle.findByIdAndRemove(
            req.params.id,
            function (error, result) {
                if (error) {
                    throw error;
                } else {
                    res.status(200).json(result);
                }
            }
        );
    });

    app.findAll('./salles', (req, res)=> {
        salle.find({}, function (error, salles) {
            if (error) {
                throw error;
            } else {
                res.status(200).json(salles);
            }
        });
    });


    salle.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/salles', (req, res) => {
    salle.find().then((salles) => {
        res.send({ salles })
    }, (e) => {
        res.status(400).send(e);
    });
});




// () => {}

app.listen(3000, () => {
    console.log('Started on port 3000');
});

//permet de récupérer une instance du serveur coté test
module.exports = { app };