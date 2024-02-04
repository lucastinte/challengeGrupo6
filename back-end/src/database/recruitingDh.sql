CREATE DATABASE recruitingRH;
USE recruitingRH;
CREATE TABLE profesion (
    id_profesion INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(50) NOT NULL
);
INSERT INTO profesion (nombre) VALUES
('Abogado'), ('Arquitecto'), ('Botánico'), ('Computista'),
('Economista'), ('Técnico de sonido'), ('Profesor'), ('Linguista');
CREATE TABLE sexo (
    id_sexo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);
INSERT INTO sexo (nombre) VALUES
('Masculino'), ('Femenino'), ('Otro');
CREATE TABLE aspirantes (
    dni VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    perfil_linkedin VARCHAR(255),
    fecha_nacimiento DATE, 
    id_sexo INT,
    imagen VARCHAR(255), 
    id_profesion INT,
    FOREIGN KEY (id_sexo) REFERENCES sexo(id_sexo),
    FOREIGN KEY (id_profesion) REFERENCES profesion(id_profesion)
);

INSERT INTO aspirantes (dni, nombre, apellido, email, telefono, perfil_linkedin, fecha_nacimiento, id_sexo ,imagen, id_profesion)
VALUES 
('1111111111', 'Gloria', 'Medina', 'gloria@example.com', '123456789', 'gloria_linkedin', '1990-01-01', 2,"/img/foto1.jpg", 1), 
('2222222222', 'Daniel', 'Fuentes', 'daniel@example.com', '987654321', 'daniel_linkedin', '1985-05-05', 1,"/img/foto2.jpg", 2), 
('3333333333', 'Tim', 'Tim', 'tim@example.com', '555555555', 'tim_linkedin', '1980-12-12', 1,"/img/foto3.jpg", 3), 
('4444444444', 'Rocio', 'Carle', 'rocio@example.com', '666666666', 'rocio_linkedin', '1992-08-15', 2,"/img/foto4.jpg", 4), 
('5555555555', 'Victor', 'Fuentes', 'victor@example.com', '444444444', 'victor_linkedin', '1998-03-20', 1,"/img/foto5.jpg", 5),
('6666666666', 'Luis', 'Fuentes', 'luis@example.com', '333333333', 'luis_linkedin', '1975-07-25', 2,"/img/foto6.jpg", 6); 