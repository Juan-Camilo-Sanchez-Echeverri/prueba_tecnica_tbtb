## Descripción del Proyecto

Este proyecto implementa una base de datos relacional para una biblioteca, utilizando SQL. Incluye tablas para autores, libros, categorías y una tabla de unión para gestionar la relación muchos a muchos entre libros y categorías.

## Estructura de la Base de Datos

### Tablas

1. **Authors**

   - `AuthorID` (INT, PRIMARY KEY, AUTO_INCREMENT)
   - `Name` (VARCHAR(100), UNIQUE, NOT NULL)
   - `BirthDate` (DATE)

2. **Books**

   - `BookID` (INT, PRIMARY KEY, AUTO_INCREMENT)
   - `Title` (VARCHAR(255), NOT NULL)
   - `PublishedDate` (DATE)
   - `AuthorID` (INT, FOREIGN KEY referencing `Authors(AuthorID)`)

3. **Categories**

   - `CategoryID` (INT, PRIMARY KEY, AUTO_INCREMENT)
   - `CategoryName` (VARCHAR(100), UNIQUE, NOT NULL)

4. **BookCategories**
   - `BookID` (INT, FOREIGN KEY referencing `Books(BookID)`)
   - `CategoryID` (INT, FOREIGN KEY referencing `Categories(CategoryID)`)
   - PRIMARY KEY (`BookID`, `CategoryID`)

### Scripts SQL

1. **Creación de Tablas**  
   Se crean las tablas `Authors`, `Books`, `Categories`, y `BookCategories` con sus respectivas claves primarias y foráneas, así como restricciones de valores únicos y por defecto.

2. **Inserción de Datos**  
   Inserción de datos de ejemplo en las tablas `Authors`, `Books`, `Categories`, y `BookCategories`.

3. **Consultas de Ejemplo**
   - **Inner Join**: Relaciona libros con autores.
   - **Left Join**: Muestra todos los libros y sus autores (incluso los libros sin autor).
   - **Union**: Combina títulos de libros y nombres de categorías en una sola lista.
   - **Case**: Clasifica los libros como "Old" o "New" según su fecha de publicación.

## Instrucciones

1. Ejecuta el script para crear la base de datos y tablas.(DDL.sql)
2. Inserta los datos de ejemplo en las tablas. (DML.sql)
3. Realiza las consultas para verificar las relaciones y datos insertados. (DML.sql)
