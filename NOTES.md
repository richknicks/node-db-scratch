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
14. confirm morgan working in console.log helmet in postman test api
15. build character router
16. create dbConfig.js file in database folder
17. touch .env file PORT=8555
18. build character model file
19. `knex migrate:make <characters>`
20. `knex migrate:latest`
21. `knex seed:make 00_characters` build seed data
22. `knex seed:run` view in http client


1.` migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true`
 