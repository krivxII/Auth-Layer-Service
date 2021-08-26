![image](http://www.plantuml.com/plantuml/png/PP11Jm8n48Nl-olgdY01DZ6UF67G6oO4mfaCxIYJTAVhT8hehxVTPD75qyw-zdtpNfTHGJIrlheZjZuvD2VLBZusZS3duftqb8ufejZ0YgmB6zgcyy35Cu_gF1sRrSDyKwJzwxff8IfAbWwhx01Yb4LN-DK69GO-l5nqqlNZaoU8CrEluOY-piC-9X0A1WoaiemiI3sjTbyPsKvY_nbCaV8F68U_Toq5BfYhfUpwQxlFXpkKCxaWTS-8FGGlYiB1V2GqISdJTzQyYULgXlvVCgsgBVeRz3WVyfd0M467R0ayHjE1N9kzbMw6N9aTk7esBSJ3y_XfRh8JgmINB8wuWtSxVg4HQ8WJH30Oz6WpYSc6BB7XrABqDSaDuKhFGbuYkzJw7m00)

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