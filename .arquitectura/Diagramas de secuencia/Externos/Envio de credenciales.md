![imagen](http://www.plantuml.com/plantuml/png/jPD1ojim48NtEiMGTGAXor1A5eNIJHSjFS1K6eAeB9dHo93Zz01TTTUjB_QFBUKt3WISHJOXbj_xtjDOEcT1bj858ru2mMUF5yOEmH5aieMYzRY7xtJnMHWPIYx8FXbZq4fQdd-b4Xto5Nv-DJP5uHGKm0EnwJN1MzzZ5DZzK0vLFXQXg6_G-l5VX5vfDZ5JsYczSU7mIObm0X-L9gWI9ZUt2fId3dv08TMeHuKghwbgeJZuXuQcKbVzjt9cWW63TnWXO5uJZC4WgoKOnZ-JE3zYNIWI8qZwJN7Qk5UhgC4jTJREfL4rOAEZ5g0uZ7yHA2mTCkLPUzNL9jRbyFuzD-AVQlAbpY6E_pjYZMjJhjhN91PaX_2jJ87xspwlTGmlIMoZRaaKo0ghoji4k4ptzY4_7WuRqITWodsXB0WVZaVZwDcpexTZpclHzy1MRPQezFwrCHGohSyzyRGrmbpltWh-IBZqRbfpbxpDEzrtYiwSzQTquGq0.png)

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


UI <-- server : credenciales erróneas

deactivate server

usuario <-- UI : credenciales erróneas

deactivate UI

end
@enduml
```

[back](../../../Diagramas.md)