# challengeGrupo6
Antes de iniciar debemos tener XAMPP o MySql instalado![image](https://github.com/lucastinte/challengeGrupo6/assets/60526453/d50b62f4-a11c-4ad2-a4f5-01da92733e42)
.
-una vez clonado el repositorio inciar en la carpeta backend npm i
luego
```
npx sequelize-cli db:create

npx sequelize-cli db:migrate --name create-genders
npx sequelize-cli db:migrate --name create-professions
npx sequelize-cli db:migrate --name create-applicants

npx sequelize-cli db:seed:all


```
en envexample ponemos el nuestro puerto para levantar nuestro servidor
y finalmente levantamos el servidor

`npm test`

Ahora para levantar el frontend
entramos en el directorio front-end
ejecutamos 
npm i

luego para levantar el servidor

`npm run dev`

video demostracion

https://github.com/lucastinte/challengeGrupo6/assets/60526453/08645ecb-73d0-4ae9-9583-79d244717560

