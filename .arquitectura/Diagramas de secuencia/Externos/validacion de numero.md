![imagen](http://www.plantuml.com/plantuml/png/dP8nJyCm48Nt-nMdpdHagH3gmCB21llLULGd7Biwsv7wxxca5g8IAOWEbP9yxtkNS_QbYjKsHgfQ8_X9vMWo2W_WWj2GWieTlqdKGOBcD3z8ROHb9Y89DHktqiGqqo6tD8YT-VMPGaxLSdI9JJ0wUOi6FKcgl9dlgSjcr_Hbtio-LhFR3vxeKju-kevthCbZLQotBrcOlcjOqkIGevSwnv4cNOSxve6rONuphENubfHt_ShuPT4IIQmS3CEow8ZIWKB_RZ24TeA9SSqVI7ncH1qr2PTMs73KKYsNs_w-8DSDc1hY1BTSXEG_NpO_RBST-v7gvxTWom4Q1ZKzWWYnuFgbOPOJf7p_0lYU_ZhZYijhhuPSmQudNUUG1jhxNnlZ9m00.png)

```bash
@startuml
title Diagrama de secuencia, Validacion de numero 


actor usuario
boundary UI
control server
participant "servicio de validacion"


autonumber
usuario -> UI : insertar numero de verificacion
UI -> server : enviar numero de verificacion
server -> "servicio de validacion": enviar numero de verificacion
"servicio de validacion"  -> "servicio de validacion" : validar Numero

alt credenciales validas

"servicio de validacion"  -> "servicio de validacion" : recuperar token y elimina sus registros
"servicio de validacion"  -> server  : devuelve el token



UI  <-- server : devuelve el token
usuario <-- UI : redirige

else credenciales erroneas

autonumber 5

"servicio de validacion"  -> server  : credenciales erroneas

UI <-- server : credenciales erroneas

usuario <-- UI : credenciales erroneas

end
@enduml
```

[back](../../../Diagramas.md)