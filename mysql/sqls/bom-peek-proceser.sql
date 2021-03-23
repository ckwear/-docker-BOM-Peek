-- --------------------------------------------------------
-- 호스트:                          112.216.32.5
-- 서버 버전:                        10.2.14-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 프로시저 bom.usp_get_users 구조 내보내기
DELIMITER //
CREATE PROCEDURE `usp_get_users`(
	IN `pi_vch_id` VARCHAR(45),
	IN `pi_vch_password` VARCHAR(512)
)
    COMMENT '사용자 별 복호화 '
BEGIN

SELECT u.ID, 
u.Password,
CONVERT(AES_DECRYPT(u.UserName,SHA2('vetec',512)) USING utf8) AS 'UserName',
CONVERT(AES_DECRYPT(u.Phone,SHA2('vetec',512)) USING utf8) AS 'Phone',
CONVERT(AES_DECRYPT(u.Position,SHA2('vetec',512)) USING utf8) AS 'Position',
CONVERT(AES_DECRYPT(u.MailAddress,SHA2('vetec',512)) USING utf8) AS 'MailAddress',
u.Role AS 'Role',
u.AccountGeneration AS 'AccountGeneration',
u.Company AS 'Company',
u.CompanyAddress as 'CompanyAddress',
u.KSIC,
u.LastAccessDateTime as 'LastAccessDateTime',
u.Trial as 'Trial',
u.is_marketing
FROM tbl_users u
WHERE u.ID = pi_vch_id AND u.Password=pi_vch_password
ORDER BY u.AccountGeneration desc;

END//
DELIMITER ;

-- 프로시저 bom.usp_set_upd_last_access 구조 내보내기
DELIMITER //
CREATE PROCEDURE `usp_set_upd_last_access`(
	IN `pi_vch_user_id` VARCHAR(45)

)
BEGIN
UPDATE tbl_users u SET u.LastAccessDateTime = SYSDATE() WHERE u.ID = pi_vch_user_id;
END//
DELIMITER ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
