-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: kitchening22_migrate
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Fitz Roy 1819','Palermo','CABA','2024-02-19 13:35:18','2024-02-19 16:47:06'),(2,'Cavia 2985','Palermo','CABA','2024-02-19 13:35:18','2024-02-19 16:46:35'),(3,'Av. Pueyrredón 1508','Recoleta','CABA','2024-02-19 13:35:18','2024-02-19 16:46:19'),(4,'Jorge Luis Borges 1766','Palermo','CABA','2024-02-19 13:35:18','2024-02-19 16:45:12'),(5,'Av. Alicia Moreau de Justo 1160','Puerto Madero','CABA','2024-02-19 13:35:18','2024-02-19 16:44:21'),(6,'Av. Alicia Moreau de Justo 1082','Puerto Madero','CABA','2024-02-19 13:35:18','2024-02-19 18:05:46'),(7,'Vera 1402','Chararita','CABA','2024-02-19 13:35:18','2024-02-19 18:11:42'),(8,'Av. Alicia Moreau de Justo 1768','Puerto Madero','CABA','2024-02-19 13:35:18','2024-02-19 18:13:14'),(9,'Libertad 1161','Retiro','CABA','2024-02-19 13:35:18','2024-02-19 18:15:38'),(10,'Bolívar 866','San Telmo','CABA','2024-02-19 13:35:18','2024-02-19 18:17:12'),(11,'Rodríguez Peña 682','San Nicolás','CABA','2024-02-19 13:35:18','2024-02-19 18:18:27'),(12,'Vicente López 1661','Recoleta','CABA','2024-02-19 18:24:44','2024-02-19 18:24:44');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Barato',NULL,'2024-02-19 13:35:18','2024-02-19 13:35:18'),(2,'Romántico',NULL,'2024-02-19 13:35:18','2024-02-19 13:35:18'),(3,'Sofisticado',NULL,'2024-02-19 13:35:18','2024-02-19 13:35:18');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `methods`
--

