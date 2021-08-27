![image](http://www.plantuml.com/plantuml/png/VP11Jnj138Nl-olSlJH8G2uzzKIXKOiKQ0I9gfvMpgpPMCoEKyzC2F--dcqWIHNrvdqxxtlFlee9DUNULnyuE9zRWbLAw_XvF5PykUmuhV8oHr8d8L58bqxwyTfZA9wBc5hFo_7DfujPaHPtqt6FCP6QrDmKnpPThWlz8-HWrjuGa5O4J-Azl73em7CWmD32qM_MQ9E0HOCNXzw_6kEzux_uQlhbru_5lFbvE__UJ2VV9lTVHsTLbJXvWiTNgzJ3pW0jOwVOMmM5MvCqK89h3C_MPlUsgcQaKSB8vPYa9ps7UX4pAakz7m41SpaAEzJwhFhh7PcsQk8mszl8PK1eQV_OiOGYS5k-MsmBr19xJWGOnJ4gv03vFSS-GhOUScGpcPrOyYwwcMpJA99kk1LjQ5js4qE_IKCCTXmG10RH6Vrt9iY9FKS4yl2_mhj29R5w8D_S4tUhfUW83fQ6StWx6rZW96mOJxPVYu8JLHgE-dWtdzLmDd2lqJsVMEGGUnkIIfiTWLCof6Fq545E9TK3zGJmg7NzG1t7f7XuUe4DAJ-nG_2u9nhUGy-nbrBvYaARU_y7)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
' uncomment the following line and comment the first to use locally
' !include C4_Context.puml

LAYOUT_WITH_LEGEND()

title System Context diagram for Internet Banking System

Person(customer, "Usuario", "Usuario a autenticar")
System(auth_system, "sistema de autenticación de identidad", "Permite asociar un usuario a un número de identidad único")

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")


Rel_Neighbor( auth_system , customer , "Envia numero de identidad por correo", "SMTP" )
Rel_Back(servidor_externo, customer , "Introduce credenciales o número de identidad")
Rel(servidor_externo, auth_system ,"Registra un usuario o verifica la identidad del mismo" )
@enduml

```

[back](./../../Diagramas.md)