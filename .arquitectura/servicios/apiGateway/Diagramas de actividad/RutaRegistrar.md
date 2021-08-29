![Diagrama actividad Registrar](http://www.plantuml.com/plantuml/png/dP9DIaCn58NdMSKPjk2WE6m7Tk0AkeFhosczafUKtFi2BiS5E789tPXfgzZYm9z081o--vqGiZQNwjEOWgidubvbLsKKH486rwPHuWqstAbvBSTuiacgbd2Q3CiD1tqWzdGTjEHLM3P9VGf9FiB3MqzrYzadWpDnDuS_CcFsJ9i7OCdS3g-2A5uCaZ2KxCoCfI8U6wgfzM1GEVigRJ_HND0EB_ymZimcJwmT-QqmiarCZVX2RnUBLM0oOfRBPMiIN62H2QVxZ_Aj6s2EeM_T_j5q_Iu_gwuqOAsbNi-ObtrOz_FnJ_Jr3W00)

```bash
@startuml
title Diagrama de actividad, Registro de usuario
start
:Recibe peticion;
:valida la petición;
if (peticion valida?) then (yes)
  :envía datos al contenedor de persistencia;
if (respuesta válida?) then (yes)
  :envía datos al contenedor de mensajería;
if (respuesta válida?) then (yes)
  :devuelve respuesta 200;
else (no)
  :envía la  respuesta del sistema de mensajería;
  end
endif
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