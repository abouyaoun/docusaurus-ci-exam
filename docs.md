1 - Initialisation du projet et configuration de Docusaurus.
npx create-docusaurus@latest website classic
----------------------------------------------------------------------------------
2 - Configuration de l'intégration continue (CI) avec GitHub Actions.
dans le répertoire .github/workflows/deploy.yml

name: Deploy Docusaurus

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build


----------------------------------------------------------------------------------
3 - Déploiement du site sur GitHub Pages.





----------------------------------------------------------------------------------

4 - Ajout et exécution des tests pour le site.

npm install --save-dev jest

const { exec } = require('child_process');

test('builds without errors', done => {
  exec('npm run build', (error, stdout, stderr) => {
    expect(error).toBeNull();
    done();
  });
});






----------------------------------------------------------------------------------
5 - Utilisation de linters et autres outils de vérification de code.




----------------------------------------------------------------------------------
6 - Description détaillée du flux de travail Git Flow utilisé.