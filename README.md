# Utils

NPM: https://www.npmjs.com/package/@consta/widgets-configs

## Установка, обновление, публикация и подключение пакета

Инструкции находятся в пакете [consta-widgets-configs](https://github.com/gazprom-neft/consta-widgets-configs)

## Зависимости
- NodeJS = 12.x
- Yarn >= 1.19

## Установка зависимостей

```bash
$ yarn install
```

## Основные команды

```bash
# Сборка и старт development-сервера
$ yarn start

# Сборка для production
$ yarn run build

# Линтинг всех файлов
$ yarn run lint

# Форматирование всех файлов prettier
$ yarn run format

# Запуск тестов
$ yarn test
```

### Методы

- **getCalculatedSize** - Возвращает размер с учетом ресайза дашборда

- **calcSize** - Возвращает строку вида `calc(SIZE * var(--base-size))`. Используется в `postcss-functions`, так же можно использовать напрямую для вставки в `style` аттрибут элемента
