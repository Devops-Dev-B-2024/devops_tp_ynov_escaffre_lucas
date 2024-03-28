# ESCAFFRE Lucas

## TP Docker

### Executer un serveur web nginx avec docker

#### 1. Récupérer l'image nginx

```bash
docker pull nginx
```

<img src="./img.png" alt="">

#### 2. Lancer une commande pour vérifier que l'image a bien été téléchargée

```bash
docker images
```

#### 3. Créer un fichier dans le répertoire local .html/ nommé `index.html` contenant le code suivant :

```html
<!DOCTYPE html>
<html>
<head>
    <title>TP Docker</title>
</head>
<body>
    <h1>Hello World !</h1>
</body>
</html>
```

#### 4. Démarrer un nouveau container et servir la page html créée précédemment

```bash
docker run --name tp-docker -d -p 8080:80 -v ./index.html:/usr/share/nginx/html/index.html nginx
```

#### 5. Supprimer le container

```bash
docker stop tp-docker
docker rm -f tp-docker
```

#### 6. Relancer le même container sans l'option -v puis utiliser la commande "cp" pour servir votre fichier (docker cp ARGS)

```bash
docker run --name tp-docker -d -p 8080:80 nginx
docker cp index.html tp-docker:/usr/share/nginx/html/index.html
```