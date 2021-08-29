![image](http://www.plantuml.com/plantuml/png/jLLDJnin4BtdLxWvfH9abRIddX0V4ggWHQ5mHRFs45nvRTSVG5hrL_4J-6ETMPDDGXT4QNk8TltotXlFy-xiJamGKcxCu8ssqcI5uYeb7pzKLO2RyLodgrpdY44wcz2ciNHDvGrOrcp7f8okgxttsoSCdHqVLGt4X86WYprIWBOOnlu_-JVUMT8K_wIJGR6lOHwW0K65EW96MXeHDKdBNv2vc9OWzVsTPKGh1XIemU1qmRoBWziqmhWbXgSOhhLoOKZtIm-yJHYi4zyoYfoqqTz1S0ccIkr-hp5yEpZ149rjVJsIrn7KQDZqB6O898AL9X1_q6rbrsMh82n6SK7q9_jWhyy-QMV1Y7sCCcXUKUqVWq5t7FlrAA3It5bxVLgr9bfjeG5jI75C5z4c8v4TFZc5uwzHW5NYuDO7Z96MNBaxXf5yrn1JkX3G2Jxmu8p1DjU75L3Ct1UoGp7Or4-vzFsTogRDk7Yn0Tfh3G_hAD2W93-hfMEBdxsT12JTZ2FuuqQcipQzkOuflAwLwJbHhy5e1PB2Vfr7s4oZEyv3a2YSnz1wOnHeXG5HGqJcAKXjB9HBRp1o2Kt82xmMSqXu0uiNnpFvwtWc_o2UITFtiBG1NN50na032gA0pHUty1vvzKVzl5DXaH4bNNupDCMhdFzAv_LmQ_WnEbiTfkH9iiQSlOH9fD9mZh09XaVWUHz8IdgxdYzKg5FMJvVwhM90c-n52LZEcWCUB3LM1h7QfOGx5iz2P8RcGrLPef0aGYir68nB6bEee-vLN-S83m54pE8ofqntxODJPc9FMCNfl7EokS7GCxABgtID3ww6iFf4z7YsuV5ysaZWucXKC8-FHjJwX2B8hcsYbBbiT-5u_wV7Nqwep0vQnH-wNm00)

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
Component(c3m, "correo controller", "controlador de expres.js")
Component(c3m2, "Módulo de correo", "envia correos electronicos")
}

Container_Boundary(re, "Redis Service", "Node.js and Express.js"){
Component(c2R, "registro controller", "controlador de expres.js")
Component(c2V, "validacion controller", "controlador de expres.js")
Component(c2r, "Módulo de redis", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "api gateway", "Node.js and Express.js"){
Component(c1R, "registro controller", "controlador de expres.js")
Component(c1V, "validacion controller", "controlador de expres.js")
Component(c1m, "Módulo de correos", "hace llamadas al servicio de correo")
Component(c1r, "Módulo de redis", "hace llamadas al servicio de redis")


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
Rel_L(c3m2, pe, "envia correo electronico con numero de identificacion","SMTP")
@enduml
```

[back](./../../Diagramas.md)