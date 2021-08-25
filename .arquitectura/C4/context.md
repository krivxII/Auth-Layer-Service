![image](http://www.plantuml.com/plantuml/png/XP2_QWCn38VtUmhtfWII79HEdLAIRYaDAPs3OYkDm2SRsUwVjwzyzA2NePqi2Vq-VsYTCaWklMzkYAql3iqbvvZkkqxWO_L6-L9E9Q7Om1avhspek-Y1QsQPilDqwZPtotqTlJxjkXvIHj7HSQC984PPnSflzYWfyF7nCy_YK3vuWhGmxGvEw5ijdcEcmE3D5fCL6hfsthnyARAVfU4PGucq0QE-KAeOMR2w_Y-c_lyRTQk1FqBD0VtL-jG3-Pt0M467R0ay9XD1OBGwgvSOShLsuDh5l1AFs-a9hdo8imHNB4wuO_OmlSG4DEe44Gm6FLebCTcW8pPSUfHW7Fu8dSUZANcDx4hllm40)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

Person_Ext(personAlias, "Label", "Optional Description")
System(systemAlias, "sitema de autenticacion", "Optional Description")
System_Ext(systemAlias2, "", "Optional Description")

Rel(systemAlias2, systemAlias, "envia credenciales para autentificar identidad",)
Rel_D(personAlias, systemAlias2, "introduce credenciales",)
Rel_R(systemAlias, personAlias, "envia correo electronico con numero de identificacion",)
@enduml
```

[back](./../../Diagramas.md)