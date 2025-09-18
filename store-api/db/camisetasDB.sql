-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: front_end_store
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `camiseta`
--

DROP TABLE IF EXISTS `camiseta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camiseta` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(1000) DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camiseta`
--

LOCK TABLES `camiseta` WRITE;
/*!40000 ALTER TABLE `camiseta` DISABLE KEYS */;
INSERT INTO `camiseta` VALUES (1,'Lleva tu amor por VueJS al siguiente nivel con esta camiseta de diseño moderno y cómodo. Hecha de algodón de alta calidad, esta prenda es ideal para los desarrolladores que aman construir interfaces de usuario interactivas y dinámicas. Con un gráfico elegante que resalta el logotipo de VueJS, es perfecta tanto para el día a día como para tus sesiones de codificación. ¡Haz saber al mundo que eres parte de la comunidad de VueJS con estilo y confort!\n\nDisponible en varios tamaños y colores, esta camiseta te permitirá expresar tu pasión por el desarrollo web mientras te mantienes cómodo y a la moda. ¡Atrévete a mostrar tu amor por la programación con VueJS!','img/1.jpg','VueJs',30),(2,' La prenda perfecta para los desarrolladores que dominan el framework que revolucionó la forma de construir aplicaciones web dinámicas. Con un diseño limpio y moderno, esta camiseta destaca el poder de AngularJS, el framework que facilita la creación de interfaces de usuario ricas y interactivas. Con una comodidad inigualable, esta camiseta te acompañará mientras exploras el mundo del desarrollo front-end con Angular, haciendo tu día a día como programador aún más agradable. ¡Luce tu pasión por el desarrollo web y tu amor por AngularJS!','img/2.jpg','AngularJs',30),(3,' ¡Hazte notar con esta camiseta de ReactJS! Ideal para todos los desarrolladores que aman crear interfaces de usuario interactivas. Con el logo de React impreso en la parte frontal, esta camiseta es perfecta para llevar la esencia de la tecnología más popular para construir aplicaciones web. Hecha con materiales suaves y transpirables, te mantendrás cómodo mientras programas sin parar. Ya sea que estés trabajando en tu última app o participando en un meetup de React, ¡esta camiseta será tu compañera ideal!','img/3.jpg','ReactJs',30),(4,' ¡Haz tu flujo de datos más claro con esta camiseta de Redux! Si eres un apasionado de la gestión de estado predecible, esta camiseta te permite mostrar tu preferencia por uno de los patrones más poderosos de JavaScript. Con el logo de Redux en la parte frontal, es perfecta para los desarrolladores que aman crear aplicaciones escalables y mantenibles. Con un diseño cómodo y un estilo minimalista, es ideal tanto para el día a día como para los eventos de tecnología.','img/4.jpg','Redux',30),(5,' ¿Eres un fanático de JavaScript y un apasionado del desarrollo web? ¡Esta camiseta es para ti! Con un diseño moderno y fresco, nuestra camiseta de Node.js es el regalo perfecto para cualquier desarrollador que quiera llevar su pasión por el backend con orgullo. Fabricada con materiales de alta calidad, esta camiseta es cómoda, transpirable y ideal para cualquier ocasión, desde tu día de trabajo hasta tus sesiones de codificación en casa.','img/5.jpg','NodeJS',30),(6,' ¿Eres un amante del diseño y la eficiencia en CSS? ¡Esta camiseta es para ti! Con el logo de SASS, uno de los preprocesadores más populares del mundo del desarrollo web, esta camiseta es el toque perfecto para mostrar tu pasión por el código limpio y organizado. Hecha con materiales de alta calidad, te brinda comodidad durante largas horas de trabajo, ya sea en tu escritorio o en tu tiempo libre.','img/6.jpg','Sass',30),(7,'¿Te apasiona construir la base de la web? ¡Esta camiseta es para ti! Con el logo de HTML5, el pilar fundamental de todo desarrollador web, esta camiseta es la forma perfecta de mostrar tu orgullo por el desarrollo frontend. Hecha de materiales suaves y cómodos, es ideal para cualquier ocasión: desde tu jornada de trabajo hasta un día relajado codificando en casa.','img/7.jpg','Html5',30),(8,'Si eres un desarrollador que ama colaborar y compartir código, esta camiseta de GitHub es un must-have para tu armario. Con el icónico logo de GitHub, esta camiseta representa tu pasión por el control de versiones y la comunidad global de código abierto. Ya sea que estés trabajando en tu último proyecto o disfrutando de un día libre, esta camiseta te mantendrá cómodo y a la moda.','img/8.jpg','GitHub',30),(9,'Si eres fanático del diseño web y de crear interfaces fluidas y responsivas, esta camiseta de BulmaCSS es para ti. Con su logo minimalista y elegante, BulmaCSS representa la esencia de un framework CSS moderno, sencillo de usar y altamente personalizable. Esta camiseta es perfecta para cualquier desarrollador web que valore un diseño limpio y eficiente. Confortable y estilosa, es ideal para llevar en cualquier momento, desde el trabajo hasta el tiempo libre.','img/9.jpg','BulmaCSS',30),(10,'¿Te apasiona escribir código robusto y escalable? ¡Entonces esta camiseta de TypeScript es para ti! Con el logo de TypeScript, este lenguaje que mejora la experiencia de desarrollo con JavaScript, podrás mostrar tu amor por el código más seguro y mantenible. Fabricada con materiales de alta calidad, esta camiseta es ideal para los desarrolladores que buscan comodidad mientras trabajan en proyectos de todo tipo, desde aplicaciones web hasta grandes sistemas.','img/10.jpg','TypeScript',30),(11,'Si eres un fanático de la creación de sitios web robustos y escalables, ¡esta camiseta de Drupal es para ti! Con el icónico logo de Drupal, este sistema de gestión de contenido (CMS) te permite construir sitios web complejos con facilidad y flexibilidad. Con esta camiseta, puedes mostrar tu amor por uno de los CMS más poderosos y ampliamente utilizados en el mundo del desarrollo web.','img/11.jpg','Drupal',30),(12,'¿Eres un desarrollador que vive y respira JavaScript? Esta camiseta es para ti. Con el logo de JavaScript, el lenguaje de programación más utilizado en el desarrollo web, puedes mostrar tu pasión por crear aplicaciones interactivas, dinámicas y potentes. Hecha de algodón de alta calidad, esta camiseta es perfecta para cualquier momento, ya sea en la oficina, en casa o mientras disfrutas de tu tiempo libre.','img/12.jpg','Js',30),(13,'Si eres un entusiasta de las APIs y te apasiona optimizar el manejo de datos, ¡esta camiseta de GraphQL es para ti! Con el logo de GraphQL, el lenguaje de consulta que transforma la manera en que interactuamos con los datos, podrás mostrar tu admiración por esta poderosa tecnología. Con un diseño moderno y materiales cómodos, esta camiseta es perfecta para cualquier desarrollador que quiera llevar su amor por las APIs flexibles y eficientes en todo momento.','img/13.jpg','GraphQL',30),(14,'Si eres un amante del desarrollo web y un fan de la facilidad de uso, esta camiseta de WordPress es para ti. Con el logo de WordPress, la plataforma de gestión de contenido más popular del mundo, podrás mostrar tu pasión por crear sitios web potentes y flexibles. Con su diseño moderno y cómodo, esta camiseta es ideal para cualquier desarrollador que trabaje con WordPress, desde blogs hasta sitios complejos.','img/14.jpg','Wordpress',30),(15,'i eres un entusiasta del desarrollo web y valoras la eficiencia en tus proyectos, esta camiseta de Spring Boot es para ti. Con el logo de Spring Boot, el framework de Java más potente para aplicaciones web modernas, podrás mostrar tu dedicación a crear soluciones rápidas y escalables. Con su diseño moderno y cómodo, esta camiseta es perfecta para cualquier desarrollador que use Spring Boot para construir aplicaciones robustas, desde microservicios hasta sistemas empresariales completos. ¡Lleva tu pasión por el desarrollo web a todas partes!','img/15.jpg','Spring Boot',30);
/*!40000 ALTER TABLE `camiseta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-18 17:32:20
