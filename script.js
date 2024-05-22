/**
 * Auteurs : Mathis LÉCUYER - Léandro VERCASSON
 *
 * Script.js : Fichier contenant les scripts MongoDB du projet de modélisation de matchs de football
 * */

db = connect("mongodb://localhost:27017/football");

// Création des différentes collections
db.createCollection("equipes");
db.createCollection("joueurs");
db.createCollection("matchs");

// Modélisation et insertion des joueurs : nom, prénom, date de naissance (de type date), taille (en cm), poids (en kg), poste
db.joueurs.insertMany([
    {
        nom: "Mbappé",
        prenom: "Kylian",
        dateNaissance: new Date("1998-12-20"),
        taille: 178,
        poids: 73,
        poste: "Attaquant"
    },
    {
        nom: "Navas",
        prenom: "Keylor",
        dateNaissance: new Date("1986-12-15"),
        taille: 185,
        poids: 80,
        poste: "Gardien"
    },
    {
        nom: "Hakimi",
        prenom: "Achraf",
        dateNaissance: new Date("1998-11-04"),
        taille: 181,
        poids: 73,
        poste: "Défenseur"
    },
    {
        nom: "Ruiz",
        prenom: "Fabian",
        dateNaissance: new Date("1996-04-03"),
        taille: 189,
        poids: 85,
        poste: "Milieu"
    },
    {
        nom: "Ben Yedder",
        prenom: "Wissam",
        dateNaissance: new Date("1990-08-12"),
        taille: 170,
        poids: 68,
        poste: "Attaquant"
    },
    {
        nom: "Faris",
        prenom: "Moumbagna",
        dateNaissance: new Date("1995-11-12"),
        taille: 176,
        poids: 78,
        poste: "Attaquant"
    },
]);

