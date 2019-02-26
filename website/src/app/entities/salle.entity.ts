export class Salle {


    constructor(
        public id: String,
        public id_category: String,
        public name: String,
        public capacite: String,
        public superficie: String,
        public accessible_aux_handicape:Boolean,
        public connection_wifi: Boolean,
        public parking:String,
        public activite_sur_place: Boolean,
        public adresse : String,
        public tarif_de_location_de_la_salle_vide: String,
        public tarif_par_personne_compris_location_monu_decoration: String,
        //public prestation: string,
        public photo: String,
    ) { }

}
//entity