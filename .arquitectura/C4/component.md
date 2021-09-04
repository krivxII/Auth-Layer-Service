![image](http://www.plantuml.com/plantuml/png/jLJ1JXin4BtlLxWv1GcoIjfJJnGI2RNG8bBe4StQGp3osjkn3QHLfVv3lwCdFe4_wPTqd2NB9bsbHQY7IF7pUyyppzxPzG4enD9aBxIL9YeKbo5K_dMU4zmCPZfSnY9w9EbiG1i6qfLvPS0cpOuFokWYtt-rSvoWqwF3l0GVa1WwtsS5Q8iqgFwJVravovhQF-XWK8mrp0XA47nGGq3FIoEccgNr5iHqc9OWzVsT5PKZ8HqHkYoRpXFhV78R-kYtHM-ATAsLenx_zmyEU1kGh1EV8ueOjD5V63F29whKxiyJUblPCP9tTk5R8NiTGe4ccPxw2CGYUDGGyxEcb3qNhGAQz_sygM5p5ydsGnMqis346BqadLPSnjSiQ-vbNFG9bKvDZY500HwJy1tEVtt_SGs6crDBVAkbUooe16rQ4QMQIhGUhf3kVqAllVK9YtHwSoTz-RBa_RfU8TcRd358ISHS0PLkerkhoX6pZkxlL3Gfx5RN4tkjuM7j1HgKx62rT9ujldKsGRZMGeKaKyXMwh_rC3hXVS8Pq-cfNOpEcCGnQmLIE_jKDRKYw2Zw02GAn-Z273aBAmo8T9c9hY0i8k5CEaEHIsZ8Nc-uZXa4l85vidxl50wkl02hnEIs8lIUbsl939-HpF1PoGpBhiVXcr2CWH8KSFsjBxRXhNbjJdcpOPlCjfnr_Jj1KplNJ-1HNkdUTk-jTpO_2A5YIOjvyYzC9jNjHm-h8As1PrqWA_dRsdnGJHqb_MYftwuDkCXEb87bd9caKLHWRX3pFSwxOQMHY8cXqwMgoB5A5YsoC-YNj4IfdnQc3ts58oeW43wAYnWY_ri-81wD7M7LJcUDauqbKiVahbqbFmbo1P3GAcqgK1sUY_3IT5f9uFomNsCLhWsezdnYoBQAg8-vM5JXKltJeu_7VCmkMXLByni0)

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
Component(c3m, "correo controller", "Web api controller")
Component(c3m2, "Módulo de correo", "Envia correos electronicos")
}

Container_Boundary(re, "Servidor de percistencia", "Servidor Web"){
Component(c2R, "registro controller", "Web api controller")
Component(c2V, "validacion controller", "Web api controller")
Component(c2r, "Módulo de percistencia", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "Api gateway", "Node.js and Express.js"){
Component(c1R, "registro controller", "Web api controller")
Component(c1V, "validacion controller", "Web api controller")
Component(c1m, "Módulo de correos", "Hace llamadas al servicio de correo")
Component(c1r, "Módulo de percistencia", "Hace llamadas al servicio de percistencia")


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
Rel(pe, es, "introduce credenciales",)
Rel(es, c1R, "envia credenciales para su futura validación","Json/Http")
Rel(es, c1V, "envia numero de autenticación para comprobar identidad","Json/Http")
Rel(c3m, c3m2, "usa",)
Rel_L(c3m2, pe, "Envia correo electronico con numero de identificacion","SMTP")
@enduml
```

[back](./../../Diagramas.md)