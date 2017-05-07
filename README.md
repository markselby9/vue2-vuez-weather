# vue2-vuez-weather

> A weather report app using Vue2.x and [Vuez](https://github.com/markselby9/vuez)

## Explanation

It's a demo project for [Vuez](https://github.com/markselby9/vuez), with the boilerplate of Vue2.x. You can run the demo project and check the result.

The code here is simple, as Vuez itself is simple :). You need only to care about these places:

1. Two actions registered on name, `city` and `result`. The two actions are in the created hook of `ShowResult.vue` and `Weather.vue`, using `store.action()` API.

2. Some observations on these two names, whenever `city` and `result` are changed. The observe API is called using `store.observe()` API.

Nothing more. As you can see, data communications and event passing happens in the three components of this demo project, but no `props` or global event bus is used. It's simple with only `observe` and `action` API to handle the whole thing with data.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
