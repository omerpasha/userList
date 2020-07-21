const express = require('express');
const app = express();
const port = 9999;

app.get('/', (req, res) => res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${port}!`));const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  // The `host` parameter is required for other databases
  // host: 'localhost'
  dialect: 'sqlite',
  storage: './database.sqlite'
});
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });