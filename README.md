# 👕Front-End Store

**Front-End Store** es una aplicación compuesta por un **backend en Java Spring Boot (REST API + MySQL)** y un **frontend en JavaScript puro** que gestiona una pequeña tienda de camisetas.  
Los usuarios pueden **navegar por los productos**, **ver detalles** y **gestionar un carrito de compra**, con persistencia en el navegador.  

---

## 🚀 Tecnologías utilizadas 
* **Java 17**  
* **Spring Boot 3**  
* **Spring MVC** (REST API)  
* **Spring Data JPA**  
* **CORS** (para consumo desde el frontend)  
* **MySQL** (con 14 camisetas precargadas)  
* **Maven**  
* **HTML5, CSS3, JavaScript** (Fetch API)
  
---

## ⚙️ Instalación y configuración  

```bash
# Clone repository
git clone https://github.com/juliandsv/Front-End-Store.git
cd Front-End-Store/store-api
```
---

## Confifurar la base de datos:

# src/main/resources/application-example.properties → application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/front_end_store?useSSL=false&serverTimezone=UTC
spring.datasource.username=YOUR_USER
spring.datasource.password=YOUR_PASSWORD

---

## Importar la base de datos:

mysql -u YOUR_USER -p -e "CREATE DATABASE IF NOT EXISTS front_end_store CHARACTER SET utf8mb4;"
mysql -u YOUR_USER -p front_end_store < db/camisetas_seed.sql

---

## Ejecutar backend:

mvn spring-boot:run

---

## Abrir frontend:
Just open the FrontEnd/index.html file in your browser (recommended with Live Server extension in VS Code).

---

## ✨ Funcionalidades

* 🛍️ **REST API** para la gestión de productos (14 camisetas precargadas)  
* 📖 **Frontend en JavaScript** con listado de productos, detalle y carrito  
* 🛒 **Carrito de compra** almacenado en `localStorage` del navegador  
* 🔄 **CORS habilitado** para la comunicación entre API ↔ Frontend  
* 🎨 **Diseño responsive** adaptado a escritorio y móvil
  
---
## Screenshots

- **Home / Product list**  
  ![Listado](listado.png)

- **Product detail**  
  ![Detalle](detalle.png)

- **Shopping cart**  
  ![Carrito](carrito.png)
