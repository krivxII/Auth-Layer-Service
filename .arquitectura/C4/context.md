![image](http://www.plantuml.com/plantuml/png/ZP3DRXD13CVl-nHcBoHIcrmuSIgq4QsKbgX9X3Yjd5btOp4x3fwPjELjU0PklUR5y8Q69X0aRbxl-FV_E8i9DUNM5wyuE9zhWcLAg_XsE5Iy7pISbdcH8wcJa2YaWPDskF8OkflJc6hFY-7vczD9jvfVZuSjnaHgg-gyktX8WrL7Vmqvs6bh24XBWZlnNkuvDE0v462euU0tQxH9mAJ1YqFl7utns-EV-6ByxlF7-QpwT3MxhCQZ3wERYrw_A18dJt31s2Ys27RuV2KsUvYoUVsrnzobOuUEDpy2h4JDZof9KKn8euIUop59Ite2vJncL9RoPGHy8MZPBwQF7RbdksKLjxEz_H-vZcc2BIS2ZE8OrPg3l9FfFiBcoNnq4O3h3bDZ3Pkdm4vC-bcx6ZsaNYHTSorQMMJI80RVhRP2c-yD1mI1xTQPmDTCa1Dx_eP07k8_BTUqCzLf5hVagnlYPhaGxS5URZY1NNCsbgEmPeIG_mvmsC7qUZOfeR_blaVtvKYKVUnLI2frTWHEoP3McwS8ShIhSeizGZomNTvIO-aLz_iNM9FodRK07lVCr-IXvTXAQOUNC_FUByuerBdrFm40)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
' uncomment the following line and comment the first to use locally
' !include C4_Context.puml

LAYOUT_WITH_LEGEND()

title Diagrama de Contexto del Sistema de autenticación por correo

Person(customer, "Usuario", "Usuario a autenticar")
System(auth_system, "Sistema de autenticación por correo", "Permite asociar un usuario a un número de identidad único")

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")


Rel_Neighbor( auth_system , customer , "Envia numero de identidad por correo", "SMTP" )
Rel_Back(servidor_externo, customer , "Introduce credenciales o número de identidad")
Rel(servidor_externo, auth_system ,"Registra un usuario o verifica la identidad del mismo" ,"HTTP")
@enduml

```

[back](./../../Diagramas.md)