CREATE DATABASE recruitingRH;
USE recruitingRH;

CREATE TABLE professions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
    createdAt DATE
    updatedAt  DATE
    deletedAt DATE
);

CREATE TABLE genders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
    createdAt DATE
    updatedAt  DATE
    deletedAt DATE
);

CREATE TABLE applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni INT UNIQUE NOT NULL ,
    name VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    linkedinProfile VARCHAR(255),
    birthDate DATE, 
    genderId INT NOT NULL,
    image VARCHAR(255), 
    professionId INT NOT NULL,
    FOREIGN KEY (genderId) REFERENCES genders(id),
    FOREIGN KEY (professionId) REFERENCES professions(id)
    createdAt DATE
    updatedAt  DATE
    deletedAt DATE
);

