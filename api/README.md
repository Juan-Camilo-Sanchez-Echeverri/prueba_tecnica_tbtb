<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Dev

1. Clonar el proyecto
2. Copiar el `.env.template` y renombrar a `.env`
3. Ejecutar

```
npm install
```

4. Levantar la imagen (Docker Desktop)

**Nota:** Si no tienes Docker, asegúrate de tener PostgreSQL instalado en tu equipo.

```
docker-compose up -d
```

5. Levantar el backend de Nest

```
npm start:dev
```

6. Visitar el sitio

```
http://localhost:<PUERTO_ESPECIFICADO_EN_EL_ENV>
```
