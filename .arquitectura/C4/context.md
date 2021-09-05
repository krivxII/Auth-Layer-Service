![image](http://www.plantuml.com/plantuml/png/ZP31RjD048RlVeh15nAfRIwSE1NQY5PgIzKaGfoioNhgZ5ZlXDdTjELjU0PklUR569k6910aRkFn_j___tCQ4shAhIzUSN0-rmIBb9RnxMYa-73IS5haUOwaJaAYa4wSjAEbnz1fZcEgFSz7Ps-ERxlLxFfgr69CfBQgpZh5OpfPTlJNa8D9MqD0MX3SY_VomA41pu40GmrxlrcZJG9c3LuSUlzaZDyP_yGNL-y-VvnDgq-NqulgQlnXV7C-61P5ukG9pXaRnHR1X2ygiTd3X2thhptchXqxTBp-4M0fQdbKIOhYbZHAgCQFQU1oJDAI7a4vYncLfToEW5kAbiDYyjJH1xPRLB6VxUt_M7PCCsqv4M0KnwYG0-IDJVSHri-MGpeErnscnXhMpu6TcFMBTvyvagwu5gsiDcaGWszMlT7wUyC1GQ3VEZFucWboOi_V4CX3_6VacZQXEi_YZdnrGzmivg83sEaDHx2vd8tbEAmO8UI_2-pVO78zlIrXs7FVe_joeCekzZ8abJex0gTaICVeAO8Sl5NPOmyGzsANTzHOUyNT-mkiIFcU7OB7BT7m7bgEhPGcl9XQzc5nIg7EhVy9)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
' uncomment the following line and comment the first to use locally
' !include C4_Context.puml

LAYOUT_WITH_LEGEND()

title Diagrama de Contexto del Sistema de autenticación por correo

Person_Ext(customer, "Usuario", "Usuario a autenticar")
System(auth_system, "Sistema de autenticación por correo", "Permite asociar un usuario a un número de identidad único")

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")


Rel_Neighbor( auth_system , customer , "Envia numero de identidad por correo", "SMTP" )
Rel_Back(servidor_externo, customer , "Introduce credenciales o número de identidad")
Rel(servidor_externo, auth_system ,"Registra un usuario o verifica la identidad del mismo" ,"HTTP")
@enduml

```

[back](./../../Diagramas.md)