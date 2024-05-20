/**
 * Auteurs : Mathis LÉCUYER - Léandro VERCASSON
 *
 * Script.js : Fichier contenant les scripts MongoDB
 * */

db = connect("mongodb://localhost:27017/football");

db.createCollection("equipes");
db.createCollection("joueurs");
db.createCollection("matchs");

// Modélisation des joueurs : nom, prénom, date de naissance, taille, poids, poste
db.joueurs.insertMany([
    {
        nom: "Mbappé",
        prenom: "Kylian",
        dateNaissance: new Date("1998-12-20"),
        taille: 178,
        poids: 73,
        poste: "Attaquant"
    },
    {nom: "Navas", prenom: "Keylor", dateNaissance: new Date("1986-12-15"), taille: 185, poids: 80, poste: "Gardien"},
    {
        nom: "Hakimi",
        prenom: "Achraf",
        dateNaissance: new Date("1998-11-04"),
        taille: 181,
        poids: 73,
        poste: "Défenseur"
    },
    {nom: "Ruiz", prenom: "Fabian", dateNaissance: new Date("1996-04-03"), taille: 189, poids: 85, poste: "Milieu"},
    {
        nom: "Ben Yedder",
        prenom: "Wissam",
        dateNaissance: new Date("1990-08-12"),
        taille: 170,
        poids: 68,
        poste: "Attaquant"
    },
]);

