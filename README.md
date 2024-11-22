# demo-tienda
 Uso de React, spring boot para la conexion SQL Server

![DEPENDENCIAS_SpringBoot](https://github.com/user-attachments/assets/2193d645-f211-40d8-a724-80e482710b74)


archivo base conexion SQL Server, version 2022.
=======================================================================================================================
spring.datasource.url=jdbc:sqlserver://;serverName=localhost;databaseName=rrhh_db;encrypt=true;trustServerCertificate=true;
spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
spring.datasource.username=sa
spring.datasource.password=dariohakuna2#
spring.jpa.hibernate.dialect=org.hibernate.dialect.SQLServerDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
=======================================================================================================================

# Modelo-fisico-BD-demo-tienda
![image](https://github.com/user-attachments/assets/df067516-3b02-46bf-856e-103dc5670289)

# Como modelado son 5 tablas, para hacer la correlación, se crea cada modelo, con el respectivo nombre de tablas, empezando con el modelo Categoria -->igual al tabla Categoria, pero otro asunto es, que en el SQL Server 2022, se hace unos cambios a nivel de query, lo primero crea la base datos, creo la tabla, verán que el identificador IdCategoria, no esta, para que funcione cuando ejecuto el proyecto spring, hare cambios a la tabla, pero si lo hago de la otra forma, no podre hacer cambios al tabla, una vez creada, por eso dejo la documentación.

Paso # 1
![Crear-base de datos](https://github.com/user-attachments/assets/edaccace-4785-49cd-918e-cb6c347ac6df)

Paso # 2 - Crear-Tabla Categoria
![Crear-Tabla Categoria](https://github.com/user-attachments/assets/4f5e3607-3d5a-4d3a-80ed-54f1c5772804)

Paso # 3 Modo-Diseño
Es decir, revisamos que los columnas, no aceptan nulos, pero cuando ejecutamos el proyecto veran, que nos arrojan otros cambios
![Modo-Diseño](https://github.com/user-attachments/assets/58f09159-df3a-4d22-8bb1-309f466a6396)

Paso # 4
Escribir codigo java, para ver los cambios en la base de datos, a demas despues de escribir codigo, tenemos que hacer una Llave primaria, para esta tabla categoria.




