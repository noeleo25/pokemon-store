# Vuex sample project - Pokemon Shopping Cart :moneybag: :money_with_wings:
*Developed with Vue.js and Bootstrap Vue*

Demo: *pending

Using Vuex to manage a shopping cart
* Add / Remove items (with actions and mutations)
* Filter items with getters
* Calculate different totals with getters
* Using Vuex modules to manage entities in the store
* Using some Vuex helpers
* Using [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate) to keep persistent state of our store
* Using axios to get items (stock) in our store


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Json Server for fake REST API - For Windows O.S
In case you want to test API request with axios, follow next steps:
1. Install json server
```
npm install -g json-server
```
2.. Create a .json file and put inside the items you want to return. I.E:
```
{
  "items": [
    {
      "id": 1,
      "name": "Charizard",
      "type": "Fire", 
      "color": "red",
      "rate": 4
    }, ... ]
}
```
3. Run server:
```
json-server --watch file-name.json
```
4. The endpoint to use in your axios call will be show in console when you run server. I.E.
```
 http://localhost:3000/items
```



