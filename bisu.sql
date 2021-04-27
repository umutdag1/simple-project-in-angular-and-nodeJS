-- --------------------------------------------------------
-- Sunucu:                       127.0.0.1
-- Sunucu sürümü:                10.4.17-MariaDB - mariadb.org binary distribution
-- Sunucu İşletim Sistemi:       Win64
-- HeidiSQL Sürüm:               11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- bisu için veritabanı yapısı dökülüyor
CREATE DATABASE IF NOT EXISTS `bisu` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `bisu`;

-- tablo yapısı dökülüyor bisu.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `subscriptionId` varchar(50) NOT NULL,
  `deliveryDate` datetime NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `products` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `totalAmount` decimal(10,2) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- bisu.orders: ~6 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`orderId`, `subscriptionId`, `deliveryDate`, `paymentMethod`, `products`, `totalAmount`, `status`) VALUES
	(1, 'abc123', '2017-05-02 00:13:00', 'BKM', '[{"product":"19 lt damanaca", "quantity": 1 }]', 10.00, 'NEW'),
	(2, 'abc123', '2017-04-23 20:05:00', 'MASTERPASS', '[ {"product":"19 lt damanaca", "quantity":1 }, {"product":"10 lt pet", "quantity":2 }]', 24.00, 'CONFIRMED'),
	(3, 'abc123', '2017-03-31 16:35:00', 'PAYATDOOR', '[ {"product":"19 lt damanaca","quantity":2 }]', 12.00, 'CANCELED'),
	(4, 'abc125', '2017-03-29 11:19:00', 'PAYATDOOR', '[ {"product":"19 lt damanaca","quantity":3 } ]', 36.00, 'COMPLETED'),
	(5, 'abc125', '2017-03-23 17:59:00', 'BKM', '[ {"product":"5 lt pet","quantity":2 }]', 15.00, 'CONFIRMED'),
	(6, 'abc126', '2017-03-09 19:02:00', 'MASTERPASS', '[ {"product":"19 lt damanaca","quantity":1 }, {"product":"5 lt pet", "quantity":3 }]', 32.50, 'CANCELED');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- tablo yapısı dökülüyor bisu.subscription
CREATE TABLE IF NOT EXISTS `subscription` (
  `subscriptionId` varchar(50) NOT NULL,
  `fullaname` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `locationName` varchar(50) DEFAULT NULL,
  `subCityName` varchar(50) DEFAULT NULL,
  `cityName` varchar(50) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(50) DEFAULT NULL,
  `distributorNumber` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`subscriptionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- bisu.subscription: ~4 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` (`subscriptionId`, `fullaname`, `address`, `locationName`, `subCityName`, `cityName`, `brand`, `phoneNumber`, `distributorNumber`) VALUES
	('abc123', 'Utku', 'sair nefi sokak', 'caferaga', 'kadıköy', 'istanbul', 'hayat', '5332858530', '2161000000'),
	('abc124', 'Utku', 'sair nefi sokak', 'caferaga', 'kadıköy', 'istanbul', 'sirma', '5332858530', '2161000004'),
	('abc125', 'Ozan', 'bahariye sokak', 'caddebostan', 'kadıköy', 'istanbul', 'erikli', '5331533630', '2161000001'),
	('abc126', 'Ergin', 'mode caddesi', 'göztepe', 'kadıköy', 'istanbul', 'sirma', '5332858530', '2161000002');
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
