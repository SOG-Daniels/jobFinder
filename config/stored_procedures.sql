/*Stored Procedure for User Login [index.php]*/
DELIMITER //
CREATE PROCEDURE user_login( IN email varchar(30),IN pass varchar(30))
BEGIN
	SELECT * FROM users WHERE users.email = email AND users.password = pass;
END //
DELIMITER ;