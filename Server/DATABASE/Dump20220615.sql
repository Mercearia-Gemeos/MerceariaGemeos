CREATE DATABASE  IF NOT EXISTS `merceariagemeos` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `merceariagemeos`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: merceariagemeos
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `Id_Adm` int NOT NULL AUTO_INCREMENT,
  `Login` varchar(100) NOT NULL,
  `Senha` varchar(100) NOT NULL,
  `Refresh_Jwt_Key` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id_Adm`),
  UNIQUE KEY `Login` (`Login`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'admin','$2b$10$8PQhFyrw7AZq6rJy59rjaeiUAQZzeEGOLfMjQmahT0naEQQAUrRNm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZF9BZG0iOjEsIkxvZ2luIjoiYWRtaW4iLCJpYXQiOjE2NTUzMzYyMzUsImV4cCI6MTY1NTUwOTAzNX0.OitHBpf0pZhKrwqweQWDudzYPxEVhfFd9j8t8-ApvZs');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `Id_Banner` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  `Descricao` varchar(50) NOT NULL,
  `Link_Banner_Imagem` varchar(150) NOT NULL,
  `Status_Banner` int NOT NULL,
  PRIMARY KEY (`Id_Banner`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'Salgadinhos e Chocolates','salgadinhos e chocolates','https://i.ibb.co/7b43pqb/banner2.jpg',0),(2,'Unilever','Unilever','https://i.ibb.co/tHsj0dj/banner9.jpg',1),(3,'frios Embalados','frios Embalados','https://i.ibb.co/F0Kqpjm/banner1.jpg',0),(16,'35% off Sadia','Promoção nos frangos Sadia','https://i.imgur.com/fQxvcNC.png',1),(17,'Cervejas 35%OFF','Cervejas Com  Denconto de 35%','https://i.imgur.com/eMcDBDX.png',1),(18,'Pizzas Com Frete Grátis','Pizzas Sem Frete','https://i.imgur.com/jYyRszU.png',0),(19,'Leve 4 page 3 Ambev','promoção ambev','https://i.imgur.com/Z0VRSwT.png',1),(20,'Nestle Sem Frete','Frete Grátis nos Produtos Nestle','https://i.imgur.com/OTnRNGl.png',0),(21,'Refrigerantes  sem Frete','Refrigerantes  Ambev sem frete','https://i.imgur.com/Nk9a3SJ.png',0);
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `Id_Categoria` int NOT NULL AUTO_INCREMENT,
  `Nome_Categoria` varchar(20) NOT NULL,
  `Em_Destaque` int NOT NULL,
  `Status_Categoria` int NOT NULL,
  PRIMARY KEY (`Id_Categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Nenhuma',0,0),(2,'Doce',1,1),(3,'Salgados',1,1),(4,'Bebidas',1,1),(5,'Veganos',1,1),(6,'Grãos',1,1),(7,'Padaria',1,1),(8,'Carnes',0,1),(9,'Higiene',0,1),(10,'Limpeza',0,1),(11,'Frutas',0,1);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `Id_Cli` int NOT NULL AUTO_INCREMENT,
  `Cpf_Cli` varchar(14) NOT NULL,
  `Nome` varchar(30) NOT NULL,
  `Sobrenome` varchar(30) NOT NULL,
  `Endereco` varchar(50) DEFAULT NULL,
  `Bairro` varchar(50) NOT NULL,
  `Cidade` varchar(30) NOT NULL,
  `CEP` varchar(9) NOT NULL,
  `UF` char(2) NOT NULL,
  `Celular` varchar(14) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Senha` varchar(100) NOT NULL,
  `Refresh_Jwt_Key` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id_Cli`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'123.123.123-12','Vitor','Oliveira','Rua Oliveira 12','Paulistano','São Paulo','12345-123','SP','(11)31231-2123','vitor@gmail.com','$2b$10$5Vy1frF2uo9nYx9q/V3vKOS7pzlc2TldrNmrbAGHeVB3on/l4VPw6','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZF9DbGkiOjEsIkVtYWlsIjoidml0b3JAZ21haWwuY29tIiwiaWF0IjoxNjU0MTI0NjUyLCJleHAiOjE2NTQyOTc0NTJ9.Z_Jpg8--7xSWUCmJGm6sGRTp618RoDcozgUZxuey6Lc'),(2,'111.222.332-22','Gabriel','Carlos','Rua das Pedras 12','Paulistano','São Paulo','2201-2121','SP','(11)92341-7654','gabriel@gmail.com','$2b$10$za1maGIDNmGYxUDo6L3Vc.fbiEyDLauIe3ChMSXzprZ3tm48Z9hP6','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZF9DbGkiOjIsIkVtYWlsIjoiZ2FicmllbEBnbWFpbC5jb20iLCJpYXQiOjE2NTUzMzM1MTcsImV4cCI6MTY1NTUwNjMxN30.w6JGoCxhbZ7dCvsZx1avbi3DWZK1rx-yW4_XIKmB9Es'),(3,'222.456.123-98','Igor','Gabriel','Rua Dos Coqueiros 11','Paulistano','São Paulo','2296-4545','SP','(11)95467-1234','Igor@gmail.com','$2b$10$O5EL.b0yNhK0JwL1IFGAj.duG2PfxJOR1OfGykAVI5JiXtrO6ndKO','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZF9DbGkiOjMsIkVtYWlsIjoiSWdvckBnbWFpbC5jb20iLCJpYXQiOjE2NTUzMzU2NTMsImV4cCI6MTY1NTUwODQ1M30.Wk9bKv3AJbTZEBTaIsgVGNRsCVUxDAYjMQBHPoJgT9k');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itempedido`
--

DROP TABLE IF EXISTS `itempedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itempedido` (
  `Id_ItemPedido` int NOT NULL AUTO_INCREMENT,
  `Id_Pedido` int NOT NULL,
  `Id_Produto` int NOT NULL,
  `Valor` decimal(6,2) NOT NULL,
  `Prod_Quantidade` int NOT NULL,
  PRIMARY KEY (`Id_ItemPedido`),
  KEY `Id_Pedido` (`Id_Pedido`),
  KEY `Id_Produto` (`Id_Produto`),
  CONSTRAINT `ItemPedido_ibfk_1` FOREIGN KEY (`Id_Pedido`) REFERENCES `pedido` (`Id_Pedido`),
  CONSTRAINT `ItemPedido_ibfk_2` FOREIGN KEY (`Id_Produto`) REFERENCES `produto` (`Id_Produto`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itempedido`
