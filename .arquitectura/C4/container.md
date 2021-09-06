![image](http://www.plantuml.com/plantuml/png/ZLHBRXf14DrpYifi0X8sYfHLLhO1sOwnGGRBocfKz5I6jdgw9_snJQ98kKDEa0DabLsst2GdIJM3OJ1OCgkUwdglNhsgviXvj3uKgl56Qg52HZ3pldGVEXsB3uUvzBCm3OwiCDgJzeV259rIeOwO0-Sp9QUTxlk3KGpTN0uw1JfFbaDfbn4eDTd3ClA_XQ0PN309-1d1PwEKUP0w1yL9W3g3hMjf7PyCS75GHg1IS-POgzmjmBU3uq_3cqaw6OxItl3sgjdQn8x7wVYYF-cUSN0LkZsVdAM3_cd_giV1XfTU4VGavXOBX5XZsJDbnlANWh7argeR3D4CAL38nHyD9MS8OosPHcD4rXcTzXzzKmJdJK6s3ScD2sYbIJP7m0sBJRX-OpoF_Ec92Jf3Es-ATvpzcg992xurW7zhHvgExBrauQcbJBh8imf4efAiYBHQI4pgTxSqZTy3eZQG4rPE2UP0IXPIimJqnaMyGfYY8pvMiJPuBAQIDEJ4nH4Kv-d0dLVvCekwCymWQ2cgcC0C8QnSQJrJZwNCMSTnAU4KFJtWV9_CKT3UH2vcjqotaeQbMdlq9H0KgEaEeL9bVDGaJ54QpJ1oExKBb2gDzf5zPbj1sk4TsSNllQxrzJtV0AbLwzkTevEvnim0ggUsDnFSSQ0tRRAp65rcvjxgcBIJ2vh_-_7p7bKWUCgem8tlwmtYtTii03rwijhK12-zM_pAuqmDB1E5D4klWfTAVbqsuLvSl8ngWuk_Qr9xwjM6s4MbOjMFu-5Lvsmo6OqP6L5LphRbTG2wkHPjU06tlUIlWwQ3xGdNtYWFKEBUuTK65Nsyd8mIQ6twhcbucWcidb6_UaNj4qRprbIWz5hci_hVmvvXdMjlJHO4WM3cvLDLvC20NlpT4SYj7P7EGg7-0m00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' uncomment the following line and comment the first to use locally
' !include C4_Container.puml

' LAYOUT_TOP_DOWN()
' LAYOUT_AS_SKETCH()
LAYOUT_WITH_LEGEND()

title Diagrama de Contenedor del Sistema de autenticación por correo

Person_Ext(customer, "Usuario", "Usuario a autenticar")


System_Boundary(c1, "Sistema de autenticación por correo") {
    Container(servidor_redis, "Servidor de percistencia", "Servidor Web", "Lee, escribe y elimina datos de la base de datos, tambien genera los numeros de identidad unicos de cada usuario")
    Container(apig, "Api Gateway", "Servidor Web", "Punto de entrada de la aplicación que maneja a los otros componentes")
    Container(mail_server, "Servidor de mensajería", "Servidor Web", "Envía el numero de identidad asignado al usuario por correo")
    ContainerDb(database, "Database","Key–value database")
   
}

System_Ext(servidor_externo, "Servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")




Rel(servidor_externo, apig, "Api Call", "JSON/HTTPS")
Rel(apig, mail_server, "Api Call", "async, JSON/HTTPS")
Rel(apig, servidor_redis, "Api Call", "async, JSON/HTTPS")
Rel_L(mail_server, customer, "Envia numero de identidad por correo", "SMTP" )

Rel(servidor_redis,database , "Lee,Escribe,Borra",)

Rel_Right(customer, servidor_externo, "Introduce credenciales o número de identidad")
@enduml
```

[back](./../../Diagramas.md)