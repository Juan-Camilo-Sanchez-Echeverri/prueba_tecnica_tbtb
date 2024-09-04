-- Creación de la base de datos llamada 'library'
CREATE DATABASE library;

-- Uso de la base de datos 'library'
USE library;

-- Creación de la tabla Authors con una clave primaria autoincremental
CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY AUTO_INCREMENT,  -- Clave primaria autoincremental para identificar de forma única a cada autor
    Name VARCHAR(100) NOT NULL UNIQUE,  -- Nombre del autor, debe ser único y no puede ser nulo
    BirthDate DATE  -- Fecha de nacimiento del autor
);

-- Creación de la tabla Books que almacena los libros y tiene una relación con Authors
CREATE TABLE Books (
    BookID INT PRIMARY KEY AUTO_INCREMENT,  -- Clave primaria autoincremental para identificar de forma única a cada libro
    Title VARCHAR(255) NOT NULL,  -- Título del libro, no puede ser nulo
    PublishedDate DATE,  -- Fecha de publicación del libro
    AuthorID INT,  -- Clave foránea que referencia a AuthorID en la tabla Authors
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)  -- Definición de la clave foránea que establece la relación con la tabla Authors
);

-- Creación de la tabla Categories para gestionar las diferentes categorías de los libros
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,  -- Clave primaria autoincremental para identificar de forma única a cada categoría
    CategoryName VARCHAR(100) NOT NULL UNIQUE  -- Nombre de la categoría, debe ser único y no puede ser nulo
);

-- Creación de la tabla de unión BookCategories para establecer la relación muchos a muchos entre Books y Categories
CREATE TABLE BookCategories (
    BookID INT,  -- Clave foránea que referencia a BookID en la tabla Books
    CategoryID INT,  -- Clave foránea que referencia a CategoryID en la tabla Categories
    PRIMARY KEY (BookID, CategoryID),  -- Clave primaria compuesta por BookID y CategoryID, garantiza que la combinación de ambos sea única
    FOREIGN KEY (BookID) REFERENCES Books(BookID),  -- Definición de la clave foránea hacia la tabla Books
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)  -- Definición de la clave foránea hacia la tabla Categories
);