// Modélisation et insertion des équipes : nom, couleurs (liste de chaines de caractères), stade, effectif (liste d'objets : joueurs)
db.equipes.insertMany([
    // Equipes de Ligue 1
    {
        nom: "AS Monaco",
        couleurs: ["rouge", "blanc"],
        stade: "Stade Louis-II",
        joueurs: [{
            nom: "Ben Yedder",
            prenom: "Wissam",
            poste: "Attaquant"
        }]
    },
    {nom: "Clermont Foot 63", couleurs: ["bleu", "rouge"], stade: "Stade Gabriel Montpied", joueurs: []},
    {nom: "FC Lorient", couleurs: ["orange", "noir"], stade: "Stade du Moustoir", joueurs: []},
    {nom: "FC Metz", couleurs: ["grenat"], stade: "Stade Saint-Symphorien", joueurs: []},
    {nom: "FC Nantes", couleurs: ["jaune", "vert"], stade: "Stade de la Beaujoire", joueurs: []},
    {nom: "Havre Athletic Club", couleurs: ["bleu", "blanc"], stade: "Stade Océane", joueurs: []},
    {nom: "LOSC Lille", couleurs: ["rouge", "blanc"], stade: "Decathlon Arena - Stade Pierre Mauroy", joueurs: []},
    {nom: "Montpellier Hérault SC", couleurs: ["orange", "bleu"], stade: "Stade de la Mosson", joueurs: []},
    {nom: "OGC Nice", couleurs: ["rouge", "noir"], stade: "Allianz Riviera", joueurs: []},
    {
        nom: "Olympique de Marseille",
        couleurs: ["bleu", "blanc"],
        stade: "Orange Vélodrome",
        joueurs: [{
            nom: "Faris",
            prenom: "Moumbagna",
            poste: "Attaquant",
        }, {
            nom: "Lopez",
            prenom: "Pau",
            poste: "Gardien",
        }, {
            nom: "Mbemba",
            prenom: "Chancel",
            poste: "Défenseur",
        }, {
            nom: "Kondogbia",
            prenom: "Geoffrey",
            poste: "Milieu",
        }]
    },
    {
        nom: "Olympique Lyonnais",
        couleurs: ["bleu", "rouge"],
        stade: "Groupama Stadium",
        joueurs: [{
            nom: "Nuamah",
            prenom: "Ernest",
            poste: "Attaquant",
        }, {
            nom: "Perri",
            prenom: "Lucas",
            poste: "Gardien",
        }, {
            nom: "Diomandé",
            prenom: "Sinaly",
            poste: "Défenseur",
        }, {
            nom: "Lepenant",
            prenom: "Johann",
            poste: "Milieu",
        }]
    },
    {
        nom: "Paris Saint-Germain",
        couleurs: ["rouge", "bleu"],
        stade: "Parc des Princes",
        joueurs: [{
            nom: "Mbappé",
            prenom: "Kylian",
            poste: "Attaquant",
        }, {
            nom: "Navas",
            prenom: "Keylor",
            poste: "Gardien",
        }, {
            nom: "Hakimi",
            prenom: "Achraf",
            poste: "Défenseur",
        }, {
            nom: "Ruiz",
            prenom: "Fabian",
            poste: "Milieu",
        }]
    },
    {nom: "RC Lens", couleurs: ["rouge", "jaune"], stade: "Stade Bollaert-Delelis", joueurs: []},
    {nom: "RC Starsbourg Alsace", couleurs: ["bleu", "blanc"], stade: "Stade de la Meinau", joueurs: []},
    {nom: "Stade Brestois 29", couleurs: ["rouge", "blanc"], stade: "Stade Francis-Le Blé", joueurs: []},
    {nom: "Stade de Reims", couleurs: ["rouge", "blanc"], stade: "Stade Auguste-Delaune", joueurs: []},
    {nom: "Stade Rennais FC", couleurs: ["rouge", "noir"], stade: "Roazhon Park", joueurs: []},
    {nom: "Toulouse FC", couleurs: ["violet", "blanc"], stade: "Stadium de Toulouse", joueurs: []},

    // Equipes de Ligue 2
    {nom: "AC Ajaccio", couleurs: ["rouge", "blanc"], stade: "Stade François Coty", joueurs: []},
    {nom: "AJ Auxerre", couleurs: ["bleu", "blanc"], stade: "Stade de l'Abbé-Deschamps", joueurs: []},
    {nom: "Amiens SC", couleurs: ["blanc", "noir"], stade: "Stade de la Licorne", joueurs: []},
    {nom: "Angers SCO", couleurs: ["noir", "blanc"], stade: "Stade Raymond-Kopa", joueurs: []},
    {nom: "AS Saint-Étienne", couleurs: ["vert"], stade: "Stade Geoffroy-Guichard", joueurs: []},
    {nom: "EA Guingamp", couleurs: ["rouge", "noir"], stade: "Stade du Roudourou", joueurs: []},
    {nom: "ESTAC Troyes", couleurs: ["bleu", "blanc"], stade: "Stade de l'Aube", joueurs: []},
    {nom: "FC Annecy", couleurs: ["rouge", "blanc"], stade: "Parc des Sports d'Annecy", joueurs: []},
    {nom: "FC Girondins de Bordeaux", couleurs: ["bleu marine", "blanc"], stade: "Matmut Atlantique", joueurs: []},
    {nom: "Grenoble Foot 38", couleurs: ["bleu", "blanc"], stade: "Stade des Alpes", joueurs: []},
    {nom: "Paris FC", couleurs: ["bleu marine"], stade: "Stade Charléty", joueurs: []},
    {nom: "Pau FC", couleurs: ["jaune", "bleu"], stade: "Nouste Camp", joueurs: []},
    {nom: "US Quevilly", couleurs: ["jaune", "noir"], stade: "Stade Robert-Diochon", joueurs: []},
    {nom: "Rodez AF", couleurs: ["rouge", "jaune"], stade: "Stade Paul-Lignon", joueurs: []},
    {nom: "SC Bastia", couleurs: ["bleu"], stade: "Stade Armand-Cesari", joueurs: []},
    {nom: "Stade lavallois MFC", couleurs: ["tango", "noir"], stade: "Stade Francis-Le-Basser", joueurs: []},
    {nom: "Stade Malherbe Caen", couleurs: ["bleu", "rouge"], stade: "Stade Michel-d'Ornano", joueurs: []},
    {nom: "US Concarneau", couleurs: ["bleu", "blanc", "rouge"], stade: "Stade Guy-Piriou", joueurs: []},
    {nom: "USL Dunkerque", couleurs: ["bleu", "blanc"], stade: "Stade Marcel-Tribut", joueurs: []},
    {nom: "Valenciennes FC", couleurs: ["rouge", "blanc"], stade: "Stade du Hainaut", joueurs: []},
]);


