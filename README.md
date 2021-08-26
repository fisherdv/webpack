# Сборка UI с помощью webpack

Установлен ```node.js```

![Npm version](/screenshots/npm_version.png)

Установлен ```babel``` и ```axios```

![Package list](/screenshots/package_list.png)

Запущен ```babel``` 

```sh
npx babel src -d lib
or
npm run babel
```
Получен страшный файлик 

![Babel](/screenshots/babel.png)


Добавлен ```webpack.config.js```
и скрипты для запуска:
```
npm run webpackDev
npm run webpackBuild
```