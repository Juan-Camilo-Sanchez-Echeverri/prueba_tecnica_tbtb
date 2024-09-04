<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Dev

## Ejecución con Docker

1. Asegúrate de estar en la carpeta del backend dentro del repositorio.
2. Copiar el `.env.template` y renombrar a `.env`.
3. Levantar la imagen (Docker Desktop).

   ```bash
   docker-compose up -d
   ```

4. Visitar el sitio.

   ```
   http://localhost:<PUERTO_ESPECIFICADO_EN_EL_ENV>
   ```

## Ejecución Local

1. Asegúrate de estar en la carpeta del backend dentro del repositorio.
2. Copiar el `.env.template` y renombrar a `.env`.
3. Verificar que PostgreSQL esté funcionando en tu equipo.
4. Ejecutar:

   ```bash
   npm install
   ```

5. Levantar el backend de Nest.

   ```bash
   npm run start:dev
   ```

6. Visitar el sitio.

   ```
   http://localhost:<PUERTO_ESPECIFICADO_EN_EL_ENV>
   ```
