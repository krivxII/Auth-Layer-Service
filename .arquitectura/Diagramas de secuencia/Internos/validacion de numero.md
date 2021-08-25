![imagen](http://www.plantuml.com/plantuml/png/hP9FQkim4CRtEiNWzSi5mkEHnUi92jrFvAz1L9RCpCXDRz-9cq2TKBU5QA65zFl-3D9EZSNQa8Cbow3_YG_20rCFKiI64XF_eOSofNewYu9-FilG4097gqATGgOKdS3H8ALsVXLhCQcPEXuJ7TZmoczT63tDoP6BVPAvyGY9IMtsxaBFndjMaCSb3RvkCsZpRsbEMuBtP2fjWCokgKUnz9mYkxA41UxwbGhVc_bQaRlvt9tMeB-RpPdQqXFav5r94o5VOg76n5eTxol5MeZpeHNMgvVWRDIpLIN2SGumw5txFO84iJd0X4nMNr3k7R2l8bmeLpqFSvbyVPJhZx1rPch84yur5xSV_ErteXjPG5PG-5tsuc488hM0zOSLlb87b3xiV6j3VWS0.png)

```bash
@startuml
title Diagrama de secuencia, Envio de credenciales


actor "servicio externo"


control "api gateway"
participant "servicio de percistencia"
database redis



"servicio externo" -> "api gateway" : envia numero de identificacion
"api gateway" -> "servicio de percistencia" : envia numero de identificacion



"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Verifico si el numero esta asociado con algunas credenciales

alt datos  existentes
"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Se recupera el token
"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Se borran los datos asociados
"servicio de percistencia" --> "api gateway": devuelve token
"api gateway" --> "servicio externo"  : devuelve token

else 

"servicio de percistencia" --> "api gateway": credenciales erroneas
"api gateway" --> "servicio externo"  : credenciales erroneas

end
@enduml
```

[back](../../../Diagramas.md)