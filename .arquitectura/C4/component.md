![image](http://www.plantuml.com/plantuml/png/jLNTJZCt4BtFKxYv2X9abRHNlK9095H1YqAXbsZM7e8hhxqTsq1QzQbu15xicrb_-Gai28I-2xJhmpbdFCVUoM5CG2atRl2JzTfbW-ekfJR-MbK43-E5JNUvpX591v_Gfx4EJTKwyA8vYCauMrV7lnnS27HrVbOr41CIGpV7h03haSRj3_9lsk1PK_oJJGxLYOK5GGEA2wq967dfLBGiBV-2BCMi1csVdxmWrWXWm0m6bqlXtSmUqmZZlXfU8jrR4sZ8xoiFV4n8FgX_CggShBF_Wf8IGjKslAunt1jS8CNWEzyMsUiCQdHYUXKp48jWeo7c3zPREGhP6w3bA2wP_cOVulL7cspmuDG9HarMLbpxly5WVHmdzOZGMEciUxwjsX9jjj20TQmuvuVgaj4e3hy7W-E_em9lrEon9OoHbr9vVGmZ_NF3J1s8C2WvS0hE8OdyBwmLj7ORtTjLJgNeyvF9haktk8XqvkyjV5z7XGurEtYhGsIB_tjx88b_Bir_keNflCjjOMEYppOnlMRIFJXhG7F0drNJRWBhmpi5ZIgqI9qhHeLUEL0rH1IUWTH5mLdqXg5Nq8IzP0CBIFW0omz7Clb299ClHJ9f-Yx59XJde043KS7kfrbuBxpwuttVgR3OYDCjVtDqnQkSzaRNsk7-yBSOV7MQKikIBURy8qmcbOPpX5sGNe3NVI0h-Ijwlr2XJaK_NUdtYm5liXTbO3LDPZ8wQgmSOdN42QzPCkrG65QEqMJEKxC8lRRWCAveGYcN2UMJtk6e5WXKpEesfynlvSgKgVSwhE9qlNRokK7g6Sh5LVCbe503RNu4UZoxy6GExIHmSpOgM8ilHj7s96B8RssYbBdjTX5a_vVdVrvmcKFq9ZVk6m00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
title Diagrama de Componentes del sistema de autenticación de identidad

System_Ext(es, "Servidor", "sistema externo que utiliza el servicio de autenticación")
Person_Ext(pe, "Label", "Usuario a autenticar")



System_Boundary(sy, "sistema de autenticación", "Optional Description"){

ContainerDb(redis, "redis", "Optional Description")

Container_Boundary(mail, "Mail Service", "Node.js and Express.js"){
Component(c3m, "correo controller", "Web api controller")
Component(c3m2, "Módulo de correo", "Envia correos electronicos")
}

Container_Boundary(re, "Redis Service", "Node.js and Express.js"){
Component(c2R, "registro controller", "Web api controller")
Component(c2V, "validacion controller", "Web api controller")
Component(c2r, "Módulo de redis", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "api gateway", "Node.js and Express.js"){
Component(c1R, "registro controller", "Web api controller")
Component(c1V, "validacion controller", "Web api controller")
Component(c1m, "Módulo de correos", "Hace llamadas al servicio de correo")
Component(c1r, "Módulo de redis", "Hace llamadas al servicio de redis")


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