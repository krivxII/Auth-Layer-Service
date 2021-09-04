![image](http://www.plantuml.com/plantuml/png/ZLDDJXjD4Dtx5FNDvhCbWnKfgwm0smA2mLPiXB8QbRihfb5FzQH_02UAb3la13b0Ljbbwvla9Ecs1my3Hc9MFQ_hLRrwR-R0URG-5BhrdsAXWoIuzhvqxtezYtVx2-MlmpmuiiAm9_RxmXIzKYCdpfxpKgjvh_zsRvAWo_DHhq3doKOexqS6AYQxNwR-_qFWI2w8FVXhWaz6QtEdU04w5W6oXCQriYwU3CJXe8r0hPUnnrRbym7nTdJuSNmvosVZIJuONrsqEpLsECsdPyDP_oI25NHrEZl9HyFZuSKWWYsll2OOA5nOB13IZFNE98sDRngcoddQt618PYY1Ggr-CvInGXXhoRHQ4xBES3wyzsqHd3S5sIvabowWLIQhZu1r5vl5-QtfClNFZqnWYNRP5czYzMk6PXtuseBuR1rfExAtAWhFBKdbKfyAI8tMMFOOlA9vUXyHTO6Si6fEi0JIgb0SPwCtBX4rmXmTfMF2Ob-FnLmHmuAOB8AETHmAifjw9PDWYH82Ax7114g4KDdHUI8RIxM8EWvB1SVewGwNksHE0dkJUX5xYn8hQLZghJcV0q61J3S86rN69qt25ANXI2FtR7Q1IkV9Dx9F_2g87TwGNVt2NNA6V1jlW7IrUdDpT6h1A0sWVbYx4LrJnM3UbkWnkHmx3wfZritEQFdt-uzRr87WeM93RdtRVZh3UrydJ_UUB9j7WjVUhNukKgO6reL2cRLNmIkjlgoNS2zzSGcfWqlF1z8xvZqAiOzQfwdlf-EBtibiDfb6Pc9jQXgMDmZebYowy0Al-NM_ZfgFcWdNFsSAKE7EyEgWri6VpoOPTAgzcneUCe7gDnfk_gBkKMHZrgr8zT0TCPsojqO6GI1YJsAXK9C30xpwyqnQNEg0M8P2_mC0)

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
    Container(servidor_redis, "Servidor de redis", "Servidor Web", "Lee, escribe y elimina datos de la base de datos, tambien genera los numeros de identidad unicos de cada usuario")
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

Rel(customer, servidor_externo, "Introduce credenciales o número de identidad")
@enduml
```

[back](./../../Diagramas.md)