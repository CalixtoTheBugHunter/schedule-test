# Personal Schedule

![project preview](/public/screenshot.png "Project preview")
## Documentation

Welcome to this project. It's related to a schedule system, with customized reminders.

Tech specs: Vue 3, Vuex, Router, Eslint + Prettier, Jest.

Styles: SCSS with sass-loader

## What is done

Bellow we have the features created for this project
### Mandatory Features

* Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also,
include a city.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select color when creating a reminder and display it appropriately.
* Ability to edit reminders – including changing text, city, day, time and color.
* Add a weather service call from a free API such as Open Weather Map, and get the
weather forecast (ex. Rain) for the date (not in free API) of the calendar reminder based on the city.
* Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user
entered day and time. Also, include a city.
### Bonus (Optional)

* Expand the calendar to support more than the current month.
* Properly handle overflow when multiple reminders appear on the same date.
* Functionality to delete one or ALL the reminders for a specific day
## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## How components works

Each component has HTML, scripts and SCSS in the same file, using the maximum of clean code. To create CSS classes we are using BEMCSS model. In script, we use fewer calls in DOM and more Vue reactivity. Another good practice is to write logical parts only in script and using computed functions instead of HTML section.

For model box we are using CSS grid and flexbox.

See the example:
```vue
<template>
    <section class="BaseComponent">
        <h1 class="BaseComponent__title">Hello World</h1>
    </section>
<template>

<script>
export default {
    name: 'BaseComponent'
}
</script>

<style lang="scss" scoped>
.BaseComponent {
    display: grid;
    &__title {
        color: red;
    }
}
</style>
```

## Global Styles

The global styles, variables and SCSS mixins are in folder assets/scss.

*main.scss* is loaded in App.vue.

Automatically the file *scoped.scss* is exported and imported in every single file. We have variables for colors, spacing, mixins, z-index.

## Components

As components patterns we are using Atomic Design in folder */components*.
We have some prefix to indentify the component type.

* Atoms (Base)
* Molecules (no prefix)
* Organisms (The)

## Unit Tests

Unit tests coverage: 44%
We are using snapshots tests too.

### Tests
```
yarn test
```

### Tests with hot-reloads
```
yarn test:watch
```

## API mocked

To use *openweathermap* api we are usign Axios in folder */api*.

## Next Steps

What I would to do in next steps

 - [ ] Add a colorpicker
 - [ ] Add validations messages
 - [ ] Change unit tests from vue-test-utils to testing library
 - [ ] Test E2E with Cypress
 - [ ] Add Axios interceptors
 - [ ] Model a service pattern for api calls
 - [ ] Storybook documentation
 - [ ] Expand the schedule for handle with years
