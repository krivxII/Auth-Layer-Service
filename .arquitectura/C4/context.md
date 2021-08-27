![image](http://www.plantuml.com/plantuml/png/ZPB1JjjS48NtVehvlVaJ2SYcgwve8If8G2D8L7LbJQu7PzJhE-dSUmFqRVeCtR7DYtNi1fAqaThT-DZdEtD6Feq9DUNM5_znS3xN18kKbl7jQAJuSD9mMkHvZgHEGgAGJfoqewN7q7cEOwezpqTdRuuddJIxlXgr61EfITLPvtXC9ykE_Z_aODRM490M1FVYlJnmQC1p8C1GmzvhrcYJW4M35uVUFndZTSVVySNLkyyVPzFgq-NqeheQVnZVd0-6HP4uUO9pnaQnHJ3ZnYKsUuXik_xICNVjsA7ZzO_GALntGerrKKn8euI1op59Ite4vIncL9PoEm9k6LeEYxkdZZqmRL75VhPl_osmerfaoua0epX6XHmWlmRPGrW_soQovuFrSs0d5hv9hyQFQH19LroBLbQRD8Z1NwG-QFszuO0WqAlE0hvcWfpOypU4lrrfirINMToIhsw8cyLST00xpU48NcvdOpaEAqO8-Sy2Ir5meahzPU-kfvCIXZttFRel1whiOYz3Kgcp8t1AXdICdYB8mLkLFVO0SM_jyfOQQw-uUt-15IdViqFmk2NsVrJBiPNIZ1TJstrOd5AeS-j_0W00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
' uncomment the following line and comment the first to use locally
' !include C4_Context.puml

LAYOUT_WITH_LEGEND()

title Diagrama de Contexto del sistema de autenticación de identidad

Person(customer, "Usuario", "Usuario a autenticar")
System(auth_system, "sistema de autenticación de identidad", "Permite asociar un usuario a un número de identidad único")

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")


Rel_Neighbor( auth_system , customer , "Envia numero de identidad por correo", "SMTP" )
Rel_Back(servidor_externo, customer , "Introduce credenciales o número de identidad")
Rel(servidor_externo, auth_system ,"Registra un usuario o verifica la identidad del mismo" ,"HTTP")
@enduml

```

[back](./../../Diagramas.md)