![image](http://www.plantuml.com/plantuml/png/ZLHDRZ974DtFAIgp-K3YCugKLLQs0TcEiK46oyfgL7HNXhPwkYVzOvj4aNA7d207o2gxRBb9Jl9LCnW66qjcrLDTxzMhLzMS-e0kn4fdtoaZT9G4on1g_sE_x_3vf5HX6HVHanFM13BXHDYgNsiq2VFL1wdLeZ_uuUiqXUvlnlqAVI37eMB025I6t4cT-Bz0D0okc0J2ak0NgxLzLgO4pKc0HiB1jNAUJnQuE6WhKEiLS-nKlY_0j-EpdoVtys8-cHR3oSDjfxkFdSsAsVLeFhXi1n-kvfV5U7GnkXrskb-oBAYW2OOAIuSLGYgpQPkaTVobOQQuk-O6O_932HHg_Q-1cZE4TOvibat9UMkAqKleYEY3hSZr8B_t4Pso-Vu8k6TnUJVBijagyHVdDXg9RjKHttFsPuhcNVWz0_xjJEbuSa-AXHUEfFA9Pnj8H3KvaMYDK9YtxnveaRx7H3qWBvnQ4Ao0jAgKGP0Oh4zuZR10JtniOZq8M2qK6IY9YoDepZEHEs_obKow9Kg8Heac9b0YnAqhtJVgiLObwpYh5LnWe6TS7PCvZIROnCNiBj4rqh3MEuz-ZGGL6df4Q5JPa3G9MzNMC8pykzeLAbqa-yYziQqYu_6HtFgVewwDp1FV0EbjwuUTerUbGMa1zMlR1nCyL35ST2G6J2upyt1xp7lvDQt-__El9zIHu3MZ0MT_x3Q8Ts-_0FGIo1dR4hpnRlrtcMPgOPCebDru5OFIwhTD4_x3nPFK6bpwtP4-Kgyrn05gdQh-D9lSzY_dy-cCaGdLvBGjFmIWNndHWmzmXql-EMWnFfnmwuto01KU6rvxKCd7c_aqX-wkxxQ6rvd0zXcDcbVKEsSqRqq3AkvKkMp_FHmPrfK9piee20GpRvwg9WyMpFg_TmAvjLCoCbRw6m00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' uncomment the following line and comment the first to use locally
' !include C4_Container.puml

' LAYOUT_TOP_DOWN()
' LAYOUT_AS_SKETCH()
' LAYOUT_WITH_LEGEND()'

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