// Modélisation des équipes : nom, couleur, stade, effectif (liste de joueurs)
db.equipes.insertMany([
    // Ajout des équipes de Ligue 1
    {
        nom: "AS Monaco",
        couleur: "rouge et blanc",
        stade: "Stade Louis-II",
        joueurs: [{
            nom: "Ben Yedder",
            prenom: "Wissam",
            dateNaissance: new Date("1990-08-12"),
            taille: 170,
            poids: 68,
            poste: "Attaquant"
        }]
    },
    {nom: "Clermont Foot 63", couleur: "bleu et rouge", stade: "Stade Gabriel Montpied", joueurs: []},
    {nom: "FC Lorient", couleur: "orange et noir", stade: "Stade du Moustoir", joueurs: []},
    {nom: "FC Metz", couleur: "grenat", stade: "Stade Saint-Symphorien", joueurs: []},
    {nom: "FC Nantes", couleur: "jaune et vert", stade: "Stade de la Beaujoire", joueurs: []},
    {nom: "Havre Athletic Club", couleur: "bleu et blanc", stade: "Stade Océane", joueurs: []},
    {nom: "LOSC Lille", couleur: "rouge et blanc", stade: "Decathlon Arena - Stade Pierre Mauroy", joueurs: []},
    {nom: "Montpellier Hérault SC", couleur: "orange et bleu", stade: "Stade de la Mosson", joueurs: []},
    {nom: "OGC Nice", couleur: "rouge et noir", stade: "Allianz Riviera", joueurs: []},
    {nom: "Olympique de Marseille", couleur: "bleu et blanc", stade: "Orange Vélodrome", joueurs: []},
    {nom: "Olympique Lyonnais", couleur: "bleu et rouge", stade: "Groupama Stadium", joueurs: []},
    {
        nom: "Paris Saint-Germain",
        couleur: "rouge et bleu",
        stade: "Parc des Princes",
        joueurs: [{
            nom: "Mbappé",
            prenom: "Kylian",
            dateNaissance: new Date("1998-12-20"),
            taille: 178,
            poids: 73,
            poste: "Attaquant",
        }, {
            nom: "Navas",
            prenom: "Keylor",
            dateNaissance: new Date("1986-12-15"),
            taille: 185,
            poids: 80,
            poste: "Gardien",
        }, {
            nom: "Hakimi",
            prenom: "Achraf",
            dateNaissance: new Date("1998-11-04"),
            taille: 181,
            poids: 73,
            poste: "Défenseur",
        }, {
            nom: "Ruiz",
            prenom: "Fabian",
            dateNaissance: new Date("1996-04-03"),
            taille: 189,
            poids: 85,
            poste: "Milieu",
        }]
    },
    {nom: "RC Lens", couleur: "rouge et jaune", stade: "Stade Bollaert-Delelis", joueurs: []},
    {nom: "RC Starsbourg Alsace", couleur: "bleu et blanc", stade: "Stade de la Meinau", joueurs: []},
    {nom: "Stade Brestois 29", couleur: "rouge et blanc", stade: "Stade Francis-Le Blé", joueurs: []},
    {nom: "Stade de Reims", couleur: "rouge et blanc", stade: "Stade Auguste-Delaune", joueurs: []},
    {nom: "Stade Rennais FC", couleur: "rouge et noir", stade: "Roazhon Park", joueurs: []},
    {nom: "Toulouse FC", couleur: "violet et blanc", stade: "Stadium de Toulouse", joueurs: []},

    // Ajout des équipes de Ligue 2
    {nom: "AC Ajaccio", couleur: "rouge et blanc", stade: "Stade François Coty", joueurs: []},
    {nom: "AJ Auxerre", couleur: "bleu et blanc", stade: "Stade de l'Abbé-Deschamps", joueurs: []},
    {nom: "Amiens SC", couleur: "blanc et noir", stade: "Stade de la Licorne", joueurs: []},
    {nom: "Angers SCO", couleur: "noir et blanc", stade: "Stade Raymond-Kopa", joueurs: []},
    {nom: "AS Saint-Étienne", couleur: "vert", stade: "Stade Geoffroy-Guichard", joueurs: []},
    {nom: "EA Guingamp", couleur: "rouge et noir", stade: "Stade du Roudourou", joueurs: []},
    {nom: "ESTAC Troyes", couleur: "bleu et blanc", stade: "Stade de l'Aube", joueurs: []},
    {nom: "FC Annecy", couleur: "rouge et blanc", stade: "Parc des Sports d'Annecy", joueurs: []},
    {nom: "FC Girondins de Bordeaux", couleur: "bleu marine et blanc", stade: "Matmut Atlantique", joueurs: []},
    {nom: "Grenoble Foot 38", couleur: "bleu et blanc", stade: "Stade des Alpes", joueurs: []},
    {nom: "Paris FC", couleur: "bleu marine", stade: "Stade Charléty", joueurs: []},
    {nom: "Pau FC", couleur: "jaune et bleu", stade: "Nouste Camp", joueurs: []},
    {nom: "US Quevilly", couleur: "jaune et noir", stade: "Stade Robert-Diochon", joueurs: []},
    {nom: "Rodez AF", couleur: "rouge et jaune", stade: "Stade Paul-Lignon", joueurs: []},
    {nom: "SC Bastia", couleur: "bleu", stade: "Stade Armand-Cesari", joueurs: []},
    {nom: "Stade lavallois MFC", couleur: "tango et noir", stade: "Stade Francis-Le-Basser", joueurs: []},
    {nom: "Stade Malherbe Caen", couleur: "bleu et rouge", stade: "Stade Michel-d'Ornano", joueurs: []},
    {nom: "US Concarneau", couleur: "bleu, blanc et rouge", stade: "Stade Guy-Piriou", joueurs: []},
    {nom: "USL Dunkerque", couleur: "bleu et blanc", stade: "Stade Marcel-Tribut", joueurs: []},
    {nom: "Valenciennes FC", couleur: "rouge et blanc", stade: "Stade du Hainaut", joueurs: []},
]);


// Modélisation des matchs : équipe domicile, équipe extérieure, compétition, score domicile, score extérieur, Joueurs domicile + note / 10, Joueurs extérieur + note / 10
db.matchs.insertOne({
    equipeDomicile: "Paris Saint-Germain",
    equipeExterieur: "AS Monaco",
    competition: "Ligue 1",
    scoreDomicile: 5,
    scoreExterieur: 2,
    joueursDomicile: [
        {nom: "Mbappé", prenom: "Kylian", poste: "Attaquant", note: 8},
        {nom: "Navas", prenom: "Keylor", poste: "Gardien", note: 7},
        {nom: "Hakimi", prenom: "Achraf", poste: "Défenseur", note: 6},
        {nom: "Ruiz", prenom: "Fabian", poste: "Milieu", note: 7},
    ],
    joueursExterieur: [
        {nom: "Ben Yedder", prenom: "Wissam", poste: "Attaquant", note: 7},
    ],
});
