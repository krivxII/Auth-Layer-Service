![imagen](http://www.plantuml.com/plantuml/png/ROunJaCn44HxdsBAHE84IK4AJa11lzWJM6c_7NdtVudZS00gZf2BuVmK1972qdXtvyqSFAJ7F5aA3IEULDwwJ892I0vTj4YXF-15RCYihLvMMbZZiaghF-sUcVMLE34qw_cxxjDkMHqmkPtg4PlhTu2k5uzRn3ihDX_qRG9shClvIr0acaCCkTLWPMaTvHBHNNqCiigLr-cdcHw2vVnvbrYupBI5C77aphAwZGxnDbIHDMZsMRgsVQ8viQdjjeu9y9jKQ5XhJFA_5C1QqdXwl8kwnO2zj_xNuz5EwJ3qFDaF.png)

```bash
@startuml
title Diagrama de actividades, Validacion de identidad
start
:Recibe petición;
:valida la petición;
if (peticion valida?) then (yes)
  :envía datos al contenedor de persistencia;
if (respuesta válida?) then (yes)
  :devuelve las credenciales asociadas al usuario;
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

