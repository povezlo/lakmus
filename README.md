# Lakmus

Тестове завдання Лакмус. Створено на Ангулар 15.

### Використані додаткові ліби:

- eslint
- prettier
- ngx-bootstrap
- ngx-toastr
- uuid

### Веб-додаток містить дві сторінки.

- Головна Home page
- Форма з динамічною таблицею діагнозів.
  На сторінці знаходиться форма, де можна вибрати діагнози з ICPC2.
  Також можна сформувати json з даних. Id в масиві conditions генерується завдяки randomId сервісу.
  Якщо не вказано жодного діагнозу – масив conditions буде пустим.
  Якщо для вибраного діагнозу не вказано коментар – у notes діагнозу буде передаватися пусте значення.
  Також є календар. Календар має валідацію дати: не може бути дати в минулому.

### Створені сервiси:

- api-service (дозволяє отримати дані із сервера)
- randomId service (дозволяє отримати рандомне id )
- json service (дозволяє сформувати json об'єкт)

### Додатково

- Створено ErrorInterceptor (перехоплює помилки з сервера, виводить повідомлення про помилку на екран )

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
