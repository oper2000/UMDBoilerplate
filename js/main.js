// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    moduleA: '../libs/moduleA',
    moduleB: '../libs/moduleB',
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.doSomething();
});