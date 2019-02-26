var mongoose = require('mongoose');

var Salle = mongoose.model('Salle', {
    id:{
        type:String
        // minLength:1,
        // trim:true
    },
    id_category:{
        type:String
        // minLength:1,
        // trim:true
    },
    name:{
        type:String
        // minLength:1,
        // trim:true
    },
    capacite:{
        type:String
        // minLength:1,
        // trim:true
    },
    superficie:{
        type:String
        // minLength:1,
        // trim:true
    },
    accessible_aux_handicape:{
        type:Boolean
    },
    connection_wifi:{
        type:Boolean
    },
    parking:{
        type:String
        // minLength:1,
        // trim:true
    },
    activite_sur_place: {
        type: Boolean
    },
    adresse: {
        type: String
        //  trim: true
        },

        tarif_de_location_de_la_salle_vide:{
        type:String
        // default: null  
    },
    tarif_par_personne_compris_location_monu_decoration:{
        type:String
        // default: null  
    },
    photo:{
        type:String
        // default: null
    }
});

module.exports = {Salle};
//fin