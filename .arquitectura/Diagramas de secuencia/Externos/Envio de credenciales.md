![imagen](http://www.plantuml.com/plantuml/png/jPCnoXin48NxESNmrpQOaCg4u28GqgH8o076qc14jD8o6YtuE3b0gdHfzs8PxueiQp2i2pV6bjxxtlD8EXKbqTf5qA2HyLEWYr17w1aBkyh91ThXDxw4eaA2jLIIa060dERbzpdNv4ck-ECBk9nKSZI032pGMq9meQUa-FRTE3ppgIedso4NnZy9UwEvBCBvpUYDY_kFHiGZXcGq9PC8-wbLv7Bh40PIDervJ6ZoETKid8RmqD1Kvfg_hPo5SQ0OF2MCLDO408gwMi9X_7KJbqUi2oSMGiq_EQ5d36PLC_YbpiQvDAe5R7JC1MmIusz2Zak7mcNINcsrYMqv_Z_FZVYdcdoUvv36lnsBnRKfpzhN95OIJ_YrtW9tRGElynXUajX6tP8uibCnLN0PQPbkEqZyiDzlH1zHkFILYnA-Enp0yxDtnrx7bDUYxu6jsYGnwVqs0CV2wtlF8XR2L00iDwVQdGty7YngbVJGjVo9feMx6XkyxV5pyd2oZzh5Vm00.png)

```bash
@startuml
title Diagrama de secuencia, Registrar usuario


actor usuario
boundary UI
control server
participant "Sistema de autenticación por correo"


usuario -> UI : insertar credenciales
activate UI


UI -> server : enviar credenciales
activate server 


server -> server : se validan las credenciales


alt credenciales válidas

server -> server : se genera token de identidad
activate "Sistema de autenticación por correo"
server  -> "Sistema de autenticación por correo" : se envía el token de sesión y el correo del usuario
"Sistema de autenticación por correo"  -> "Sistema de autenticación por correo" : Genera número de validación
"Sistema de autenticación por correo"  -> "Sistema de autenticación por correo" : Guarda Numero, correo y token
"Sistema de autenticación por correo"  -> "Sistema de autenticación por correo" : envía correo electrónico al usuario

server <-- "Sistema de autenticación por correo": respuesta 200
deactivate "Sistema de autenticación por correo"
UI  <-- server : respuesta 200
usuario <-- UI : respuesta 200


else credenciales erróneas

autonumber 4

UI <-- server : credenciales erróneas

deactivate server

usuario <-- UI : credenciales erróneas

deactivate UI

end
@enduml
```

[back](../../../Diagramas.md)