# Lakmus

Тестове завдання Лакмус. Створено на Ангулар 15.

### Використані додаткові ліби:
- eslint
- prettier
- ngx-bootstrap
- uuid

### Веб-додаток містить дві сторінки.
- Головна Home page
- Форма з динамічною таблицею діагнозів. На сторінці форма, де можна вибрати діагнози за ICPC2. Сформувати json з цих даних. Id в масиві conditions генерується завдяки сервісу randomId. Є валідація дати: не може бути у минулому. Якщо не вказано жодного діагнозу - не формувати масив conditions. Якщо для обраного діагнозу не вказаний коментар - в notes діагноза передавати пусте значення


### Створені сервiси:
- api-service  (дозволяє отримати дані із сервера)
- randomId service (дозволяє отримати рандомне id )
- json service (дозволяє сформувати json об'єкт)


## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
