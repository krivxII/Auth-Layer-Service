![Diagrama actividad Registrar](http://www.plantuml.com/plantuml/png/dP6nJWCn44HxVyMKbowYl1Ja6_Y3nPw8HJxxvDqxYR_78K8O6Y25fV5e_CRQFPjByst9uKE4-ObHducLhb5hEOLvbwn9a6KmzOBfyuPRuF40Vs71z4Ox161csLMGnAj1Cc8jpi9K6zALtw9QDwBA3TTewqPpkOkti9YyilsPbhXlp3lnbNmu7a-1sOYfrA4o2uPKOePTlxx8psA09OL-zF9lpZYGNqaZ1MojjkzFpEiQpbttnRu3)

```bash
@startuml
start
:Recibe peticion;
:valida la peticion;
if (peticion valida?) then (yes)
  :envia datos al contenedor de percistencia;
if (respuesta valida?) then (yes)
  :envia datos al contenedor de mensajeria;
if (respuesta valida?) then (yes)
  :devuelve respuesta 200;
else (no)
  :envia la  respuesta del sistema de mensajeria;
  end
endif
else (no)
  :envia la  respuesta del sistema de percistencia;
  end
endif
else (no)
  :envia respuesta de error;
  end
endif
stop
@enduml
```

[back](../../../../Diagramas.md)