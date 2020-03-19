1. Create a README  `echo '# NodeJs Project from scratch with API' >> README.md`
2. `git init`
3. `npm init -y`
4. `npx gitignore node`
5. after setting up completely blank repo on GitHub
    a. `git remote -v` 
    b. `git remote add origin <URL>`
    c. `git remote -v`
    d. `knex init`change filename to './database/charactersDb.sqlite3' then #1
6. `git push -u origin master`    
7. `npm i express knex sqlite3 helmet morgan cors dotenv --save`
8.  `mkdir api auth database` 
9. `touch index.js api/server.js auth/character-model.js auth/character-router.js`
10. `"start": "nodemon index.js"` to scripts in package.json
11. `npm start`
12. build server.js add router
13. build index.js
14. confirm morgan working in console.log helmet in postman
15. build router

1.` migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }`
 