![imagen](http://www.plantuml.com/plantuml/png/ROyzRYin38HxdM9A6tWdi8ld8YT8aPvPZHC2NCaGjGluE3b0gdHfzsAHvH_4Y0i1n73cqt3dLKgTHWjLgn5FAcz5Ha4aPAWwQvH8_uSNiJOEcjDffP6fdbQXvyFccOE-4WTMFNcsOJFt04mkulBLLDrZTVNWxFY_Hdrdmkf8NmTWmpGldu8eDJl4CEHKcHXpGMI35LTlmg1ovXNwOQ9NmRnyF2H6pXDj9amSGs7iQQD3FBSfIlzeyacAvcqlOJfg4bZsIvF8cmD7q92Mxv4bNnajHtDYbVBlCqo0MyCEwVL7-NjCIp75q9xk7x7kE60fkMplCbxp8UpQF8ts0m00.png)

```bash
@startuml
title Diagrama de actividades, Validacion de identidad
start
:Recibe peticion;
:valida la petición;
if (peticion valida?) then (yes)
  :envía datos al contenedor de persistencia;
if (respuesta válida?) then (yes)
  :devuelve las credenciales asociadas al usuario;
  :elimina los datos del usuario y el número asociado;
else (no)
  :envía la  respuesta del sistema de persistencia;

  end
endif
else (no)
  :envía respuesta de error;
  end
endif
stop
@enduml
```
[back](../../../../Diagramas.md)

