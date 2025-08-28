# 🚀 Configuration Rapide EmailJS - 5 minutes !

## ⚡ Étapes Express

### 1. Créer un compte EmailJS
- Allez sur [https://emailjs.com](https://emailjs.com)
- Cliquez "Sign Up" et créez un compte gratuit
- Connectez-vous

### 2. Configurer Gmail (2 minutes)
1. Dans le dashboard, cliquez "Email Services"
2. Cliquez "Add New Service"
3. Choisissez "Gmail"
4. Connectez votre compte Gmail
5. **Notez le Service ID** (ex: `service_abc123`)

### 3. Créer un template (1 minute)
1. Cliquez "Email Templates"
2. Cliquez "Create New Template"
3. Utilisez ce template simple :

```
Subject: Message depuis Portfolio - {{from_name}}

De : {{from_name}} ({{from_email}})
Message : {{message}}
```

4. **Notez le Template ID** (ex: `template_xyz789`)

### 4. Récupérer votre clé (30 secondes)
1. Allez dans "Account" > "General"
2. **Copiez votre Public Key** (ex: `abc123xyz`)

### 5. Configurer le fichier .env
Modifiez le fichier `.env` à la racine du projet :

```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123xyz
```

### 6. Redémarrer et tester
```bash
npm run dev
```

## 🔍 Vérification
- Ouvrez la console du navigateur (F12)
- Vous devriez voir "EmailJS initialisé" au lieu d'un avertissement
- Le formulaire devrait maintenant envoyer de vrais emails !

## ❌ Si ça ne marche toujours pas
1. Vérifiez que le fichier `.env` est bien à la racine du projet
2. Vérifiez que vous avez copié les bonnes valeurs
3. Redémarrez le serveur après modification du `.env`
4. Vérifiez la console du navigateur pour les erreurs

## 📧 Test
1. Remplissez le formulaire de contact
2. Cliquez "Envoyer le message"
3. Vérifiez votre email Gmail !

