/**
 * Auteurs : Mathis LÉCUYER - Léandro VERCASSON
 *
 * Script.js : Fichier contenant les scripts MongoDB
 * */

db.createCollection("equipes");
db.createCollection("joueurs");
db.createCollection("matchs");

// Modélisation des joueurs : nom, prénom, date de naissance, taille, poids, poste
db.joueurs.insertMany([
    {
        nom: "Messi",
        prenom: "Lionel",
        dateNaissance: new Date("1987-06-24"),
        taille: 170,
        poids: 72,
        poste: "Attaquant",
    },
    {
        nom: "Neymar",
        prenom: "Junior",
        dateNaissance: new Date("1992-02-05"),
        taille: 175,
        poids: 68,
        poste: "Milieu",
    },
    {
        nom: "Mbappé",
        prenom: "Kylian",
        dateNaissance: new Date("1998-12-20"),
        taille: 178,
        poids: 73,
        poste: "Attaquant",
    },
    {
        nom: "Ronaldo",
        prenom: "Cristiano",
        dateNaissance: new Date("1985-02-05"),
        taille: 187,
        poids: 83,
        poste: "Attaquant",
    }
]);

// Modélisation des équipes : nom, couleur, stade, effectif (liste de joueurs)
db.equipes.insertMany([
    {
        nom: "Paris Saint-Germain",
        couleur: "bleu et rouge",
        stade: "Parc des Princes",
        joueurs: [
            {
                nom: "Neymar",
                prenom: "Junior",
                dateNaissance: new Date("1992-02-05"),
                taille: 175,
                poids: 68,
                poste: "Milieu",
            },
            {
                nom: "Mbappé",
                prenom: "Kylian",
                dateNaissance: new Date("1998-12-20"),
                taille: 178,
                poids: 73,
                poste: "Attaquant",
            }
        ]
    },
    {
        nom: "FC Barcelone",
        couleur: "bleu et grenat",
        stade: "Camp Nou",
        joueurs: [
            {
                nom: "Messi",
                prenom: "Lionel",
                dateNaissance: new Date("1987-06-24"),
                taille: 170,
                poids: 72,
                poste: "Attaquant",
            }
        ]
    },
    {
        nom: "Juventus",
        couleur: "blanc et noir",
        stade: "Allianz Stadium",
        joueurs: [
            {
                nom: "Ronaldo",
                prenom: "Cristiano",
                dateNaissance: new Date("1985-02-05"),
                taille: 187,
                poids: 83,
                poste: "Attaquant",
            }
        ]
    },
    {
        nom: "FC Porto",
        couleur: "bleu et blanc",
        stade: "Estádio do Dragão",
        joueurs: []
    }
]);


// Modélisation des matchs : équipe domicile, équipe extérieure, compétition, score domicile, score extérieur, date
db.matchs.insertMany([
    {
        equipeDom: "FC Barcelone",
        equipeExt: "Paris Saint-Germain",
        competition: "Ligue des Champions",
        scoreDom: 1,
        scoreExt: 4,
        joueursDom: [
            {
                nom: "Messi",
                prenom: "Lionel",
                dateNaissance: new Date("1987-06-24"),
                taille: 170,
                poids: 72,
                poste: "Attaquant",
                note: 5
            }
        ],
        joueursExt: [
            {
                nom: "Neymar",
                prenom: "Junior",
                dateNaissance: new Date("1992-02-05"),
                taille: 175,
                poids: 68,
                poste: "Milieu",
                note: 5
            },
            {
                nom: "Mbappé",
                prenom: "Kylian",
                dateNaissance: new Date("1998-12-20"),
                taille: 178,
                poids: 73,
                poste: "Attaquant",
                note: 5
            }
        ]
    },
    {
        equipeDom: "Juventus",
        equipeExt: "Porto",
        competition: "Ligue des Champions",
        scoreDom: 3,
        scoreExt: 2,
        joueursDom: [
            {
                nom: "Ronaldo",
                prenom: "Cristiano",
                dateNaissance: new Date("1985-02-05"),
                taille: 187,
                poids: 83,
                poste: "Attaquant",
                note: 5
            }
        ],
        joueursExt: []
    }
]);