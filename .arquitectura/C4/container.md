![image](http://www.plantuml.com/plantuml/png/jP91Qnin48Nl_XNgdXnmlBJfgQUqIQ0Kfmq9EPjPQP9CqKfYPfJObFxtIijkO4ljGo67XP5utvlHspaN1TRS-yKx2jPdX-P9DScdjcLuMJ-IFkKk2xADGJ7esiQ-JHv2PKv5dQUklVXuUbElxgytRG-YoELgUr48e82yJc_atwSOAZFuB-xsejXlhtQwbA7yx0damyeqJVb-9AKOm9jB5Ciqd9gJnGson310QIW7gEWtqA4_0hxs-n9pSC3xiUd42vK368S6SdqOMR2LFEZuQ_4QsD9ELPt-6iYRE-HdibZnxz7X-gSO2CvSxHAZI3as9__Ypuh-5Xt9_ngyBtf8P1v1yGNsn_0naCjkARZR5o7NnaSY_5r2l4K_QpPxUHPeLiqtYQ7zgfeASb1-TbG-ISR1XYawR3rYinfKs_lvx_zhWIWeHvSj6ileC5W2ZpAooxbu5Xs6Pu8PP18mJ3lnG1ROaAkr0pSDivajm6omoJ4oOpJeqIh7G3RMlYRa7ZaQXwFdmxXrrVWSWykz_mC0)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml


System_Ext(systemAlias2, "", "Optional Description")
Person_Ext(personAlias, "Label", "Optional Description")


System_Boundary(systemAlias, "sitema de autenticacion", "Optional Description"){
Container(container2, "Mail Service", "Node.js and Express.js")
Container(container3, "Redis Service", "Node.js and Express.js")
Container(container1, "api gateway", "Node.js and Express.js")
SystemDb(sexy, "redis", "Optional Description")
}


Rel(container1, container2, "usa","Json/Http")
Rel(container1, container3, "usa","Json/Http")
Rel(container3, sexy, "escribe/lee",)
Rel_U(personAlias, systemAlias2, "introduce credenciales",)
Rel(systemAlias2, container1, "envia credenciales para autentificar identidad",)
Rel_L(container2, personAlias, "envia correo electronico con numero de identificacion",)
@enduml
```

[back](./../../Diagramas.md)