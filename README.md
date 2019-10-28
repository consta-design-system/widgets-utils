# Utils

## Зависимости
- NodeJS >= 10
- Yarn >= 1.16

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

Для публикации пакетов авторизуемся из личной директории (из директории проекта не получится) здесь:

```
npm login --registry=https://nexus.csssr.space/repository/csssr/
```

С логином `npm` и паролем `hunger-respire-really-payoff-molder`

### Методы

- **updateBaseSize** - Обновляет переменные `--base-size` и `baseSize`, которые используются для адаптива дашборда и подсчета размеров элемента при ресайзе дашборда

- **getCalculatedSize** - Возвращает размер с учетом ресайза дашборда

- **calcSize** - Возвращает строку вида `calc(SIZE * var(--base-size))`. Используется в `postcss-functions`, так же можно использовать напрямую для вставки в `style` аттрибут элемента