// Modélisation et insertion des matchs : compétition et équipe domicile, équipe extérieure, contenant chacun le nom de l'équipe, leur score pendant le match et une liste des joueurs qui ont jouées (avec une note sur 10)
db.matchs.insertMany([
    {
        competition: "Ligue 1",
        equipeDomicile: {
            nomEquipe: "Paris Saint-Germain",
            score: 5,
            joueurs: [
                {nom: "Mbappé", prenom: "Kylian", poste: "Attaquant", note: 8},
                {nom: "Navas", prenom: "Keylor", poste: "Gardien", note: 7},
                {nom: "Hakimi", prenom: "Achraf", poste: "Défenseur", note: 6},
                {nom: "Ruiz", prenom: "Fabian", poste: "Milieu", note: 7},
            ],
        },
        equipeExterieure: {
            nomEquipe: "AS Monaco",
            score: 2,
            joueurs: [
                {nom: "Ben Yedder", prenom: "Wissam", poste: "Attaquant", note: 7},
            ],
        },
    },
    {
        competition: "Ligue 1",
        equipeDomicile: {
            nomEquipe: "AS Monaco",
            score: 0,
            joueurs: [
                {nom: "Ben Yedder", prenom: "Wissam", poste: "Attaquant", note: 8},
            ],
        },
        equipeExterieure: {
            nomEquipe: "Paris Saint-Germain",
            score: 0,
            joueurs: [
                {nom: "Mbappé", prenom: "Kylian", poste: "Attaquant", note: 3}, 
            ],
        },
    },
    {
        competition: "Ligue 1",
        equipeDomicile: {
            nomEquipe: "Olympique de Marseille",
            score: 1,
            joueurs: [
                {nom: "Lopez", prenom: "Pau", poste: "Gardien", note: 5},
                {nom: "Mbemba", prenom: "Chancel", poste: "Défenseur", note: 7},
                {nom: "Kondogbia", prenom: "Geoffrey", poste: "Milieu", note: 2},
            ],
        },
        equipeExterieure: {
            nomEquipe: "Olympique Lyonnais",
            score: 2,
            joueurs: [
                {nom: "Nuamah", prenom: "Ernest", poste: "Attaquant", note: 8},
                {nom: "Diomandé", prenom: "Sinaly", poste: "Défenseur", note: 6},
            ],
        },
    },
    {
        competition: "Ligue 1",
        equipeDomicile: {
            nomEquipe: "Paris Saint-Germain",
            score: 3,
            joueurs: [
                {nom: "Mbappé", prenom: "Kylian", poste: "Attaquant", note: 4},
                {nom: "Navas", prenom: "Keylor", poste: "Gardien", note: 9},
            ],
        },
        equipeExterieure: {
            nomEquipe: "Olympique de Marseille",
            score: 2,
            joueurs: [
                {nom: "Mbemba", prenom: "Chancel", poste: "Défenseur", note: 6},
                {nom: "Faris", prenom: "Moumbagna", poste: "Attaquant", note: 8},
            ],
        },
    },
]);


// Optimisation des requêtes d'équipes par nom
db.equipes.ensureIndex({"nom": 1});

// Optimisation des requêtes de joueurs par nom
db.joueurs.ensureIndex({"nom": 1});

// Requête de sélection des joueurs pour un poste donné : Attaquant et un âge max : 30 ans
const aujourdhui = new Date(); // Date d'aujourd'hui
db.joueurs.find({
    poste: "Attaquant",
    dateNaissance: {
        $gte: new Date(aujourdhui.setFullYear(aujourdhui.getFullYear() - 30)) // Plus grand que : aujourd'hui - 30 ans
    }
});


// Construction d'une nouvelle collection stockant le classement des joueurs ayant joué au moins 2 matchs, selon leur note, avec pour chaque joueur la moyenne de ses notes ainsi que le nombre de matchs joués
db.matchs.aggregate([
    { $project: {
        _id: 0,
        joueurs: { $concatArrays: ["$equipeDomicile.joueurs", "$equipeExterieure.joueurs"] } // Concaténation des joueurs à domicile et à l'extérieur en une seule liste de joueurs
    }},
    { $unwind: "$joueurs" }, // Dérouler la liste des joueurs créée
    { $group: { // Concaténation de la liste des joueurs selon leur nom, prénom et poste
        _id: {
            nom: "$joueurs.nom",
            prenom: "$joueurs.prenom",
            poste: "$joueurs.poste"
        },
        moyenneNotes: { $avg: "$joueurs.note" }, // Moyenne des notes de tous les matchs
        nbMatchs : { $sum: 1 } // Comptabiliser le nombre de matchs
    }},
    { $match: { nbMatchs: { $gte: 2 }}}, // Récupération seulement des joueurs ayant joués au moins 2 matchs
    { $project: { // Création des objets joueurs selon la concaténation
        _id: 0,
        nom: "$_id.nom",
        prenom: "$_id.prenom",
        poste: "$_id.poste",
        nbMatchs: "$nbMatchs",
        note: "$moyenneNotes"
    }},
    { $sort: { note: -1}}, // Tri des joueurs selon leur note descendante (pour réaliser un classement)
    { $out: "classementJoueurs"} // Enregistrement dans une nouvelle collection
]);