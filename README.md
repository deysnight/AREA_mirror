# Projet AREA réalisé lors de la 3eme année à Epitech

  

**Equipe de dévelopement**: Claude Charles, Brice Aug, Louison Harizi, Lucien Claussin

Ce projet a pour but de créer des Actions/REActions (AREA) en utilisant des services externes (e.g Google api, Facebook api, ...). Lorsqu'un évènement est trigger sur une de vos Actions, a lieu une REAction programmée à l'avance par l'utilisateur, à l'aide de différents services.

Le projet se décompose en **3 parties**:

- Une **API REST** qui gère des Actions et des REActions

- Une **application mobile**

- Un **site web**

# Utilisation:

Pour lancer l'api et le site web il faut soit lancer la solution via visual studio soit grâce à Docker à l'aide de ces commandes :

	 > docker-compose build
	 > docker-compose up 

Pour l'application mobile, entrer les commandes suivantes :


	 > cd app_mobile
	 > npm install 
	 > npm start
	 
Vous pouvez utiliser Expo pour tester la solution en scannant le QR code généré par ces commandes.
	
# Actions

- **Youtube :**
	- Pour tout changement d'abonnés sur votre chaîne Youtube
	- Pour tout nouveau like/dislike sur une de vos videos
	- Etre alerté si une nouvelle vidéo est postée sur la chaîne de votre Youtuber favori

- **Facebook :**
	- Pour tout like sur une de vos pages Facebook publique
	- Quand l'utilisateur crée une nouvelle page Facebook
	- Pour tout nouveau post sur le mur Facebook de l'utilisateur

- **Twitch :**
	- Quand l'utilisateur follow une nouvelle chaîne Twitch
	- Quand l'utilisateur voit son compte d'abonné changer
	- Quand votre streamer favori passe live sur Twitch

- **Google Drive :**
	- Etre alerté si un fichier est upload sur votre Drive Google

- **Onedrive :**
	- Etre alerté s'il y a un nouveau partage de fichier sur votre Onedrive

- **Google Sheet :**
	- Etre alerté si une nouvelle sheet a été créée sur votre Drive Google Sheet

# REActions

Les réactions sont les différentes alertes possibles quand une des actions ci-dessus a été trigger.

- **Liste des REActions:**
    - Mail
        - Vous envoie un mail de notification directement sur la boîte mail renseigné lors de la création de votre compte.
    - Google Sheet
        - Met à jour une SpreadSheet Google sur votre Drive (nécessite un abonnement aux services Google)
    - Facebook
        - Poste un message de notification directement sur la page Facebook renseignée (nécessite un abonnement au service Facebook)
    
# Notes supplémentaires:

 - Toutes Action et REAction créées par l'utilisateur est soumis à un timer renseigné lors de la création de l'AREA. Il s'agit de tout les x minutes ou le serveur performera une requête pour déterminer si une REAction a lieu d'être.

- Certaines Actions ou REActions nécessitent le renseignement de champs de configuration supplémentaire par l'utilisateur comme : le nom d'un streamer, l'id d'une vidéo Youtube ou encore la page Facebook sur laquel l'application doit écrire en cas de trigger d'Action. Remplir ces champs est obligatoire.

		

`