--

LOCK TABLES `itempedido` WRITE;
/*!40000 ALTER TABLE `itempedido` DISABLE KEYS */;
INSERT INTO `itempedido` VALUES (1,1,1,4.99,1),(2,1,3,2.63,1),(3,1,6,4.99,1),(4,1,5,9.19,1),(5,2,1,4.99,3),(6,3,7,25.47,1),(7,3,11,12.42,1),(8,3,4,13.99,1),(9,3,9,2.41,1),(10,3,3,2.63,1),(11,3,16,6.99,1),(12,4,39,6.04,1),(13,4,34,17.49,1),(14,4,40,5.80,1),(15,5,11,12.42,2),(16,6,23,3.29,3),(17,6,24,2.79,3),(18,7,8,16.49,2),(19,7,11,12.42,1),(20,7,4,13.99,2),(21,7,3,2.63,2),(22,7,7,25.47,2);
/*!40000 ALTER TABLE `itempedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `Id_Pedido` int NOT NULL AUTO_INCREMENT,
  `Id_Cli` int NOT NULL,
  `Data_Pedido` date DEFAULT NULL,
  `FormaPagamento` varchar(30) NOT NULL,
  `Status_pedido` int NOT NULL,
  `Data_Cancelamento` date DEFAULT NULL,
  `Motivo_Cancelamento` varchar(200) DEFAULT NULL,
  `Observacao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id_Pedido`),
  KEY `Id_Cli` (`Id_Cli`),
  CONSTRAINT `Pedido_ibfk_1` FOREIGN KEY (`Id_Cli`) REFERENCES `cliente` (`Id_Cli`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,1,'2022-05-23','Cartão',2,NULL,NULL,'cachorro bravo'),(2,1,'2022-06-01','Pix',3,'2022-06-01','rua fechada',''),(3,2,'2022-06-15','Pix',2,NULL,NULL,'2ª Campainha'),(4,2,'2022-06-15','Dinheiro',1,NULL,NULL,' '),(5,2,'2022-06-15','Pix',3,'2022-06-15','Cliente não quer mais os produtos.',' '),(6,3,'2022-06-15','Dinheiro',3,'2022-06-15','falta de morador na residência\n',' '),(7,3,'2022-06-15','Cartão',2,NULL,NULL,'nenhuma');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `Id_Produto` int NOT NULL AUTO_INCREMENT,
  `Id_Categoria` int NOT NULL,
  `Nome_Produto` varchar(30) NOT NULL,
  `Descricao` varchar(50) DEFAULT NULL,
  `Valor` decimal(6,2) NOT NULL,
  `Status_Produto` int NOT NULL,
  `Em_Oferta` int NOT NULL,
  `Link_Imagem_Produto` varchar(255) DEFAULT NULL,
  `Em_Estoque` int NOT NULL,
  PRIMARY KEY (`Id_Produto`),
  KEY `Id_Categoria` (`Id_Categoria`),
  CONSTRAINT `Produto_ibfk_1` FOREIGN KEY (`Id_Categoria`) REFERENCES `categoria` (`Id_Categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,2,'Chocolate Ovomaltine','87g',4.99,1,1,'https://images-americanas.b2w.io/produtos/50983211/imagens/tablete-de-chocolate-ao-leite-com-ovomaltine-87g-hersheys/50983209_1_large.jpg',1),(2,3,'Cheetos Requeijão','45g',2.99,1,0,'https://http2.mlstatic.com/D_NQ_NP_2X_742710-MLA45772062587_042021-V.webp',1),(3,4,'Coca-Cola Lata','350ml',2.63,1,1,'https://mfresh.s3.amazonaws.com/uploads/product/sku/3222/image/d8e7fdde-33a7-4835-b20c-d95bdbe3dcc2.png',1),(4,5,'Pizza Vegana Seara','380g',13.99,1,1,'https://www.seara.com.br/media/uploads/posts/41f6ab8c2eb6e3e59eb40491644deaa2.png',1),(5,6,'Arroz Branco Camil','1kg',9.19,1,0,'https://http2.mlstatic.com/D_Q_NP_665136-MLA46806282233_072021-O.webp',1),(6,7,'Pão de Forma Pullman','480g',4.99,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/169471/530/7896002360326_2.jpg',1),(7,8,'Coxão Duro','500g',25.47,1,1,'https://www.sondadelivery.com.br/img.aspx/sku/1457675/530/1457675.jpg',1),(8,9,'Papel Higiênico','12un',16.49,1,1,'https://www.sondadelivery.com.br/img.aspx/sku/1697099/530/1000033614.jpg',1),(9,10,'Detergente Limpol','500ml',2.41,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/19127/530/7891022640007-(1).jpg',1),(10,11,'Maçãs Gala','4un',11.34,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1515721/530/NovoProjeto-90-.jpg',1),(11,2,'Bombons Lacta','250g',12.42,1,1,'https://www.sondadelivery.com.br/img.aspx/sku/1653652/530/7622210596413_99_6_1200_72_RGB.jpg',1),(12,2,'KitKat ','41,5g',3.51,1,1,'https://www.sondadelivery.com.br/img.aspx/sku/1592670/530/7891000248768-(1).jpg',1),(13,2,'KitKat Branco','41,5g',3.51,1,1,'https://www.sondadelivery.com.br/img.aspx/sku/1592963/530/7891000249239-(1).jpg',1),(14,2,'Bis Xtra','45g',3.39,1,0,'https://images-americanas.b2w.io/produtos/01/00/img/89818/4/89818428_1GG.jpg',1),(15,2,'Bis Xtra Oreo','45g',3.39,1,0,'https://images-americanas.b2w.io/produtos/01/00/img/1560691/0/1560691057_1GG.jpg',1),(16,2,'Barra Nestle Classic','90g',6.99,1,0,'https://images-americanas.b2w.io/produtos/01/00/img/104978/2/104978297_1GG.jpg',1),(17,2,'Doce De Leite','200g',21.15,1,1,'https://images-americanas.b2w.io/produtos/3529892310/imagens/doce-de-leite-pedaco-200-gr-portao-de-cambui/3529892310_1_large.jpg',1),(18,2,'Bala Yogurte','150g',3.95,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/929328/270/929328.jpg',1),(19,2,'Fini Tubes Morango','80g',6.92,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1135139/270/1000004970.jpg',1),(20,2,'Bala de Goma','200g',5.27,1,1,'https://www.sondadelivery.com.br/img.aspx/sku/741591/270/7896058502404.jpg',1),(21,2,'Fini Minhoca','100g',6.92,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/450863/270/450863.jpg',1),(22,3,'Torradas Bauducco','142g',3.75,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1657259/270/7891962053189-(1).jpg',1),(23,3,'Bolacha Sal Bauducco','200g',3.29,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/347698/270/7891962014982-(1).jpg',1),(24,3,'Panettone Salgado','400g',2.79,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1000039232/270/7891962064857.jpg',1),(25,4,'Pepsi Lata','350ml',2.49,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/706612/270/7892840800079-(1).jpg',1),(26,4,'Água de coco','330ml',3.80,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1589482/270/1589482.jpg',1),(27,5,'Salsicha Vegetal','300g',20.67,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/3191/270/3191.jpg',1),(28,5,'Carne Vegetal','400g',17.59,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/12718/270/12718.jpg',1),(29,6,'Grão de bico','500g',9.79,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1626388/270/1626388.jpg',1),(30,6,'Feijão Carioca Camil','1Kg',10.98,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/21776/270/7896006744115-(1).jpg',1),(31,7,'Ana Maria Chocolate','70g',4.46,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/473294/270/7896002362436_0.jpg',1),(32,7,'Bisnaguinhas Panco','300g',8.46,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/172979/270/1000009061.jpg',1),(33,8,'Bacon Fatias','250g',17.11,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/155349/270/155349.jpg',1),(34,8,'Carne Moída','500g',17.49,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1000036484/270/1000036484.jpg',1),(35,9,'Creme Dental','90g',3.61,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/109380/270/1093807.jpg',1),(36,9,'Escovas de Dente','2Un',14.14,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1575350/270/7702010631207_6.jpg',1),(37,10,'Água Sanitária','1L',4.39,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/412023/270/Sem-Titulo-1.jpg',1),(38,10,'Sabão em Pó Omo','800g',11.49,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/1660624/270/7891150064317-(2).jpg',1),(39,11,'Abacate','550g',6.04,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/525561/270/525561.jpg',1),(40,11,'Abacaxi','1Un',5.80,1,0,'https://www.sondadelivery.com.br/img.aspx/sku/201065/270/AbacaxiPerolaUnidade.jpg',1);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-15 20:42:42
