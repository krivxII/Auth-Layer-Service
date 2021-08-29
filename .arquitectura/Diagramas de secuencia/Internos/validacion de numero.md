![imagen](http://www.plantuml.com/plantuml/png/hP91QiCm54JtEiNWTNE1K4eMxGaAtVz8qo0gIqRwTjFRLp4Eg0cf2MJZXJIQD-F_TqKbwzW7eru3yUhbaAKNEABGZepMonFUukJJwSncklaii1XZn6hAw0hpv6rLyAZCCNNrogQeEGLqCdWSHFajFvqPAgqg1udQF7F4m6nzqTcxCqvKzbA8YlCBo4-YlB2x9cFpybU3BLZJ2-BOCyyiNoke__HMwilOUDyEr5hEZDlQLM1RP-u7yuzRPQsBdZURHRN51_C9bL0y6CufM5GW9LMvIwZ3WOJ36ALSZ5I2mecc0l0u0vJbeVdUYKmxLe600Pg-61yDsAUS9IAaifGvDo_6yPwVVxbDswgPHeQ9v-3DxQA_tabSFJCCXJ1tijjHWJcdI6aRhM_mUj1rHcja3ACpk_eP-_0B.png)

```bash
@startuml
title Diagrama de secuencia, Envio de credenciales


actor "servicio externo"


control "api gateway"
participant "servicio de percistencia"
database redis


activate "api gateway"
"servicio externo" -> "api gateway" : envia numero de identificacion
activate "servicio de percistencia"
"api gateway" -> "servicio de percistencia" : envia numero de identificacion


activate redis 
"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Verifico si el numero esta asociado con algunas credenciales

alt datos  existentes
"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Se recupera el token
"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Se borran los datos asociados
deactivate redis 
"servicio de percistencia" --> "api gateway": devuelve token
"api gateway" --> "servicio externo"  : devuelve token

else 

"servicio de percistencia" --> "api gateway": credenciales erroneas
deactivate "servicio de percistencia"
"api gateway" --> "servicio externo"  : credenciales erroneas
deactivate "api gateway"

end
@enduml
```

[back](../../../Diagramas.md)