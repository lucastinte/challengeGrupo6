CREATE DATABASE IF NOT EXISTS recruitingRH;
USE recruitingRH;

CREATE TABLE IF NOT EXISTS professions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    deletedAt DATETIME
);

CREATE TABLE IF NOT EXISTS genders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    deletedAt DATETIME
);

CREATE TABLE IF NOT EXISTS applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(20) UNIQUE NOT NULL ,
    name VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    linkedinProfile VARCHAR(255),
    birthDate DATE, 
    genderId INT NOT NULL,
    image VARCHAR(255), 
    professionId INT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    deletedAt DATETIME,
    FOREIGN KEY (genderId) REFERENCES genders(id),
    FOREIGN KEY (professionId) REFERENCES professions(id)
);
