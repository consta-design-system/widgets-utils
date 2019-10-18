Для публикации пакетов авторизуемся из личной директории (из директории проекта не получится) здесь:

```
npm login --registry=https://nexus.csssr.space/repository/csssr/
```

С логином `npm` и паролем `hunger-respire-really-payoff-molder`

### Методы

- **updateBaseSize** - Обновляет переменные `--base-size` и `baseSize`, которые используются для адаптива дашборда и подсчета размеров элемента при ресайзе дашборда

- **getCalculatedSize** - Возвращает размер с учетом ресайза дашборда

- **calcSize** - Возвращает строку вида `calc(SIZE * var(--base-size))`. Используется в `postcss-functions`, так же можно использовать напрямую для вставки в `style` аттрибут элемента
