![image](http://www.plantuml.com/plantuml/png/dLB1RXCn4BtlLmnx2bAQ5PGJfq9R2Q44eeQSerbxsWxosel7RXCG_yvubGIsfKZqDkEPz-Ozwvr9mfXovweNx8tBbk0sfLxUDat4-zaDfzlSPg5eWa_aqyo4hkaT-e8vaMGTjytvcvDbULelvas7aYZgq-PS4SYUugml_5MrskcesrnkqqI6yfrZbDTJg5SKxzY6M6ijN4O8j5KU7-1R9iY97N_NDmTILWq7i0IOYoGsgBslNrPBYXBySA0Vok60Siwn9LV8rv8nAXX_OwC23zBUX-mjnjsV-WP9sk3ZYphwt2UjqC45YOciNL7oepgQdvX3LOmka1qCRWqL-ATWQVPL0Bs5osqVIKHRLVGN_AdkNv5bUIx1Azt7dk464ztZxb_m_OTSj1EXxKuNOpdyjE7gPrLLL-H6nqREdSCEBGgeWdfQVvJWcm-QDCK-YJlz3vpkxgKEkbfg757JXXYndWwxc_Ku5Gyoo3x5OBCXC6gMl65q97liWy2ElfJy7UC813t6OyAkIyQ0RQajsiSUDlDHHaOQ3-HgWmAG8wCYFPjG983F7SK0blRqryTWrgl5bwNIdv6tkNE_0000)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml


System_Ext(systemAlias2, "Servidor", "sistema externo que utiliza el servicio de autenticacion")
Person_Ext(personAlias, "Label", "Usuario a autenticar")

System_Boundary(systemAlias, "sitema de autenticacion", "Optional Description"){
Container(container2, "Mail Service", "Node.js and Express.js")
Container(container3, "Redis Service", "Node.js and Express.js")
Container(container1, "api gateway", "Node.js and Express.js")
SystemDb(sexy, "redis", "Optional Description")
}


Rel(container1, container2, "llamadas api","Json/Http")
Rel(container1, container3, "llamadas api","Json/Http")
Rel(container3, sexy, "escribe/lee/borra",)
Rel_U(personAlias, systemAlias2, "introduce credenciales",)
Rel(systemAlias2, container1, "envia credenciales para autentificar identidad","Json/Http")
Rel_L(container2, personAlias, "envia correo electronico con numero de identificacion","SMTP")
@enduml
```

[back](./../../Diagramas.md)