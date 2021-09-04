![image](http://www.plantuml.com/plantuml/png/ZLDDJXjB4Dxx5FLcysp9O3tfhTuAi2tWOR0L6w6iHkNkYcdKqptf7y298kKEEK4Ea5LssVecEKcgFOFj0ICngvxg-hxwwglg8n_GXLZerb_A21qbmMq8fV-lrtFuSBXGuJREeoSdh0bamg6mHQ_KQ1Bcm0UfrRpN__TWaaBNbwDUWJwGur3UPmGgG-wmJFn_GpGCBfW4mYt11wkrVL1c0PgJ08s4nhLodayMk3XeAr3h9NDiLBuimBUZu_VZwra-6q_omVZcgjtPnewd-VHYEEkVSR0EtPpFplBHy7HuDU1WAwYW2GOA5muBX5HZtJD9w_XFmrHnQzKDncI64YZKwgU1aZE4TOvigpKXvwt9Xu-XBQ8FjY3NXUpQHtJAPjiZu9R5PLo_DLqc_lp4HYFHBTlY7yv-Iz6i0vzRmD_6aROdTwzOUEv8Afzuwa0YAic9H6k4mcptxeRcwNz4r0NomgavmH98gq8P18d1-eJN27FqnCSgreM0nLoHWGLnSGJDUIPovrM-aactH0dHA57514g4MBlIUQOUIxLW7SUbWbCCz83BVJ8dqGIRk9ZTCLqj3KkzyUXZ92ZGq1r2fSg6f4dOehI6OUHVr2vGwJpPH-wPRGKPZtVaLZ_skZOqztm3fElMcvsZLmk3qWBgfxOR4sog6CpRx2mcbvbvK1-pRdP1ozzVlzsZZWHF6HMuzMMpGRnxsmMWnq3Es1t1Q-zMtnTffXRMYKBPjLSnAAq-hPlmhouUHxQ3IzyxqdlgxGonZrgdglzFnrUzizbiCcLaGbKv3SiR0FHB8xhm2gwvv6-3vgFcXBTlD0rGuTxXxGmg-NWvcsJGgVjkQdYQ2TJFQ5Yzeku9etbhQj2sw9undPlWh8o2G33d-f5gyc31h7wzaCPD7P6HiT1_0000)

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

Rel(customer, servidor_externo, "Introduce credenciales o número de identidad")
@enduml
```

[back](./../../Diagramas.md)