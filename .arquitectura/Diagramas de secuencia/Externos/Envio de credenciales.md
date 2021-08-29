![imagen](http://www.plantuml.com/plantuml/png/jLIzQiCm4Dxr54Vc14Bf54h9K2XTEXJw01Vf2AAo54wI8O_J1-ZKhQjVh2TRYN4Wu1QI8SJdx-UxKqxRc91JRfnADZc29ujxnWR144JIcRosk8GtsjkOE9HoZXdP1gKKwXJu_BmBsHla8xo_A1sye9r8S4ki3k9XjJsWJx0eDNdejJ0dyl8AjUs-VQbOKme6pK8CgZIi7aKKDc2za2KmQ2RJHtCKImpROg9Yh9G01JuO2uLyQwyIAafOmwy9CnAqw2IA1uTngY2zkpGfGTjz5d2yfhKdJuoGmWTD6ntZp1zD5HQF-QGX1lcs-q8WDoQ957lqiLHrOAQYvSu7Ez_XhtcUXvduxgSX5aAT-82-fQyqPX1USx5Tdde-zYEvfMyTVlKZHpgnuAmEWEEyJwVxi5hDLzy0KpnaYWdXRhrMXlxnjvBTwLrhW4lD6h272FJojLBa8astWhWqI6Kjn3dutEn4-BwiwTJf6cliesBLHOnvt78ra3TgAr_bjfFFBm00.png)

```bash
@startuml
title Diagrama de secuencia, Registro de usuario


actor usuario
boundary UI
control server
participant "servicio de autenticación de identidad"


usuario -> UI : insertar credenciales
activate UI


UI -> server : enviar credenciales
activate server 


server -> server : se validan las credenciales


alt credenciales válidas

server -> server : se genera token de identidad
activate "servicio de autenticación de identidad"
server  -> "servicio de autenticación de identidad" : se envía el token de sesión y el correo del usuario
"servicio de autenticación de identidad"  -> "servicio de autenticación de identidad" : Genera número de validación
"servicio de autenticación de identidad"  -> "servicio de autenticación de identidad" : Guarda Numero, correo y token
"servicio de autenticación de identidad"  -> "servicio de autenticación de identidad" : envía correo electrónico al usuario

server <-- "servicio de autenticación de identidad": respuesta 200
deactivate "servicio de autenticación de identidad"
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