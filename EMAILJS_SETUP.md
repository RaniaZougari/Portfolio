# 📧 Configuration EmailJS pour le Portfolio

## 🔧 Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://emailjs.com](https://emailjs.com)
2. Créez un compte gratuit
3. Connectez-vous à votre dashboard

### 2. Configurer un service email
1. Dans le dashboard, cliquez sur "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail recommandé)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID** (ex: service_xyz123)

### 3. Créer un template
1. Cliquez sur "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Subject: Nouveau message depuis votre portfolio - {{from_name}}

Bonjour Rania,

Vous avez reçu un nouveau message depuis votre portfolio :

De : {{from_name}} ({{from_email}})

Message :
{{message}}

---
Envoyé automatiquement depuis votre portfolio
```

4. Notez votre **Template ID** (ex: template_abc123)

### 4. Récupérer votre clé publique
1. Allez dans "Account" > "General"
2. Trouvez votre **Public Key** (ex: abc123xyz)

### 5. Configurer les variables d'environnement
1. Créez un fichier `.env` à la racine du projet :

```bash
VITE_EMAILJS_SERVICE_ID=service_xyz123
VITE_EMAILJS_TEMPLATE_ID=template_abc123
VITE_EMAILJS_PUBLIC_KEY=abc123xyz
```

2. Remplacez les valeurs par vos vraies valeurs EmailJS

### 6. Redémarrer le serveur
```bash
npm run dev
```

## ✅ Test du formulaire
1. Allez sur votre portfolio local (http://localhost:5174)
2. Naviguez vers la section Contact
3. Remplissez le formulaire
4. Cliquez sur "Envoyer le message"
5. Vérifiez votre email !

## 🔧 Dépannage
- Si vous ne recevez pas d'emails, vérifiez vos spams
- Assurez-vous que toutes les variables d'environnement sont correctes
- Vérifiez la console du navigateur pour les erreurs
- Le quota gratuit EmailJS est de 200 emails/mois

## 📝 Notes importantes
- Ne committez jamais le fichier `.env` (il est déjà dans .gitignore)
- Pour le déploiement, ajoutez les variables d'environnement sur votre plateforme d'hébergement
- EmailJS fonctionne entièrement côté client, aucun backend nécessaire !

