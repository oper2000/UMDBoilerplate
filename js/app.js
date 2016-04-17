define([
  'moduleA',
  'moduleB',
], function(moduleA, moduleB){
  var doSomething = function(){
    moduleA.hello('Hello');
  }

  return {
    doSomething: doSomething
  };
});