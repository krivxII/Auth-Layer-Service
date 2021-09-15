![Diagrama actividad Registrar](http://www.plantuml.com/plantuml/png/ZP4nRiCm34LtdOAZ0tG8Ejf3CxGNQ4_0IZyf2raoA5f03zMfHyZ5QiKka245CcZXV_yH40_5M6qUepEn27eMFYcFJ074tgHAuF10BwcUltCR-goAJ8ZmfkUV93wxYyFrh_3o3ffWuYMdmVMLuzAdoDjmuGSdH-h-65g9fntP1n9rNoWxHzI_OKi8yTRArR86AvblEKv8q8jZH2hyYM4BaAhywsvCG9qHAqXHfXd5c1xt-y4X5b2NSjj0FTgty1KJG53DsXn8mIrFZjUbkpl5ykGEIA7TvXS0)
```bash
@startuml
title Diagrama de actividad, Envío de correo electrónico
start
:Recibe peticion;
:valida la petición;
if (peticion valida?) then (yes)
  :Se valida el correo electrónico;
if (correo valido?) then (yes)
  :Se genera el mensaje;
  :Se envia el correo electrónico;
  :devuelve respuesta 200;
else (no)
   :envía respuesta de error;
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