LOCK TABLES `methods` WRITE;
/*!40000 ALTER TABLE `methods` DISABLE KEYS */;
INSERT INTO `methods` VALUES (1,'Efectivo','2024-02-19 13:35:18','2024-02-19 13:35:18'),(2,'Tarjeta de Débito','2024-02-19 13:35:18','2024-02-19 13:35:18'),(3,'Tarjeta de Crédito','2024-02-19 13:35:18','2024-02-19 13:35:18'),(4,'Mercado Pago','2024-02-19 13:35:18','2024-02-19 13:35:18');
/*!40000 ALTER TABLE `methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Crizia','Situada en el bullicioso Palermo Soho, Crizia tiene la iluminación indirecta perfecta para una cena romántica y para charlar. Decorado con cuadros y cortinas oscuras que bajan del techo, el lugar es muy bonito, pero sin nada rebuscado: hay una cierta sencillez que lo hace aún más interesante.',1000,'1708361226266_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.827683108756!2d-58.4376879235045!3d-34.58322645641759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58df9f238f5%3A0x396351156c8cec0d!2sFitz%20Roy%201819%2C%20C1414CIA%20CABA!5e0!3m2!1ses-419!2sar!4v1701784206550!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',2,1,'2024-02-19 13:35:18','2024-02-19 16:47:06'),(2,'Casa Cavia','Comer o cenar en Casa Cavia no sólo será romántico, sino también una salida poco habitual. El establecimiento es en realidad un espacio sofisticado y multiuso que reúne comedores, bar, florería y librería en un solo lugar.',1000,'1708361195553_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0535419090493!2d-58.40970122350464!3d-34.57751175611591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57b205ebe4d%3A0x62652ee3d14d93db!2sCavia%202985%2C%20C1425DDA%20CABA!5e0!3m2!1ses-419!2sar!4v1701784446669!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',2,2,'2024-02-19 13:35:18','2024-02-19 16:46:35'),(3,'La Cocina','La Cocina puede considerarse un lugar simple con clase. Tan sencillo como agradable, este establecimiento ofrece sabrosas empanadas, vinos y cervezas a precios muy razonables.',1000,'1708361179143_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.438239360364!2d-58.40458472350383!3d-34.59307825693771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9a76a96b6d%3A0x68d7ae7589a26b86!2sAv.%20Pueyrred%C3%B3n%201508%2C%20C1118AAS%20CABA!5e0!3m2!1ses-419!2sar!4v1701785211114!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',1,3,'2024-02-19 13:35:18','2024-02-19 16:46:19'),(4,'Burger Joint','En el género de la comida rápida, la hamburguesa es un patrimonio universal. En casi todas las ciudades del mundo, habrá un puesto o incluso un modesto carrito que venda este manjar. Así que, si quieres llenar tu estómago con buena comida en Buenos Aires, ve a Burguer Joint.',1000,'1708361112774_products.jpeg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6560746589644!2d-58.43120012339924!3d-34.587567956646836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58620c53559%3A0xefc3273ec01573a8!2sJorge%20Luis%20Borges%201766%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708350886064!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',1,4,'2024-02-19 13:35:18','2024-02-19 16:45:12'),(5,'Chila','Chila atrae sobre todo al público que aprecia la gastronomía de alto nivel y todos los tonos sofisticados que pasan por la decoración del entorno, el ambiente y el servicio. Centrado en la cocina contemporánea, el restaurante ofrece un menú de degustación y a la carta, así como un brunch los domingos.',1000,'1708361061669_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.727049914261!2d-58.36866222505016!3d-34.61106295788479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352a27df5005%3A0x88c822ff29bc69ad!2sAv.%20Alicia%20Moreau%20de%20Justo%201160%2C%20C1107%20Puerto%20Madero%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708360839214!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',3,5,'2024-02-19 13:35:18','2024-02-19 16:44:21'),(6,'Puerto Cristal','Puerto Cristal es un restaurante sofisticado y clásico situado a orillas del río. Además de los mejores platos internacionales, el lugar cuenta con una terraza, una fantástica vista y un excelente servicio.',1000,'1708365946644_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7631891941746!2d-58.36868952488433!3d-34.61014925783678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352bd4398579%3A0x676f636effee4329!2sAv.%20Alicia%20Moreau%20de%20Justo%201082%2C%20C1107AAT%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708365858577!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',3,6,'2024-02-19 13:35:18','2024-02-19 18:05:46'),(7,'Toro 777','La decoración de estilo vintage, el ambiente oscuro y, por supuesto, los deliciosos platos disponibles, hacen de Toro 777 una atracción gastronómica destacada en la capital argentina. ¿Qué te parece probar la carne de cerdo con manteca de maní con un vino recomendado por el chef?',1000,'1708366302469_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.513472922418!2d-58.44784902488549!3d-34.591175256834845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f405e0c751%3A0x77ba6e1cb0427916!2sVera%201402%2C%20C1414%20APD%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708366259423!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',2,7,'2024-02-19 13:35:18','2024-02-19 18:11:42'),(8,'Cucina D’Onore','Se puede disfrutar de excelentes ejemplos de cocina italiana en otro espectacular restaurante de Buenos Aires. Cucina D’Onore es uno de esos lugares perfectos: camareros atentos, recetas exquisitas y un ambiente adecuado para el más memorable de los encuentros románticos.',1000,'1708366394331_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4022849833295!2d-58.36793872488388!3d-34.619272958318746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d167d3c50b%3A0xec8071045f2c70c7!2sAv.%20Alicia%20Moreau%20de%20Justo%201768%2C%20C1107%20AFJ%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708366341411!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',2,8,'2024-02-19 13:35:18','2024-02-19 18:13:14'),(9,'Gran Bar Danzón','El ambiente acogedor y la penumbra son el marco perfecto para una cena especial para dos. Tú y tu ser querido serán bien atendidos por los camareros y seguro que querrán comer de nuevo. ¿Quieres apostar?',1000,'1708366538466_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3664521654578!2d-58.38890582438135!3d-34.59489399724808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab9c6dd980f%3A0x20cf589b4c3a6530!2sLibertad%201161%2C%20C1012AAW%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708366458851!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',2,9,'2024-02-19 13:35:18','2024-02-19 18:15:38'),(10,'El Banco Rojo','Una mezcla de pub y casa de comidas. Así podemos definir a El Banco Rojo, otro lugar recomendado para comer barato en la tierra del tango, cuyo espacio es súper acogedor y la calidad de los sabores es digna de mención.',1000,'1708366632050_products.png',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4555652953!2d-58.375579224883936!3d-34.617926158247656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2b22ee7f09%3A0xbac3e0484b8f684f!2sBol%C3%ADvar%20866%2C%20C1066%20San%20Telmo%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708366601366!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',1,10,'2024-02-19 13:35:18','2024-02-19 18:17:12'),(11,'Parrilla Peña','Degusta verduras, empanadas, carne y otras sorpresas en Parrilla Peña, un restaurante súper acogedor que representa a Buenos Aires en términos de tradición.\r\n\r\nNo tengas dudas, recibirás un trato de primera en este sencillo y pequeño rincón.',1000,'1708366707323_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1236740225227!2d-58.39421052488484!3d-34.60103405735541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac0881eaaab%3A0xe9e824bf60e9c1e5!2sRodr%C3%ADguez%20Pe%C3%B1a%20682%2C%20C1020%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708366662739!5m2!1ses-419!2sar','(011)3401-6800',100,'resto@gmail.com',1,11,'2024-02-19 13:35:18','2024-02-19 18:18:27'),(12,'Aramburu','Nombrado ya como uno de los 30 mejores restaurantes de América Latina, Aramburu es un pequeño y discreto bistró cuyo estilo combina perfectamente lo rústico y lo sofisticado.\r\n\r\nHay variados menús de degustación que cubren diferentes platos como mandioca a la parrilla con salsa de miso, langostinos a la piedra con salsa picante oriental, entre otros. Date un capricho a tí mismo o a un ser querido y haz una reserva en este lugar.',1000,'1708367084911_products.jpg',NULL,'','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.486072195423!2d-58.3918910248854!3d-34.59186835687136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabc84e4d433%3A0xba7be22e4254d783!2sVicente%20L%C3%B3pez%201661%2C%20C1018%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708367024055!5m2!1ses-419!2sar','1231231',15,'resto@gmail.com',3,12,'2024-02-19 18:24:44','2024-02-19 18:24:44');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2024-02-19 13:35:18','2024-02-19 13:35:18'),(2,'User','2024-02-19 13:35:18','2024-02-19 13:35:18');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240209124648-create-category.js'),('20240209125119-create-address.js'),('20240209125120-create-restaurant.js'),('20240209130549-create-image.js'),('20240209130759-create-role.js'),('20240209130900-create-user.js'),('20240209131102-create-review.js'),('20240209131249-create-booking.js'),('20240209131445-create-method.js'),('20240209131453-create-status.js'),('20240209131546-create-payment.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'Pendiente','2024-02-19 13:35:18','2024-02-19 13:35:18'),(2,'Aprobado','2024-02-19 13:35:18','2024-02-19 13:35:18'),(3,'Rechazado','2024-02-19 13:35:18','2024-02-19 13:35:18'),(4,'Anulado','2024-02-19 13:35:18','2024-02-19 13:35:18');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Kitchening','admin@gmail.com','$2a$10$qexF4H1ZUiLdBQre05/IROt0s0SbhMQ4o2rTEbabOEaWbwmkU6Axm',NULL,NULL,NULL,1,'2024-02-19 13:35:18','2024-02-19 13:35:18'),(2,'User','Kitchening','user@gmail.com','$2a$10$6rZhTPMahGRQcCb3H39Ej.w2aFEGdrlndepDWPN.hrAm7fSl11vx.',NULL,NULL,NULL,2,'2024-02-19 13:35:18','2024-02-19 13:35:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-19 15:33:38
