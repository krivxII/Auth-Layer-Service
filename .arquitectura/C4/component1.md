![image](http://www.plantuml.com/plantuml/png/jL9DRnCn4Btlhp0v1QdDYi29Kw6jX50ALQkUerbxcWxosgkndIP2_7V6pdQJ1Hhbmc4bU_q-_9xd8aJWc5fRlI6dRJAedcBimiUwPdYUhIW-fIO5PErTH1TdshTrPy5bpdc8nb9JNtuulys_7cuMTGiX8iklvQKmW1pohFjF-ctddN1s-jNzLaxQvVKcJaDPVh84ONwc9XFvldUHl0EhhZ1efhARlArkaODtXTILPI49VW4DsYF4QZ3yx9CpmDj3L-45aWqe2Gmf9oCDMgYlI_wiXiQc-cMLhty3PDKzyfeqPletRt3s8oXmHbrlEiOGP2jt-WV_lU3lq50uIM2NwAgP1jni1SYPURI4mN9Vm-3zJeZGaLf1n6VO7d6MxCDhJjUwEAyeHFOggx6t5Zdp-nqOpxbPp193-Br0RcqDbaof_7IDNrMLlpkqEv5HZId0v6poLMQa_Y8ZBF0TxW0sFm8xIUqGqhz1ARp1sgAyNK4j7yQp-iUqKuvdaaQb6GqwJM0nzDpf65owHhSc685L1mmg9FMOOfBLlilNPEQ3ZaijilzhxdUIMXw9VGEioEGp0-Obr68qz8S1XnjwPlGABMf9w4ZxNEdUiDTyx1spy0Kwarhx6m00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

System_Ext(systemAlias2, "", "Optional Description")
Person_Ext(personAlias, "Label", "Optional Description")



System_Boundary(systemAlias, "sitema de autenticacion", "Optional Description"){
Container(container2, "Mail Service", "Node.js and Express.js")
Container(container3, "Redis Service", "Node.js and Express.js")
SystemDb(sexy, "redis", "Optional Description")


Container_Boundary(container1, "api gateway", "Node.js and Express.js"){
Component(vc, "registro controller", "controlador de expres.js")
Component(vc2, "validacion controller", "controlador de expres.js")
}


}

Rel(vc2, container3, "usa","Json/Http")
Rel(vc, container2, "usa","Json/Http")
Rel(vc, container3, "usa","Json/Http")
Rel(container3, sexy, "escribe/lee",)
Rel_U(personAlias, systemAlias2, "introduce credenciales",)
Rel(systemAlias2, vc, "envia credenciales para su futura validacion",)
Rel(systemAlias2, vc2, "envia numero de autenticacion para comprobar identidad",)
Rel_L(container2, personAlias, "envia correo electronico con numero de identificacion",)
@enduml
```

[back](./../../Diagramas.md)