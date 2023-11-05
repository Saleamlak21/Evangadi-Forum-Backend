const mysql = require("mysql2");
require("dotenv").config(); //dotenv config

//db connection
const dbConnection = mysql.createConnection(process.env.DATABASE_URL);
//createin table on db
const users = `CREATE TABLE if not exists users(
      user_id int auto_increment,
      username varchar(255) not null,
      firstname varchar(255) not null,
      lastname varchar(255) not null,
      email varchar(255) not null,
      password varchar(255) not null,
      PRIMARY KEY(user_id)
  )`;
const question = `CREATE TABLE IF NOT EXISTS question(
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    question VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL

);`;
const answer = `CREATE TABLE IF NOT EXISTS answer(
    answer_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    question_id INT,
    answer VARCHAR(255) NOT NULL
   
);`;

dbConnection.query(users, (err, results, fields) => {
  if (err) console.log(err);
});
dbConnection.query(question, (err, results, fields) => {
  if (err) console.log(err);
});
dbConnection.query(answer, (err, results, fields) => {
  if (err) console.log(err);
});

module.exports = dbConnection.promise();
