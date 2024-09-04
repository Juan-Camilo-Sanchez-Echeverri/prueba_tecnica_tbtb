
USE library;

-- Inserción de varios registros en la tabla Authors
INSERT INTO Authors (Name, BirthDate) VALUES 
('Author One', '1970-01-01'),
('Author Two', '1980-02-15'),
('Author Three', '1990-03-30'),
('Author Four', '1965-04-22'),
('Author Five', '1975-05-17');

-- Inserción de varios registros en la tabla Books
INSERT INTO Books (Title, PublishedDate, AuthorID) VALUES 
('Book One', '2000-01-01', 1),
('Book Two', '2005-06-15', 2),
('Book Three', '2010-07-30', 3),
('Book Four', '2015-08-22', 4),
('Book Five', '2020-09-17', 5);

-- Inserción de varios registros en la tabla Categories
INSERT INTO Categories (CategoryName) VALUES 
('Fiction'),
('Non-Fiction'),
('Science'),
('History'),
('Biography');

-- Inserción de varios registros en la tabla BookCategories
INSERT INTO BookCategories (BookID, CategoryID) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 3),
(2, 4);


# 1. Inner Join:
SELECT Books.Title, Authors.Name
FROM Books
INNER JOIN Authors ON Books.AuthorID = Authors.AuthorID;

# 2. Left Join:
SELECT Books.Title, Authors.Name
FROM Books
LEFT JOIN Authors ON Books.AuthorID = Authors.AuthorID;

# 3. Union:
SELECT Title AS ItemName FROM Books
UNION
SELECT CategoryName AS ItemName FROM Categories;

# 4. Case:
SELECT Title,
        CASE
            WHEN PublishedDate < '2000-01-01' THEN 'Old'
            ELSE 'New'
        END AS BookAge
FROM Books;
