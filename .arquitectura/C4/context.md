![image](http://www.plantuml.com/plantuml/png/RP71Rk9038RlUGflJY01aLPxsXChjZSg8H1dP6RSOcdYIJqpbFQTUkeZy6ATYKfBK4zn_lZ__DkPXuWQK-kgNop69KjmYB4BVvj6yNdsoF6GzYcG6Y-H9CwCRvlEeHJFD4JhUDyi_anNHThUBviMGoJDqcwH7SX2EkiAlrgH1Y-xkrCSTNtvpp662THBt9EhSx4D2PKz860gmzYWrkDgyvAHxIZqZuifS7b3iFJTRFZyBWNqPIhJhes_yySDwP6jr_gAGgT8AXwU4a6AxFWrQmv2QJNiVvWohgerkHlsC2B9yVo6O9GiYM5q5A13lTuEs9RAegqdumBS_HyUvoOxIrHlaw41zU9T3syq09KqZ62yAdaWHoQJX8tFae2abhIi-HdeeT_JIo7FIMp_0py0)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

Person_Ext(personAlias, "Label", "Usuario a autenticar")
System(systemAlias, "sistema de autenticación", "")
System_Ext(systemAlias2, "Servidor", "sistema externo que utiliza el servicio de autenticación")

Rel(systemAlias2, systemAlias, "envía credenciales para autenticar identidad",)
Rel_D(personAlias, systemAlias2, "introduce credenciales",)
Rel_R(systemAlias, personAlias, "envia correo electronico con numero de identificacion",)
@enduml

```

[back](./../../Diagramas.md)