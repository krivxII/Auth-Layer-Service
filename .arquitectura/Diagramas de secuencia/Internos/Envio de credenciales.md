![imagen](http://www.plantuml.com/plantuml/png/jPJ1ZjGm38RlUGghP_O5HWYj13m14dTluXq2gLtPpi2yFUwK7ePkoo91ZydlxtUittqqH_K-jkJL6y67YcV54Q4G6ELEd2k-WOzygJAVPQLoEsjaAINCBWg3aLvg3WNzS5AM8QwoiAiq672gS4QdxtWTqXHkePoGVIrRm1DfhkOtze5i93RyIZgB2Ze-eH4ebMeflcqZyF3klWCu0SLZ45o-4SCLigYI03NAhi8rIxel2C9-fw_1fIOomV05pKD7J0gTWVj8Aj1doP1s7Vxi_pxyLbfSrqBizRbc33qVWvV9mP7exSF3eWgdpwGpMC0gK5izoHoX6nP9n2NzByTribTS7D4av4K0GLpN2QI4pQ6WYqK6Rb0d-xTDVI9u4bLaQ6A_l92zdhjOMcRmAiCJO1in4-CwolM9IveE6R_d-XIQIwTseKqM2fRTI6-sQitp2v2Nqxq7carMs5uw0TlV8JVR71PADlLR90ozsZDcbr2dUs6KRlzJX_MFnAMFxIS0.png)

```bash
@startuml
title Diagrama de secuencia, Envio de credenciales


actor "servicio externo"


control "api gateway"
participant "servicio de percistencia"
participant "servicio de mensajeria"
database redis



"servicio externo" -> "api gateway" : envia token y correo electronico
"api gateway" -> "servicio de percistencia" : envia token y correo electronico

loop "hasta tener un numero unico"
"servicio de percistencia" -> "servicio de percistencia" : Creo numero de identificacion
"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Verifico si el numero esta usado
end

"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Verifico si correo ya esta asociado a otro numero

alt datos existentes

"servicio de percistencia" -> redis 
"servicio de percistencia" <-- redis : Se borran los datos antiguos

end



"servicio de percistencia" -> redis: almacena numero correo y token
"servicio de percistencia" --> "api gateway": devuelve numero de identidad
"api gateway" -> "servicio de mensajeria": envia numero de identidad y correo electronico
"servicio de mensajeria" -> : envia numero de identificacion al correo electronico
"servicio de mensajeria" --> "api gateway"  : respuesta satisfactoria
"api gateway" --> "servicio externo"  : respuesta satisfactoria
@enduml
```

[back](../../../Diagramas.md)