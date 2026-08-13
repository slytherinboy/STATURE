# STATURE

Site officiel de **STATURE — Conseil & solutions digitales**.

> Donnez à votre expertise la présence qu’elle mérite.

Cette version autonome reprend la dernière édition validée du site : identité Atlantic Authority, monogramme inspiré du Monument de la Renaissance africaine, animations 3D mesurées, produit unique SOCLE et ses deux modes d’acquisition.

- **SOCLE — Abonnement** : 50 000 FCFA à la conception, puis 29 900 FCFA par mois, avec un engagement initial de 12 mois.
- **SOCLE — Propriété** : 350 000 FCFA, première année de maintenance incluse, puis 90 000 FCFA par an ou 9 900 FCFA par mois.
- Contact : `staturesn@gmail.com`.

## Développement local

Prérequis : Node.js 22.

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Vérification de production

```bash
npm ci
npm run verify
```

Le site statique final est généré dans `out/`.

## Publication avec GitHub et Cloudflare Pages

### Option 1 — Intégration Git native de Cloudflare

1. Décompressez l’archive, créez un nouveau dépôt GitHub et ajoutez-y tous les fichiers contenus dans le dossier.
2. Dans Cloudflare, ouvrez **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Sélectionnez le dépôt et utilisez :
   - Branche de production : `main`
   - Commande de build : `npm run build`
   - Dossier de sortie : `out`
   - Version Node.js : `22`
4. Lancez le premier déploiement puis connectez votre domaine dans **Custom domains**.

### Option 2 — Déploiement automatique avec GitHub Actions

Le workflow `.github/workflows/cloudflare-pages.yml` vérifie chaque pull request et publie chaque push sur `main`.

1. Créez d’abord un projet Cloudflare Pages nommé `stature-digital`.
2. Ajoutez ces secrets dans **GitHub → Settings → Secrets and variables → Actions** :
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
3. Poussez le dépôt sur la branche `main`.

Le jeton Cloudflare doit avoir la permission **Account → Cloudflare Pages → Edit**.

## Commandes utiles

| Commande | Rôle |
|---|---|
| `npm run dev` | Développement local |
| `npm run build` | Génération statique dans `out/` |
| `npm run verify` | Build et contrôle des fichiers essentiels |
| `npm run start` | Aperçu local via le runtime Cloudflare Pages |
| `npm run deploy` | Build et publication manuelle avec Wrangler |

## Avant le lancement public

Vérifiez que l’adresse `staturesn@gmail.com` reçoit correctement les demandes avant de diriger le domaine public vers le site.
