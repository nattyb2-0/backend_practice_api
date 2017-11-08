DROP DATABASE IF EXISTS practiceApi;
CREATE DATABASE practiceApi;

\c practiceApi;

CREATE TABLE companies (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR,
  type VARCHAR,
  numOfEmplyees INTEGER,
  vacancy BOOLEAN
);

INSERT INTO companies (name, location, type, numOfEmplyees, vacancy)
  VALUES ('Ministry of Finance','broad and newport street intersection','government agency',398,false);



