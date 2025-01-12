# prj-mongodb-DE1

Projet de MongoDB en première année de Data Engineering

## Consignes du projet

Dans un script MongoDB (fichier `.js`) de définition et manipulation de données, vous devez :
1. Modéliser dans MongoDB des équipes (par exemple de football) : nom, couleur, stade, effectif (liste de joueurs)
2. Modéliser dans MongoDB des joueurs : nom, prénom, date de naissance, taille, poids, poste
3. Modéliser dans MongoDB des matchs : équipe "domicile", équipe "extérieur", compétition, score équipe "domicile",
   score équipe "extérieur", joueurs équipe "domicile" avec pour chaque joueur sa note, joueurs équipe "extérieur" avec
   pour chaque joueur sa note
4. Mettre en place le nécessaire pour l'optimisation des requêtes
    + D'équipes par nom
    + De joueurs par nom
5. Exprimer la requête de sélection des joueurs pour un poste donné et un âge maximum (ex : arrière droit de moins de 25
   ans)
6. Exprimer des requêtes d'insertion
    + D'équipes
    + De joueurs
    + De matchs
7. Construire une nouvelle collection stockant les joueurs ayant joué au moins X (par exemple : 3) matchs, avec pour
   chaque joueur la moyenne de ses notes

Le script doit être rigoureusement commenté pour expliquer chaque étape.