![image](http://www.plantuml.com/plantuml/png/ZLDDKnf14BtpApfSWbKebQgSSbA1KXC4IjQoSjfgPZeurkpCPZvKaigFoG_8ARTS-MFfMLPWrHWv3M-cttlTh_VG1tGX5hhrHXcXeoIu3g7q7tezXtS72nMkupnwSiAQG2OS25lqIeqcrUpx8BMQz_hlzwS9kZmVzGhqWHn3UPyhK1bo1sNYVmlHS771912k2RvOhUsTCWlG_0ZGI6XSA-VvP875GLk1MY-PO-FogG3VZeu-JowpF9jCyy7aQjpPss97itpsQPZrJncieQkpx3GV3K-6um63hQ229XWeN3Wi4996rJD9w_YV1g-ujVKDnZGC9L2erM-J42KJ856sMbDotfgEY3xOWbmNsfS-ebEslJq2RZbSczLdoqIU7zje9BfbHxpZnwzJRE_1znRmRpEGZYTtgzXtxaWgpqop6aY55PQyVCHRd0cdoj25uNtfo5VmYAWBvFbYJh04qgfGXarWi3xLQuGvUkBZ6cFxJNKirO9vZae59nZe3fSlg4sZ2JPnSJSE9TOAMEfDiryZGO66RXW6pIPiSDQdTIcjuJ9wQg50fVCq1NAFkY_8UBmXj_g5BxWQcbj-0AJ1HCxGDWOEwDN2eBI06c8TQCdqmZf7zh6PmRmZCM2Q6JCFwcDIkKX9m2vomcIoQhAUDteh54lvklLQhkwuzMEpESFxi8sTxWCvOvdm0Qf6lVgvI4bQg52XR3NQ69HMtn3-j-ArD2kdtmNfP_Hsek-ZrjM4PvDnxpJBfZEkJ5NhDus46WNebqPquHzrpTL-NMa-QYx4pgV9GIjyDkITGDCAdMVJDkmr-wuzFAGBzSSpN7yxtMEknbIyTZMsp5z5tgvvjZwUIUxC16Tb50I2PSW8XPeyM32hFq_SCkCX6HaB_HS0)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' uncomment the following line and comment the first to use locally
' !include C4_Container.puml

' LAYOUT_TOP_DOWN()
' LAYOUT_AS_SKETCH()
LAYOUT_WITH_LEGEND()

title Diagrama de Contenedor del sistema de autenticación de identidad

Person(customer, "Usuario", "Usuario a autenticar")

System_Boundary(c1, "sistema de autenticación de identidad") {
    Container(servidor_redis, "Servidor de redis", "JavaScript, Express", "Lee, escribe y elimina datos de la base de datos")
    Container(apig, "Api Gateway", "JavaScript, Express", "Punto de entrada de la aplicación que maneja a los otros componentes")
    Container(mail_server, "Servidor de mensajería", "JavaScript, Express", "Envía el numero de identidad asignado al usuario por correo")
    ContainerDb(database, "Database", "Redis Database", "Guarda los datos asociados a los usuarios")
   
}

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")




Rel(servidor_externo, apig, "Api Call", "JSON/HTTPS")
Rel(apig, mail_server, "Api Call", "async, JSON/HTTPS")
Rel(apig, servidor_redis, "Api Call", "async, JSON/HTTPS")
Rel_L(mail_server, customer, "Envia numero de identidad por correo", "SMTP" )

Rel(servidor_redis,database , "Lee,Escribe,Borra", "sync, Node Redis")

Rel(customer, servidor_externo, "Introduce credenciales o número de identidad")
@enduml
```

[back](./../../Diagramas.md)