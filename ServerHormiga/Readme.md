# Backend HormigaApp

**_ Requirimientos_**:

- Tener Node
- Mongo

### Instrucciones

Una vez verificar que está mongo corriendo, en ubuntu con **_sudo services mongod start_** instalar paquetes de node:

        npm install

Ya están scripts para que contruya y transpile de typescript a javascript, solo basta con poner:
npm run dev

### Traspilar De TS a JS

    npm run tsc

La ruta de salida es /build

### Producción

    npm run start
