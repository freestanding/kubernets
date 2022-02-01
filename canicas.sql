DROP DATABASE IF EXISTS canicasjs;
CREATE DATABASE canicasjs;

USE canicasjs;

create table partides (
    id_partida INT PRIMARY KEY AUTO_INCREMENT,
    data DATE,
    nom_jugador1 VARCHAR(100),
    nom_jugador2 VARCHAR(100),
    punts_jugador1 INT,
    punts_jugador2 INT,
    guanyador INT,
    torn INT
);

create table moviments (
    id_moviment INT PRIMARY KEY AUTO_INCREMENT,
    hora TIME,
    num_moviment INT,
    jugador INT,
    aposta INT,
    parimpar INT,
    id_partida INT,
    FOREIGN KEY (id_partida) REFERENCES partides(id_partida)
)