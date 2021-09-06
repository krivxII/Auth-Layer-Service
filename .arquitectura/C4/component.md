![image](http://www.plantuml.com/plantuml/png/jLJ1JXiz4BxdAVpd52J8Albxweb28g4MMaGAFQ9PUmX6NdixjWDfLQdlqEVeYKVWJVea7SSa9CkgZTJs42d-_7sVPpvxPzy7e10hq_bFMscYGd4TGkrV5WN1RN-gmtKieqUIpWQqeIzTLTG6RDBi-Q2CBel35tkd2Je_EIugy069eSj3Le2sIFtw7_bNjREioVv11uDYf65AK87WWrO4zBmqOg9PchSWfiEq1AaVxgse7GdfYD1rEfDvObsExq8F_QxeJf1cMZdgyd__w81t0SawyJ6YY44R_Oan8toYIksUdz3TwPmYUMSNlZMorp6KQ9BfkOz0B88d3J6_iohbm4MhWEOzFqyrRD55idrN1-qi6352Bqcd5PVnkTDPtSkex14gdPeSGO0IF2RX6vp_-Ffj1eQRKqjyPqttL505sgn5b6ggq7guGNhu3jtrhGzOfjDNTzAJ_rUydqp96MXNiqX0hONCB8CSpAR5a5ad3_SgcfJwMljZEzFmkFO23Kfsi5ewpnPVMhiXRFHI8otIjbB_hfdXsVDc2AVQCx1D9yEBfhvvlLkvq6OSpGQEGA9mZB8bIxn0Amo8TCE9hY0iuk5yMWEIIsZ0Ng-uZYa4l8Lvidxh5FPll02hnFYk9lIUbusK1d-Oqk2lf3IesXwDNmLa35IWm0lO_AGph-6rHUBjXWqos-RS-NU69ZldP_4ahtLtj_lQEriSXL2pP8rvjWsJIRdzw64Jf0PuqGQoah-vNn-KgSEa7oxrkzc0Ysn56LWEed6QLIKM1h4uS4GhLfgPc1WwNQgA4eLaqI8xWtv9IvJypD3EU8fia4GD1C97SHL3v7ypC5hbTzEILhQwo5OQX8qLKijipwxILJMv4aXebJOLg1RFHNffR6r4S7dSorYDZScrFhWOicj5v6Ek5bMuLF_avFqf7xEFLiNAy4lw2G00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
title Diagrama de Componentes del Sistema de autenticación por correo

System_Ext(es, "Servidor", "sistema externo que utiliza el servicio de autenticación")
Person_Ext(pe, "Label", "Usuario a autenticar")



System_Boundary(sy, "sistema de autenticación por correo", "Optional Description"){

ContainerDb(redis, "Database", "Key–value database")

Container_Boundary(mail, "Servidor de mensajería", "Servidor Web"){
Component(c3m, "Controlador de mensajería", "Web api controller")
Component(c3m2, "Módulo de correo", "Envia correos electronicos")
}

Container_Boundary(re, "Servidor de persistencia", "Servidor Web"){
Component(c2R, "Controlador de registro", "Web api controller")
Component(c2V, "Controlador de autenticación", "Web api controller")
Component(c2r, "Módulo de persistencia", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "Api gateway", "Node.js and Express.js"){
Component(c1R, "Controlador de registro", "Web api controller")
Component(c1V, "Controlador de autenticación", "Web api controller")
Component(c1m, "Módulo de correos", "Hace llamadas al servicio de correo")
Component(c1r, "Módulo de persistencia", "Hace llamadas al servicio de persistencia")


}


}

Rel(c1r, c2V, "llamadas api","Json/Http")
Rel(c1r, c2R, "llamadas api","Json/Http")
Rel(c1R, c1m, "usa")
Rel(c1R, c1r, "usa")
Rel(c1V, c1r, "usa")
Rel(c1m, c3m, "llamadas api","Json/Http")

Rel(c2V, c2r, "usa",)
Rel(c2R, c2r, "usa",)
Rel(c2r, redis, "Escribe/lee/Borra",)
Rel_Right(pe, es, "introduce credenciales",)
Rel(es, c1R, "envía credenciales para su futura validación","Json/Http")
Rel(es, c1V, "envia numero de autenticación para comprobar identidad","Json/Http")
Rel(c3m, c3m2, "usa",)
Rel_L(c3m2, pe, "Envia correo electronico con numero de identificacion","SMTP")
@enduml
```

[back](./../../Diagramas.md)