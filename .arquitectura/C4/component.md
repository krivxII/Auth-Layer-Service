![image](http://www.plantuml.com/plantuml/png/jLJ1RWCr4BtdAqnEgTHcbS29KsaJgO8MgeIMOpHhJrDNNdiPssa3Gk8V-0vE_OJ-2L_2E6xItNGL8W67IDctxxsPUVREkGz08LQczuMsqaI5uZ64sdzT50JFmwKEZx6C7aaw6z26eNHLKHkmINFcWpAwB2w_EhjDqDtDTL613qWCBIvP0TeY3Ul_oR-gdMLDzWyw61GJ3Kk22WGNsX7GywCHSytI_0fYAgObIFtsQaNjI4X7XAxNcwyJQp5z2GFqfw8_HrffvQZF__sx0xu49El4pn553DheNnWpmYUgrEvpXVv9xnR9ExlnhP6zhg54aqplV0HY4NneYFczNIiNBbe5j1xuTUhXY2cIxGzrqCw24HFqadHwuZP-xVLsvp8f1uHAfo4d4A04Zqdu7Qx_-lsF5HWUJctnauRkew4Aj6b4b7ggq7fuGdhx4_hDLpzXcQhlpcGWlwpuVJ8bPw1RpI81jHOoimnoC6sBCRDktbvLDAwfrnlvrAuql4VY1HgKx6ArT9vjVkkSY71ldXffaxYL-fy66iy-3qIuP3MvOwOPtxVr7TVe61TgHx8_m1L858vHjcI95sY50P5EET4LX4qyd4zdG78BZTZh6-vZ2G6VOPsiltSAXqzUW5LY-b8JUi-FUocD_cLAe_yafL5ruEBaZ8o12XJmEEqlkq5jMnuC_h1fYyosENx-pT1avtmxFkIrxf_sl_NE5bSXr2nfC6V7C9cKKuWUsY3jWVTT82lvypjSA5F7IJ_Uwa-p0JVPYJAmtKdJjBPAB0nYSU68jgp5J2yVynB5nDFfX5NaS2LBDmaQz5lBHCbt3ksArqgB96eW43wAXnWY_rk1qIfVeexCijLzjj8WRAoGEfPzTfLyCyYLG4Ahz5A1wl3SP9ZsM2k8nVKWOpNkhR7c5cF8Dfh8PHusNRZK__pcnrikSuvMnShy3G00)

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
Component(c3m2, "Módulo de mensajeria", "Envia correos electronicos")
}

Container_Boundary(re, "Servidor de persistencia", "Servidor Web"){
Component(c2R, "Controlador de registro", "Web api controller")
Component(c2V, "Controlador de autenticación", "Web api controller")
Component(c2r, "Módulo de persistencia", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "Api gateway", "Node.js and Express.js"){
Component(c1R, "Controlador de registro", "Web api controller")
Component(c1V, "Controlador de autenticación", "Web api controller")
Component(c1m, "Módulo de mensajeria", "Hace llamadas al servicio de mensajeria")
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