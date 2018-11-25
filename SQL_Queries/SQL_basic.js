 /* 
    
1.Create a view showing the values of the product on hand.
    
        *SQL* = CREATE VIEW onhandvalues AS SELECT * FROM product WHERE qty > 0;
         
        *query* =   SELECT * 
                    FROM onhandvalues;
        
        *Document* = 
+----+----------------------+-----+-------+---------+----------+
| id | name                 | qty | price | company | category |
+----+----------------------+-----+-------+---------+----------+
|  1 | Batman Lego Set      |   1 |  9.99 |       1 |        1 |
|  2 | 32 Piece Ratchet Set |   2 | 29.99 |       3 |        2 |
|  3 | Hammer               |   5 |  5.99 |       3 |        2 |
|  4 | Toothpaste           |   1 |  2.99 |       4 |        3 |
|  6 | Power Drill          |   5 | 49.99 |    NULL |        2 |
|  7 | 120 Piece Lego Set   |   1 | 12.99 |       1 |     NULL |
|  8 | Hot-wheels Car       |  10 |  0.99 |    NULL |     NULL |
+----+----------------------+-----+-------+---------+----------+
        7 rows in set (0.00 sec)
        
        
2.Select all the products and the category that the product is in.
    
        *SQL* =  
        
        *Query* =   SELECT * 
                    FROM `Product`, `Category` 
                    WHERE  `category` > 0;
        
        *Document* = 
+----+----------------------+-----+-------+---------+----------+----+--------+
| id | name                 | qty | price | company | category | id | name   |
+----+----------------------+-----+-------+---------+----------+----+--------+
|  1 | Batman Lego Set      |   1 |  9.99 |       1 |        1 |  1 | Toys   |
|  1 | Batman Lego Set      |   1 |  9.99 |       1 |        1 |  2 | Tools  |
|  1 | Batman Lego Set      |   1 |  9.99 |       1 |        1 |  3 | Health |
|  2 | 32 Piece Ratchet Set |   2 | 29.99 |       3 |        2 |  1 | Toys   |
|  2 | 32 Piece Ratchet Set |   2 | 29.99 |       3 |        2 |  2 | Tools  |
|  2 | 32 Piece Ratchet Set |   2 | 29.99 |       3 |        2 |  3 | Health |
|  3 | Hammer               |   5 |  5.99 |       3 |        2 |  1 | Toys   |
|  3 | Hammer               |   5 |  5.99 |       3 |        2 |  2 | Tools  |
|  3 | Hammer               |   5 |  5.99 |       3 |        2 |  3 | Health |
|  4 | Toothpaste           |   1 |  2.99 |       4 |        3 |  1 | Toys   |
|  4 | Toothpaste           |   1 |  2.99 |       4 |        3 |  2 | Tools  |
|  4 | Toothpaste           |   1 |  2.99 |       4 |        3 |  3 | Health |
|  5 | Floss                |   0 |  0.99 |       4 |        3 |  1 | Toys   |
|  5 | Floss                |   0 |  0.99 |       4 |        3 |  2 | Tools  |
|  5 | Floss                |   0 |  0.99 |       4 |        3 |  3 | Health |
|  6 | Power Drill          |   5 | 49.99 |    NULL |        2 |  1 | Toys   |
|  6 | Power Drill          |   5 | 49.99 |    NULL |        2 |  2 | Tools  |
|  6 | Power Drill          |   5 | 49.99 |    NULL |        2 |  3 | Health |
+----+----------------------+-----+-------+---------+----------+----+--------+
        18 rows in set (0.01 sec)
    
3.Select the product name and the category name of all the products.
        
        *SQL* =  
        
        *Query* =   SELECT Product.name, Category 
                    From `Product` INNER JOIN `Category`  
                        on Product.category = Category.name;
        
        *Document* = 
+----------------------+--------+
| name                 | name   |
+----------------------+--------+
| Batman Lego Set      | Toys   |
| 32 Piece Ratchet Set | Tools  |
| Hammer               | Tools  |
| Power Drill          | Tools  |
| Toothpaste           | Health |
| Floss                | Health |
+----------------------+--------+
6 rows in set (0.00 sec)

        
    
4.Select all the products, the categories they belong to, 
  and the company the product is made by. Hint: LEFT LEFT!
 
         
        *query* =   SELECT P.name, C1.name, C2.name 
                    FROM `Product` AS `P` 
                    LEFT JOIN `Category` AS `C1` 
	                    ON P.category = C1.id 
                    LEFT JOIN `Company` AS `C2` 
	                    ON P.company = C2.id 
        
        *Document*  =
+----------------------+--------+---------+
| name                 | name   | name    |
+----------------------+--------+---------+
| Batman Lego Set      | Toys   | LEGO    |
| 32 Piece Ratchet Set | Tools  | Stanley |
| Hammer               | Tools  | Stanley |
| Toothpaste           | Health | Crest   |
| Floss                | Health | Crest   |
| Power Drill          | Tools  | NULL    |
| 120 Piece Lego Set   | NULL   | LEGO    |
| Hot-wheels Car       | NULL   | NULL    |
+----------------------+--------+---------+
8 rows in set (0.00 sec)
      
      
4a. Update the company Stanley to Stanley Black and Decker and rerun
        
        *SQL* = UPDATE `Company` SET `name` = 'Stanley Black & Decker' 
                WHERE `Company`.`id` = 3; 
        
        *Query* =   SELECT P.name, C1.name, C2.name 
                    FROM `Product` AS `P` 
                    LEFT JOIN `Category` AS `C1` 
	                    ON P.category = C1.id 
                    LEFT JOIN `Company` AS `C2` 
	                    ON P.company = C2.id 
        
        *Document* = 
+----------------------+--------+------------------------+
| name                 | name   | name                   |
+----------------------+--------+------------------------+
| Batman Lego Set      | Toys   | LEGO                   |
| 32 Piece Ratchet Set | Tools  | Stanley Black & Decker |
| Hammer               | Tools  | Stanley Black & Decker |
| Toothpaste           | Health | Crest                  |
| Floss                | Health | Crest                  |
| Power Drill          | Tools  | NULL                   |
| 120 Piece Lego Set   | NULL   | LEGO                   |
| Hot-wheels Car       | NULL   | NULL                   |
+----------------------+--------+------------------------+
8 rows in set (0.00 sec)
    
    
    
5.Select all the products in the tools (ID = 2) category with a price greater than 10.00.
            
            
        *query* =   SELECT * FROM `Product` 
                    WHERE `category` = 2 AND `price` > 10
        
        *Document*  =
    
+----+----------------------+-----+-------+---------+----------+
| id | name                 | qty | price | company | category |
+----+----------------------+-----+-------+---------+----------+
|  2 | 32 Piece Ratchet Set |   2 | 29.99 |       3 |        2 |
|  6 | Power Drill          |   5 | 49.99 |    NULL |        2 |
+----+----------------------+-----+-------+---------+----------+
2 rows in set (0.01 sec)    
    

5a.Now only those made by Stanley Black and Decker.


        *query* =   SELECT * FROM `Product` 
        \           WHERE `category` = 2 AND `company` = 3
        
        *Document*  =

+----+----------------------+-----+-------+---------+----------+
| id | name                 | qty | price | company | category |
+----+----------------------+-----+-------+---------+----------+
|  2 | 32 Piece Ratchet Set |   2 | 29.99 |       3 |        2 |
|  3 | Hammer               |   5 |  5.99 |       3 |        2 |
+----+----------------------+-----+-------+---------+----------+
2 rows in set (0.01 sec)
    
    

6.Delete the Crest company

        *SQL* = DELETE FROM `company` 
                WHERE `company`.`id` = 4
    
        
        *Document* =

***FAIL***  Cannot delete or update a parent row: 

    
    
6a.Why did this happen?

    foreign key constraint fails 
    (`business`.`Product`, _ibfk_2` 
    FOREIGN KEY (`company`) 
    REFERENCES `Company` (`id`))
        
    
6b.What can you do?
        
    I disabled the foreign key check:
    **SET FOREIGN_KEY_CHECKS=0; -- to disable them
    **SET FOREIGN_KEY_CHECKS=1; -- to re-enable them
    
    **SQL** =   SET FOREIGN_KEY_CHECKS=0;   
                DELETE FROM `Company` 
                WHERE`Company`.`id` = 4;
                Query OK, 1 row affected (0.01 sec)
                SET FOREIGN_KEY_CHECKS=1;
        
        
*/